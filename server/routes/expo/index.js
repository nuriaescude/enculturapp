const express = require('express')
const router = express.Router()

const updateExpo = require('./handlers/updateExpo')
const getDetailsExpo = require('./handlers/getDetailsExpo')
const removeExpo = require('./handlers/removeExpo')
// const updateLike = require('./handlers/updateLike')

router.put('/:id', updateExpo)
router.get('/:id', getDetailsExpo)
router.delete('/:id', removeExpo)
// router.put('/like/:id', updateLike)

module.exports = router