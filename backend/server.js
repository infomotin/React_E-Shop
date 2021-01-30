// const express = require('express')
//     // adding 
// const dotenv = require('dotenv')
// const products = require('./data/products.js')
//     // env configerrations 


import express from 'express'
import dotenv from 'dotenv'
// import products from './data/products.js'
import connectDB from './config/db.js'
import colors from 'colors'
import productRoutes from './routes/productsRoutes.js'
import userRoutes from './routes/userRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

dotenv.config()

connectDB()

const app = express()

// is testing for exceptions jsone data 
app.use(express.json())

// app.use((req, res, next) => {
//     console.log(req.originalUrl)
//     next()
// })


app.get('/', (req, res) => {
        res.send('API RUNNENG...')
    })
    // app.get('/', (req, res) => {
    //     res.json(products)
    // })
    // app.get('/:id', (req, res) => {
    //     const product = products.find(p => p._id === req.params.id)
    //     res.json(product)
    // })

app.use('/api/products', productRoutes)
app.use('/api/user', userRoutes)
    //Error Hendeler Define 
    //lamda expertions

app.use(notFound)



app.use(errorHandler)


const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Sever is Running ${process.env.NODE_ENV} server  port is ${PORT}`.green.underline))