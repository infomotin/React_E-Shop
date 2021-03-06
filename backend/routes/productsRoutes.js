import express from 'express'
import {getProducts,getProductById} from '../controllers/productControllers.js'
const router = express.Router()
router.route('/').get(getProducts)
router.route('/:id').get(getProductById)
export default router 

//@decs Fetch all product
//@route GET /api/products
//@access public 
// router.get('/', asyncHandler(async(req, res) => {
//     const products = await Product.find({})
//         // res.status(401)
//         // throw new Error('Not Error Just Test')
//     res.json(products)
// }))

//@decs Fetch all product
//@route GET /api/products
//@access public
// router.get('/:id', asyncHandler(async(req, res) => {
//     const product = await Product.findById(req.params.id)
//     if (product) {
//         res.json(product)
//     } else {
//         res.status(404)
//             // .json({ message: 'Product Not in List ' })
//         throw new Error('Product Not in List')
//     }

// }))