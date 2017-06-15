const Expo = require( __base + 'models/expo')

function addExpo( req, res ) {
	const expoModelData = Object.assign(req.body);
	expoModelData.category = expoModelData.categories; 
	const expo = new Expo(expoModelData)
	expo.save()
		.then( () => res.status(200).json({ msg: 'expo inserted properly'}) )
		.catch( () => res.status(500).json({ msg: 'error inserting expo'}) )
}

module.exports = addExpo