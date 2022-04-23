const express = require('express')
const path = require('path') //for get absolute path

const app = express()

//setup static and middleware
app.use(express.static('./public')) 

//sending file(html)
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './html pages/home.html'))
})

app.all('*', (req, res) => {
    res.status(404).send('<h1>Resource not found!</h1>')
})

app.listen(5000, () => {
    console.log('Server is listning in port 5000');
})