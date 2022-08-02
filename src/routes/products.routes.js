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
productRoutes.get('/:productId', getProductById)
productRoutes.put('/:productId', updateProducts)
productRoutes.delete('/:productId', deleteProducts)
productRoutes.post('/', createProduct)

export default productRoutes;
