// const express = require('express')
//     // adding 
// const dotenv = require('dotenv')
// const products = require('./data/products.js')
//     // env configerrations 


import express from 'express'
import dotenv from 'dotenv'
import products from './data/products.js'

dotenv.config()



const app = express()
app.get('/', (req, res) => {
    res.send('API RUNNENG...')
})
app.get('/api/products', (req, res) => {
    res.json(products)
})
app.get('/api/products/:id', (req, res) => {
    const product = products.find(p => p._id === req.params.id)
    res.json(product)
})

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Sever is Running ${process.env.NODE_ENV} server  port is ${PORT}`))