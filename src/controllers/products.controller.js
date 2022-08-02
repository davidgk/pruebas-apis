import Product from "../models/Product";


export const getProducts = async (req, res) => {
    const products = await Product.find();
    res.json(products)
}

export const createProduct =async  (req, res) => {
    const {name, category, imgUrl, price} = req.body;
    const newProduct = new Product({name, category, imgUrl, price});
    const prodSaved = await newProduct.save();
    res.status(201).json(prodSaved);
}

export const getProductById = async (req, res) => {
    console.log('getProductById')
    const product = await Product.findById(req.params.productId)
    res.json(product)
}

export const updateProducts = async (req, res) => {
    const productUpdated = await Product.findByIdAndUpdate(req.params.productId, req.body, {
        new: true
    })
    res.status(200).json(productUpdated)
}

export const deleteProducts = async (req, res) => {
    const product = await Product.findByIdAndDelete(req.params.productId)
    res.json("Product deleted")
}
