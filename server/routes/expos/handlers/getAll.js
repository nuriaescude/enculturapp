const Expo = require( __base + 'models/expo')

function getAll( req, res ) {

	Expo.find()
		.then( expos => res.json(expos) )

}

module.exports = getAll