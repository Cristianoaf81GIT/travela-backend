const mongoose = require('mongoose')
const Schema = mongoose.Schema

exports.travelSchema = Schema({
  name: String,
  phone: String,
  dateFrom: {type: Date},
  dateTo: {type: Date},
  origin: String,
  destination: String,
  travelers: {type: Number}
})