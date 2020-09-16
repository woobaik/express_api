exports.getBootcamps = (req, res) => {
	res.status(200).send('ALL BOOTCAMPS INFORMATION from controller')
}

exports.postBootcamps = (req, res) => {
	res.status(200).send('POST a new Bootcamp')
}

exports.getABootcamp = (req, res) => {
	res.status(200).send('GET a bootcamp')
}

exports.modiftyBootcamp = (req, res) => {
	res.status(200).send('BOOTCAMPS PATCHED')
}

exports.deleteBootcamp = (req, res) => {
	res.status(200).send('BOOTCAMPS REMOVED')
}
