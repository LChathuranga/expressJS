const express = require('express')
const {posts, todos} = require('./data')

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


//access user single parameter
app.get('/api/posts/:productID', (req, res) => {
    const {productID} = req.params
    const singlePost = posts.find((post) => post.id === Number(productID)) 

    if(!singlePost){
        res.status(404).send('Product Does Not Exist')
    }

    res.json(singlePost)
})

//we can use multiple parameters as well
app.get('/api/posts/:productID/reviews/:reviewID',((req, res) => {
    console.log(req.params);
    res.send('hello')
}))

//quary (sorting in this)
app.get('/api/v1/query',(req, res) => {
    const {search, limit} = req.query
    let sortedTodos = [...todos]

    if(search){
        sortedTodos = sortedTodos.filter((todo) => {
           return todo.title.startsWith(search)
        })
    }
    if(limit){
        sortedTodos = sortedTodos.slice(0, Number(limit))
    }
    if(sortedTodos.length < 1){
        // res.status(200).send('No products match your search')
        return res.status(200).json({sucess: true, data: []})
    }
    res.status(200).json(sortedTodos)
})

app.listen(5000, () => {
    console.log('Server Listning in port 5000');
})