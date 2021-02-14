import Product from '../model/productModel.js'
import asyncHandler from 'express-async-handler'

//@decs Fetch all product
//@route GET /api/products
//@access public 
const getProducts =asyncHandler(async(req, res) =>{
    const products = await Product.find({})
    res.json(products)
})
//@decs Fetch all product
//@route GET /api/products
//@access public
const getProductById =asyncHandler(async(req, res) =>{
    const product = await Product.findById(req.params.id)
    if (product) {  
        res.json(product)
    } else {
        res.status(404)
            // .json({ message: 'Product Not in List ' })
        throw new Error('Product Not in List')
    }
})


export {getProducts,getProductById}