import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import products from './data/products.js'
import User from './model/userModel.js'
import Product from './model/productModel.js'
import Order from './model/orderModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async() => {
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        const createdUsers = await User.insertMany(users)
        const adminUser = createdUsers[0]._id

        const sampleProducts = products.map(product => {
            return {...product, user: adminUser }
        })
        await Product.insertMany(sampleProducts)
        console.log(
            'data inseat sucssecsfull'.green.bold)

        process.exit()
    } catch (error) {
        console.log(`Data Not inseart on Mongodb Error is ${error}`.red.bold)
        process.exit(1)
    }
}



const destroytData = async() => {
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()


        console.log('data  Delete '.green.bold)

        process.exit()
    } catch (error) {
        console.log(`data not Delete ${error}`.red.bold)
        process.exit(1)
    }
}


if (process.argv[2] === '-d') {
    destroytData()
} else {
    importData()
}