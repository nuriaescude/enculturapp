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
  address: String,
  imageCenter: String,
  center: String,
  urlMap: String,
  infoCenter: String,
  priceCenter: String,
  openingTimes: String,
  openingToday: String,
  // likes: [{type: ObjectId, ref: 'User'}]
}, { collection })

module.exports = mongoose.model('Expo', ExpoSchema);