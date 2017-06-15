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
  url: String,
  center: {
  	type: mongoose.Schema.ObjectId,
  	ref: 'Museum'
  },
  price: {
  	type: String,
  	default: 0
  }
}, { collection })

module.exports = mongoose.model('expo', ExpoSchema);
