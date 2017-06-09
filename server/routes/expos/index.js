const express = require('express')
const router = express.Router()

const addExpo = require('./handlers/addExpo')
const getAll = require('./handlers/getAll')
const getByMood = require('./handlers/getByMood')
const searchAll = require('./handlers/searchAll')


router.get('/', getAll)
router.get('/:mood', getByMood)
router.post('/', addExpo)
router.get('/search', searchAll)
module.exports = router