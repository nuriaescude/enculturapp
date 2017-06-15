const express = require('express')
const router = express.Router()

const updateExpo = require('./handlers/updateExpo')
const getDetailsExpo = require('./handlers/getDetailsExpo')
const removeExpo = require('./handlers/removeExpo')


router.put('/:id', updateExpo)
router.get('/:id', getDetailsExpo)
router.delete('/:id', removeExpo)

module.exports = router