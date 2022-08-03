import User from "../models/User";
import jwt from "jsonwebtoken"
import config from "../config";
import Role from "../models/Role";
export const signoff= async (req, res) => {
    res.json('signoff')
}

function createTokenObject(user) {
    const whatImSavingInToken = { id: user._id}
    const privateKey = config.PRODUCT_API;
    const configurationObject = { expiresIn: 86400};
    const token = jwt.sign(whatImSavingInToken, privateKey, configurationObject)
    return {token}
}

export const signin  = async (req, res) => {
    try {
        const {email, password} = req.body
        let user = await User.findOne({email});
        if(!user) return res.status(400).json({msg: "user not found"})
        if (user) {
            const isValid = await User.comparePassword(password, user.password )
            if(!isValid) return res.status(400).json({msg: "password Invalid", token: null})
            res.json(createTokenObject(user))
        }
    } catch (e) {
        res.json({ error: e })
    }
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
        res.status(201).json(createTokenObject(userSaved))
    } catch (e) {
        res.status(400).json({error:e})
    }

}
