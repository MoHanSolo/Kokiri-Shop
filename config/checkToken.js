// verifying token authentication is valid
// if valid, set the loggedInUser for req, res, cycle
require('dotenv').config()
const jwt = require('jsonwebtoken')

// point is to get rid of the bearer part
module.exports = (req, res, next) => {
    let token = req.get('Authorization') || req.query.token
    if(token){
        token = token.split(' ')[1]
        jwt.verify(token, process.env.SECRET, (err, decoded) => {
            req.user = err ? null : decoded.user
            req.exp = err ? null : new Date(decoded.exp * 1000)
        })
        return next()
    } else {
        req.user = null
        return next()
    }
}