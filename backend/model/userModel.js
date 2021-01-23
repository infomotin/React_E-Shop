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
        type: String,
        required: false,
        default: false
    },
    fname: {
        type: String,
        required: false,
        default: 'Motin'
    },
    lname: {
        type: String,
        required: false,
        default: 'Abdul'
    }

}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)


export default User