import {Router} from "express";

const productRoutes = Router()

productRoutes.get('/', (req, res) => res.json('getProducts'))

export default productRoutes;
