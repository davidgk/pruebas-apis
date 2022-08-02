import Product from "../models/Product";


export const getProducts = async (req, res) => {
    const products = await Product.find();
    res.json(products)
}

export const createProduct =async  (req, res) => {
    console.log(req.body)
    const {name, category, imgUrl, price} = req.body;
    const newProduct = new Product({name, category, imgUrl, price});
    const prodSaved = await newProduct.save();
    res.status(201).json(prodSaved);
}

export const getProductById = (req, res) => {

}

export const updateProducts = (req, res) => {

}

export const deleteProducts = (req, res) => {

}
