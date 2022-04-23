const authorize = (req, res, next) => {
    const {user} = req.query
    if(user === 'lahiru'){
        req.user = {name: 'lahiru', id: 1}
        next()
    }
    res.status(401).send("Unauthorized")
}

module.exports = authorize  