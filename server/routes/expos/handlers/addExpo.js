const Expo = require( __base + 'models/expo')

function addExpo( req, res ) {
	const { name, category, description } = req.body
	const expo	= new Expo( { name, category, description } )
	expo.save()
		.then( () => res.status(200).json({ msg: 'expo inserted properly'}) )
		.catch( () => res.status(500).json({ msg: 'error inserting expo'}) )
}

module.exports = addExpo