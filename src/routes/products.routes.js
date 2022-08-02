import {Router} from "express";
import {
    createProduct,
    deleteProducts,
    getProductById,
    getProducts,
    updateProducts
} from "../controllers/products.controller";

const productRoutes = Router()

productRoutes.get('/', getProducts)
productRoutes.put('/:productId', updateProducts)
productRoutes.delete('/:productId', deleteProducts)
productRoutes.get('/:productId', getProductById)
productRoutes.post('/', createProduct)

export default productRoutes;
