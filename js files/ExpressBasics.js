const express = require('express')
const app = express()

//app.get
app.get('/', (req, res) => {
    console.log('user hit the Resourse');
    res.status(200).send('Home Page')
})
app.get('/about', (req, res) => {
    res.status(200).send('About Page')
})

//app.all
app.all('*', (req, res) => {
    res.status(404).send('<h1>resource not found!</h1>')
})

//listning
app.listen(5000, () => {
    console.log('Server is istning in port 5000...');
})