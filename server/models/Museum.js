const mongoose = require('mongoose');
const collection = 'museums'

const MuseumSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	address: String,
	image: String,
	description: String,
	telf: String,
	url: String,
	position: {
		latitude: Number,
		longitude: Number
	},
	openingTimes: String,
	openingToday: String,
}, { collection })

module.exports = mongoose.model('Museum', MuseumSchema);
