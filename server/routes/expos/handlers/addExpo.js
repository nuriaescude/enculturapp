const Expo = require( __base + 'models/Expo')

function addExpo( req, res ) {
	const expoModelData = Object.assign(req.body);
	expoModelData.category = expoModelData.categories;
	// { name, center, address, category, url, description, image, price, imageCenter, urlMap, infoCenter, openingToday, openingTimes } 
	const expo = new Expo(expoModelData)
	Expo.save()
		.then( () => res.status(200).json({ msg: 'expo inserted properly'}) )
		.catch( () => res.status(500).json({ msg: 'error inserting expo'}) )
}

module.exports = addExpo