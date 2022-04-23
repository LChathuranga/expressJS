const express = require('express')
const {posts} = require('./data')

const app = express()

app.get('/',(req, res) => {
    res.send('<h1>Home Page</h1><a href="/api/posts">posts</a>')
})

//send what are we only wants 
app.get('/api/posts', (req, res) => {
    const newPosts = posts.map((post) => {
        const {userId, id, title} = post
        return {userId, id, title}
    }) 
    res.json(newPosts)
})

app.get('/api/posts/:productID', (req, res) => {
    const {productID} = req.params
    const singlePost = posts.find((post) => post.id === Number(productID)) 

    if(!singlePost){
        res.status(404).send('Product Does Not Exist')
    }

    res.json(singlePost)
})

app.listen(5000, () => {
    console.log('Server Listning in port 5000');
})