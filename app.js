const express = require("express");
const {people} = require("./data")

const app = express()

app.use(express.static('./methods-public'))

//pharse form data
app.use(express.urlencoded({extended: false}))

//pharse json
app.use(express.json())

app.get('/api/people', (req, res) => {
    res.status(200).json({success: true, data: people})
})

app.post('/api/people', (req, res) => {
    const {name} = req.body
    if(!name){
        return res
            .status(400)
            .json({success: false, msg: 'Please provide name'})
    }
    res.status(201).json({success: true, person: name})
})

app.post('/api/postman/people', (req, res) => {
    const {name} = req.body
    if(!name){
        return res
            .status(400)
            .json({success: false, msg: 'Please provide name'})
    }
    res.status(201).json({success: true, data: [...people, name]})
})

app.post('/login', (req, res) => {
    const {name} = req.body;

    if(name){
        return res.status(200).send(`Welcome ${name}`)
    }

    res.status(401).send('Please provide credentials')
})

//put(update)
app.put('/api/people/:id', (req, res) => {
    const {id} = req.params
    const {name} = req.body
    
    const person = people.find((person) => person.id === Number(id))

    if(!person){
        return res
            .status(404)
            .json({success: false, msg: `No person with id : ${id}`})
    }
    const newPeple = people.map((person) => {
        if(person.id === Number(id)){
            person.name = name
        }
        return person
    })
    res.status(201).json({success: true, data: newPeple})

})

//delete method
app.delete('/api/people/:id', (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id))
    if(!person){
        return res
            .status(404)
            .json({success: false, msg: `No person with id : ${req.params.id}`})
    }
    const neewPeople = people.filter((person) => person.id !== Number(req.params.id)) 
    return res.status(200).json({success: true, data: neewPeople})
})

app.listen(5000, () => {
    console.log('Server listen on port 5000');
})