require('dotenv').config()
require('./config/database')

const app = require('./app-server')

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
	console.log(`Fox, the hatch is open at port ${PORT}`)
})