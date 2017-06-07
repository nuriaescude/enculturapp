const express = require('express')
const router = express.Router()

const addExpo = require('./handlers/addExpo')
const getAll = require('./handlers/getAll')


router.get('/', getAll)
router.post('/', addExpo)

module.exports = router