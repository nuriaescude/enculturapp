const Expo = require( __base + 'models/Expo')
const Museum = require( __base + 'models/Museum')

function getAll( req, res ) {

	Expo.find()
		.then( expos => res.json(expos) )

}

module.exports = getAll