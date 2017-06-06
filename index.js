require('dotenv').load()

// const express = require('express')
// const path = require('path')

global.__base = __dirname + '/server/'

const app = require('./server/app')
const db = require('./server/config/db')

const DB_URI = process.env.DB_URL
const PORT = process.env.PORT || 3000

console.log(`Connecting to ${DB_URI}...`)

db.open(DB_URI)
app.listen(PORT)

console.log(`Listening on port ${PORT}...`)