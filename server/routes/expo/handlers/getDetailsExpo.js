const Expo = require(__base + 'models/Expo')

module.exports = (req, res) => {
  const {id} = req.params

  Expo
    .findById(id)
    .populate("center")
    .exec(function (err, expo) {
		if (err) return handleError(err);
		res.json(expo)
	});
}

function handleError(error){
	console.log(error)
}