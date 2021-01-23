import mongoose from 'mongoose'


const reviewsSchema = mongoose.Schema({
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true }


}, {
    timestamps: true
})



const Reviews = mongoose.model('Reviews', reviewsSchema)


export default Reviews