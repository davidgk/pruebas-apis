import {Router} from "express";

export const userRouter = Router()
userRouter.get('/', (req, res) => res.json('getUsers'))

export default userRouter;
