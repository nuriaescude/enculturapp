const express = require('express')
const path = require('path')

require('dotenv').load()

const PORT = process.env.PORT
const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT)
console.log(`Listening on PORT ${PORT}`)