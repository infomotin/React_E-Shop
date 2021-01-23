import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
    phone: {
        type: number,
        required: false
    },
    fname: {
        type: String,
        required: false
    },
    lname: {
        type: String,
        required: false
    }

}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)


export default User