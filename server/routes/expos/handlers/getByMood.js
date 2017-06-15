const Expo = require(__base + 'models/expo')


function getByMood(req, res) {
    const { mood } = req.params
    console.log("Get mood expos", mood )

    Expo
        .find({ category: { "$in" : [req.params.mood] } })
        .populate("center")
        .exec(function (err, expos) {
			if (err) return handleError(err);
			res.json(expos)
		});
}

module.exports = getByMood
