const express = require('express')
const router = express.Router()

const getAll = require('./handlers/getAll')

router.get('/', getAll)

module.exports = router