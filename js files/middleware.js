//using app.use

const express = require("express");
const app = express()
const logger = require('./logger')

// the order matter for using app.use
// app.use(logger)

//if we use the path for the app.get, then it fire with what req.path is startin with this path
app.use('/api', logger)

app.get('/', (req, res) => {
    res.send('Home Page')
})

//there is no console logged in home page
// app.use(logger)

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


//use middleware logger in all app.get functions

// const express = require("express");
// const app = express()
// const logger = require('./logger')

// app.get('/', logger, (req, res) => {
//     res.send('Home Page')
// })

// app.get('/about',logger, (req, res) => {
//     res.send('About Page')
// })

// app.listen(5000, () => {
//     console.log('Server is listning in port 5000');
// })