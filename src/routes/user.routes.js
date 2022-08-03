import {Router} from "express";
import productRoutes from "./products.routes";
import {createUser, getUserById, getUsers} from "../controllers/user.controller";

export const userRouter = Router()

productRoutes.get('/:userId', getUserById)
productRoutes.post('/', createUser)
productRoutes.get('/', getUsers)


export default userRouter;
