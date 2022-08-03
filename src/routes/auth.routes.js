import {Router} from "express";
import {signin, signoff, signup} from "../controllers/auth.controller";

const authRouter = Router()


authRouter.post('/signin', signin)
authRouter.post('/signoff', signoff)
authRouter.post('/signup', signup)

export default authRouter;
