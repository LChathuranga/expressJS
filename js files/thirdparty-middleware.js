const express = require("express");
const morgan = require('morgan')

const app = express()
const logger = require('./logger')
const authorize = require('./authorize')

//the order is matter
// app.use([logger, authorize])
 
//three types of middleware
//1- own, 2- express, 3- third party

//ex for 2
// app.use(express.static('./public')) 

//ex for third party
app.use(morgan('tiny'))

app.get('/', (req, res) => {
    res.send('Home Page')
})

app.get('/about', (req, res) => {
    res.send('About Page')
})

//multiple middleware can be use like this
// app.get('/api/products', [logger, authorize], (req, res) => {
//     res.send('Product Page')
// })

app.get('/api/item', (req, res) => {
    res.send('Item Page')
})

app.listen(5000, () => {
    console.log('Server is listning in port 5000');
})