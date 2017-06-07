const Expo = require(__base + 'models/expo')
// const User = require(__base + 'models/User')

module.exports = (req, res) => {
  const {id} = req.params
  let {like} = req.body
  let operator = (like === 1) ? '$push' : '$pull'
  Recipe
    .findByIdAndUpdate(id, {[operator]: {likes}})
    .then(recipe => {
      User
        .findByIdAndUpdate({_id}, {[operator]: {likes: id}})
        .then(res.json({success: true, msg: 'Like add'}))
        .catch(err => res.sendStatus(500).json(err))
    })
    .catch(err => res.status(500).json(err))
}