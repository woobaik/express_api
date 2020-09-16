const express = require('express')
const BootcampRouter = express.Router()

const {
	getBootcamps,
	postBootcamps,
	getABootcamp,
	deleteBootcamp,
	modiftyBootcamp,
} = require('../controller/bootcampController')

BootcampRouter.get('/', getBootcamps)

BootcampRouter.post('/', postBootcamps)

BootcampRouter.get('/:id', getABootcamp)

BootcampRouter.put('/:id', modiftyBootcamp)

BootcampRouter.delete('/:id', deleteBootcamp)

module.exports = BootcampRouter
