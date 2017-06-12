const Expo = require( __base + 'models/expo')

function addExpo( req, res ) {
	const { name, center, address, category, urlExternal, description, image, imageCenter, urlMap, infoCenter, priceCenter, openingToday, openingTimes } = req.body
	const expo	= new Expo( { name, center, address, category, urlExternal, description, image, imageCenter, urlMap, infoCenter, priceCenter, openingToday, openingTimes } )
	expo.save()
		.then( () => res.status(200).json({ msg: 'expo inserted properly'}) )
		.catch( () => res.status(500).json({ msg: 'error inserting expo'}) )
}

module.exports = addExpo