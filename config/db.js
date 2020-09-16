const mongoose = require('mongoose')

const connetDB = async () => {
	const conn = await mongoose.connect(process.env.DB_ADDRESS, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	console.log(conn.connection.host)
	console.log('DB IS CONNECTED')
}

module.exports = connetDB
