const express = require('express')
    // adding 
const dotenv = require('dotenv')
const products = require('./data/products')
    // env configerrations 

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