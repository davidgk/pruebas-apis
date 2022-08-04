import jwt from "jsonwebtoken"
import config from "../config";
export const verifyToken = async (req, res, next) => {
    const token = req.headers['x-api-key']
    if(!token) return res.status(403).json({message: 'No token provided'})
    const decoded = jwt.verify(token, config.PRODUCT_API);
    console.log(decoded)
    next()
    
}
