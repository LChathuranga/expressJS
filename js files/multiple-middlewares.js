const express = require("express");
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')

//the order is matter
app.use([logger, authorize])

app.get('/', (req, res) => {
    res.send('Home Page')
})

app.get('/about', (req, res) => {
    res.send('About Page')
})

app.get('/api/products', (req, res) => {
    res.send('Product Page')
})

app.get('/api/item', (req, res) => {
    res.send('Item Page')
})

app.listen(5000, () => {
    console.log('Server is listning in port 5000');
})