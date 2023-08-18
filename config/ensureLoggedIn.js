module.exports = (req, res, next) => {
    if(req.user) return next()
    res.status('401').json({ msg: 'Unauthorized user, get outta here!'})
}