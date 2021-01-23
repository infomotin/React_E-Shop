import mongoose from 'mongoose'
import User from 'userModel'
import Reviews from 'reviewModel'


// const reviewsSchema = mongoose.Schema({
//     name: { type: String, required: true },
//     rating: { type: Number, required: true },
//     comment: { type: String, required: true }


// }, {
//     timestamps: true
// })

const productSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectID,
        required: true,
        ref: 'User'

    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true

    },
    manufacture: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true

    },
    description: {
        type: String,
        required: false
    },
    reviews: [Reviews],
    rating: {
        type: Number,
        required: true,
        default: 0
    },
    numReviews: {
        type: Number,
        required: true,
        default: 0
    },
    price: {
        type: Float,
        required: true,
        default: 0
    },
    countInStock: {
        type: Float,
        required: true,
        default: 0
    }


}, {
    timestamps: true
})

const Product = mongoose.model('Product', productSchema)


export default Product