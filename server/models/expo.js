const mongoose = require('mongoose');
const collection = 'expos'

const ExpoSchema = new mongoose.Schema({
  name: {
  	type: String,
  	required: true
  },
  description: String,
  category: String,
  center: String,
  address: {
  	street : String,
		zipCode: String,
		city   : String,
		coord  : [Number],
  },
  openHours: String,
  image: String,
  imageCenter: String,
}, { collection })

module.exports = mongoose.model('Expo', ExpoSchema);