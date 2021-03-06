const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()

const authRoutes = require('./routes/auth')
const routesExpos = require('./routes/expos')
const routesExpo = require('./routes/expo')
const routesMuseum = require('./routes/museum')

/* bodyParser */
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

/* static folder */
app.use( express.static(path.join(__dirname,'../client/dist')))

app.use( authRoutes )
app.use('/api/expos', routesExpos)
app.use('/api/expo', routesExpo)
app.use('/api/museum', routesMuseum)


module.exports = app