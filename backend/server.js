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

dotenv.config()

connectDB()

const app = express()
app.use((req, res, next) => {
    console.log(req.originalUrl)
    next()
})
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
    //Error Hendeler Define 
app.use((err, req, res, next) => {

})


const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Sever is Running ${process.env.NODE_ENV} server  port is ${PORT}`.green.underline))