import jwt from "jsonwebtoken"
import config from "../config";
import User from "../models/User";
export const verifyToken = async (req, res, next) => {
    const token = req.headers['x-api-key']
    if(!token) return res.status(403).json({message: 'No token provided'})
    try {
        console.log(token)
        const decoded = jwt.verify(token, config.PRODUCT_API);
        const userExists = await User.findById(decoded.id)
        if( !userExists) return res.status(404).json({message: 'User not exists'})
    } catch (e) {
        console.log(e)
        return res.status(403).json({message: 'Authentication Fail: Sign in again'})
    }
    next()

}
