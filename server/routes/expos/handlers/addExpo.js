const Expo = require( __base + 'models/expo')

function addExpo( req, res ) {
	const { name, center, category, description, image, imageCenter } = req.body
	const expo	= new Expo( { name, center, category, description, image, imageCenter } )
	expo.save()
		.then( () => res.status(200).json({ msg: 'expo inserted properly'}) )
		.catch( () => res.status(500).json({ msg: 'error inserting expo'}) )
}

module.exports = addExpo