const mongoose = require('mongoose')
const { travelSchema } = require('../schema/travel.schema')

module.exports = Travel = mongoose.model('Travel', travelSchema)