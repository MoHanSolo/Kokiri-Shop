// const mongoose = require('mongoose')


// mongoose.connect(process.env.MONGO_URI)

// mongoose.connection.once('open', () => {
//     console.log('Mongo is showing us love')
// })

require('dotenv').config()
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI);

const db = mongoose.connection;

db.on('connected', () => {
    console.log(`connected to ${db.name} at $${db.host}`)
});

module.exports = mongoose