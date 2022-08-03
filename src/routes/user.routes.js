import {Router} from "express";
import productRoutes from "./products.routes";
import {createUser, getUserById} from "../controllers/user.controller";

export const userRouter = Router()

productRoutes.get('/:userId', getUserById)
productRoutes.post('/', createUser)


export default userRouter;
