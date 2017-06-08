const Expo = require(__base + 'models/expo')

function getByMood(req, res) {
    const { mood } = req.params
    console.log("Get mood expos", mood )

    Expo
        .find({ category: { "$in" : [req.params.mood] } })
        .then(expos => res.json(expos))
        .catch(err => {
            throw err
        })
}

module.exports = getByMood
