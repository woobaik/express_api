const express = require('express')
const app = express()
const dotenv = require('dotenv')
const connectDB = require('./config/db')
dotenv.config()

connectDB()
//middleware
const myLogger = require('./middleware/logger')
app.use(myLogger)

const PORT = 5050
const bootcampRouter = require('./routes/bootcampRouter')
app.use('/bootcamps', bootcampRouter)

const server = app.listen(5050, () => {
	console.log(`Example app listening at http://localhost:${PORT}`)
})

//Handle unhandled
process.on('unhandledRejection', (err, promise) => {
	console.log(`Error: ${err.message}`)
	server.close(() => process.exit(1))
})
