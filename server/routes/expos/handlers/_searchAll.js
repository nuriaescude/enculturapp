const Expo = require(__base + 'models/Expo')

function searchAll(req, res)  {
  const {q = ''} = req.query

  Expo
    .find({$or: [{title: q}, {center: q}, {image: q}]})
    .populate('name image url')
    .then(expos => res.json(expos))
    .catch(err => res.status(500).json(err))
}

module.exports = searchAll

