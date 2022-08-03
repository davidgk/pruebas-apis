import User from "../models/User";
import jwt from "jsonwebtoken"
import config from "../config";
import Role from "../models/Role";
export const signoff= async (req, res) => {
    res.json('signoff')
}

export const signin  = async (req, res) => {
    res.json('signin')
}

async function checkRoles(roles, user) {
    if(roles){
        const foundRoles = await Role.find({name: {$in: roles}})
        user.roles = foundRoles.map((rol) => rol.id);
    } else {
        user.roles = [(await Role.findOne({name: 'user'})).id];
    }
}

export const signup  = async (req, res) => {
    try {
        const {username , email, password, roles} = req.body
        const newUser = new User({username,
            email,
            password: await User.encryptPassword(password)});
        await checkRoles(roles, newUser)

        const userSaved = await newUser.save();

        const whatImSavingInToken = { id: userSaved._id}
        const privateKey = config.PRODUCT_API;
        const configurationObject = { expiresIn: 86400};
        const token = jwt.sign(whatImSavingInToken, privateKey, configurationObject)
        console.log(userSaved)
        res.status(201).json({token})
    } catch (e) {
        res.status(400).json({error:e})
    }

}
