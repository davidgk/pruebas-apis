import User from "../models/User";
import jwt from "jsonwebtoken"
export const signoff= async (req, res) => {
    res.json('signoff')
}

export const signin  = async (req, res) => {
    res.json('signin')
}

export const signup  = async (req, res) => {
    const {username , email, password, roles} = req.body
    const newUser = new User({username,
        email,
        password: await User.encryptPassword(password),
        roles});
    const userSaved = await newUser.save();

    const whatImSavingInToken = { id: userSaved._id}
    const privateKey = '';
    const configurationObject = {};
    const jwtSaved = jwt.sign(whatImSavingInToken, privateKey, configurationObject)
    res.status(201).json(userSaved);

}
