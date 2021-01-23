import express from 'express'
import Product from '../model/productModel.js'
import * as asyncHandler from 'express-async-handler'

const router = express.Router()
    //@desc Fetch all Product 
    //@route GET api/products
    //@access Public  
router.get('/', asyncHandler((req, res) => {
    const products = await Product.find({})
    res.json(products)
}))

//@desc Fetch single Product 
//@route GET api/product/:id 
//@access Public

router.get('/:id', asyncHandler((req, res) => {
    const product = await Product.findById(req.params.id)
    if (product) {
        res.json(product)
    } else {
        res.status(404).json({ message: 'Product Not in List ' })
    }

}))

export default router