import User from "../models/User";
import jwt from "jsonwebtoken"
import config from "../config";
export const signoff= async (req, res) => {
    res.json('signoff')
}

export const signin  = async (req, res) => {
    res.json('signin')
}

export const signup  = async (req, res) => {
    try {
        const {username , email, password, roles} = req.body
        const newUser = new User({username,
            email,
            password: await User.encryptPassword(password),
            roles});
        const userSaved = await newUser.save();

        const whatImSavingInToken = { id: userSaved._id}
        const privateKey = config.PRODUCT_API;
        const configurationObject = { expiresIn: 86400};
        const token = jwt.sign(whatImSavingInToken, privateKey, configurationObject)
        res.status(201).json({token})
    } catch (e) {
        res.status(400).json({error:e})
    }

}
