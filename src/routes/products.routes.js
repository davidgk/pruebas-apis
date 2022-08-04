import {Router} from "express";
import {
    createProduct,
    deleteProducts,
    getProductById,
    getProducts,
    updateProducts
} from "../controllers/products.controller";
import {verifyToken} from "../middlewares";

const productRoutes = Router()

productRoutes.get('/', getProducts)
productRoutes.get('/:productId', getProductById)
productRoutes.put('/:productId', verifyToken, updateProducts)
productRoutes.delete('/:productId', verifyToken, deleteProducts)
productRoutes.post('/', verifyToken, createProduct)

export default productRoutes;
