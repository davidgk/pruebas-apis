import express from 'express';
import morgan from 'morgan'
import pkg from '../package.json'
import productRoutes from "./routes/products.routes";
import userRouter from "./routes/user.routes";
import authRouter from "./routes/auth.routes";
import rolesRoutes from "./routes/roles.routes";


export const app = express()

app.set('pkg', pkg)
app.use(morgan('dev'))
app.use(express.json())
app.get('/', (req,res) => res.json({
    author: app.get('pkg').author,
    name: app.get('pkg').name,
    version: app.get('pkg').version,
}))


app.use('/api/products', productRoutes)
app.use('/api/users',userRouter)
app.use('/api/auth',authRouter)
app.use('/api/roles',rolesRoutes)
