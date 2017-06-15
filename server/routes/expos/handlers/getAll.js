const Expo = require( __base + 'models/expo')
const Museum = require( __base + 'models/Museum')

function getAll( req, res ) {

	Expo.find()
		.then( expos => res.json(expos) )

}

module.exports = getAll