const Expo = require(__base + 'models/expo')

function getDetailsExpo(req, res) {
  const {id} = req.params

  Expo
    .findById(id)
    .populate("center")
    .exec(function (err, expo) {
		if (err) return handleError(err);
		res.json(expo)
	});
}

module.exports = getDetailsExpo

// function handleError(error){
// 	console.log(error)
// }