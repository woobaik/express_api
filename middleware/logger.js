const myLogger = (req, res, next) => {
	console.log('####  M Y  L O G G E R   ####')
	console.log(`###### Method is ${req.method} `)
	console.log(`####### Request time is ${req}`)
	next()
}

module.exports = myLogger
