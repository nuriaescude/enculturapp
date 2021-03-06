const Expo = require( __base + 'models/expo')

function updateExpo (req,res) {
	const { id } = req.params
	const { name, category, url, description, image, price, openingToday, openingTimes } = req.body

	const dataToUpdate = {}
	if (name) dataToUpdate.name = name
	if (category) dataToUpdate.category = category
	if (description) dataToUpdate.description = description
	if (image) dataToUpdate.image = image

	Expo.findByIdAndUpdate( id,  dataToUpdate)
		.then( () => res.status(200).json({ msg: `expo w/ id ${id} updated properly`}) )
		.catch( () => res.status(500).json({ msg: `error updating  expo w/ id ${id} `}) )
}

module.exports = updateExpo

