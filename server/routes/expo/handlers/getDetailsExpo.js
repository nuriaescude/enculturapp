const Expo = require(__base + 'models/expo')

module.exports = (req, res) => {
  const {id} = req.params

  Expo
    .findById(id)
    .then(expo => res.json(expo))
    .catch(err => { throw err })
}