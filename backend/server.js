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
    //lamda expertions

app.use((req, res, next) => {
    const error = new Error(`Not Found -${req.originalUrl}`)
    res.status(404)
    next(error)
})
app.use((err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    res.status(statusCode)
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    })
})


const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Sever is Running ${process.env.NODE_ENV} server  port is ${PORT}`.green.underline))