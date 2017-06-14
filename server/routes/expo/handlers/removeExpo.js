const Expo = require(__base + 'models/Expo')

function removeExpo(req, res) {
    const { id } = req.params
    Expo.findByIdAndRemove(id)
        .then(() => res.status(200).json({ msg: `expo w/ id ${id} removed properly` }))
        .catch(() => res.status(500).json({ msg: `error removing  expo w/ id ${id} ` }))
}

module.exports = removeExpo
