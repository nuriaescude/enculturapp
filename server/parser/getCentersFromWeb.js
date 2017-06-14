const rp = require('request-promise')
const cheerio = require('cheerio')

require('dotenv').load()

const db = require('../config/db')
const Expo = require('../models/expo')

const URL = 'https://www.butxaca.com/ca/exposicions/cartellera'
let listParsedExpos = []

const DB_URL = 'mongodb://localhost:27017/enculturapp'
db.open(DB_URL)
console.log(`Connecting to ${DB_URL}...`)

rp(URL)
  .then(bodyHtml => {
    const $ = cheerio.load(bodyHtml)
    const $centers = $('.panelDintre')
    
    $centers.each((index, item) => {
      const elem = $(item)
      const data = {}
      data.center = elem.find('span').attr('title')
      data.address = elem.find('.adressa > span').attr('title')
      data.name = elem.find('.teatre > a').text()
      data.priceCenter = elem.find('.preu').text()
      listParsedExpos.push(data);
    })

    Expo.create(listParsedExpos)
      .then( () => console.log('expos inserted properly '))
      .catch( () => console.log('there was an error inserting expos'))
  })

