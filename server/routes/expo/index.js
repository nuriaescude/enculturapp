const express = require('express')
const router = express.Router()

const updateExpo = require('./handlers/updateExpo')
const removeExpo = require('./handlers/removeExpo')

router.put('/:id', updateExpo)
router.delete('/:id', removeExpo)

module.exports = router