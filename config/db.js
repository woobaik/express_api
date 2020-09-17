const mongoose = require('mongoose')

const connetDB = async () => {
	const conn = await mongoose.connect(process.env.DB_ADDRESS, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})

	console.log(`DB IS CONNECTED at ${conn.connection.host}`.brightMagenta.bold)
}

module.exports = connetDB
