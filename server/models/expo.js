const mongoose = require('mongoose');
const collection = 'expos'

const ExpoSchema = new mongoose.Schema({
  name: {
  	type: String,
  	required: true
  },
  image: String,
  description: String,
  category: [String],
  urlExternal: String,
  address: {
  	street : String,
		zipCode: String,
		city   : String,
		coord  : [Number],
  },
  imageCenter: String,
  center: String,
  urlMap: String,
  infoCenter: String,
  priceCenter: String,
  openHoursDay: String,
  openHoursWeek: String,
  // likes: [{type: ObjectId, ref: 'User'}]
}, { collection })

module.exports = mongoose.model('Expo', ExpoSchema);