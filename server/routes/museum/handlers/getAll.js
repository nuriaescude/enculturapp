const Museum = require(__base + 'models/Museum')

function getAll( req, res ) {

	Museum.find()
		.then( museums => res.json(museums) )
}

module.exports = getAll