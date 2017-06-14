const rp = require('request-promise')
const cheerio = require('cheerio')

require('dotenv').load()

const db = require('../config/db')
const Expo = require('../models/Expo')
const Museum = require('../models/Museum')

const URL = 'https://www.butxaca.com/ca/exposicions/cartellera'
let listParsedExpos = []

const DB_URL = 'mongodb://localhost:27017/enculturapp'
db.open(DB_URL)
console.log(`Connecting to ${DB_URL}...`)

rp(URL)
	.then(bodyHtml => {
		const $ = cheerio.load(bodyHtml)


		const $centers = $('.panelDintre .contenidorCapsaleraTeatre')
		const centers = []
		$centers.each( function(index, center) {
			const name = $(center).find('.teatre b').text()
			const address = $(center).find('.adressa span').attr('title')
			const telf =  $(center).find('.tel').text().trim()

			const museum = new Museum( {name, address, telf} );
			museum.save()
				.then( () => console.log('museum inserted properly '))
				.catch( () => console.log('there was an error inserting museum'))

			//console.log(museum._id);


			const $expos = $(center).siblings('div').find('.contenidorFilaTeatre')
			let urlsExpos = []

			$expos.each( function(index, expo) {
				const urlExpo = $(expo).find('.teatre a').attr('href')
				urlsExpos.push('https://www.butxaca.com' + urlExpo);
			})

			const promisesRequestsEspos = urlsExpos.map( urlExpo => rp(urlExpo) )
			Promise.all(promisesRequestsEspos)
				.then(  insertExposInfo.bind(null, museum._id) )

			function insertExposInfo(museumId, bodiesExposPages){
				bodiesExposPages.forEach( body => {
					const center = museumId
					const $ = cheerio.load(body)
					const name = $(".capsalera-esdeveniment h1").text()
					const image = $(".capsalera-esdeveniment img").attr('src')
					const expo = new Expo({name, image, center})
					expo.save()
						.then( () => console.log('expo inserted properly '))
						.catch( () => console.log('there was an error inserting expo'))
				})
			}
		})

		// Museum.create(centers)
		// 	.then( () => console.log('museums inserted properly '))
		// 	.catch( () => console.log('there was an error inserting museums'))





		// urlsCenters = urlsCenters.splice(0,3)
		// console.log(urlsCenters);

		// const promisesRequests = urlsCenters.map( url => rp(url) )

		// Promise.all(promisesRequests)
		// 	.then( bodiesRequests => {
		// 		bodiesRequests.forEach( body => {
		// 			const $ = cheerio.load(body)
		// 			const nameCenter = $('#contenidor-lloc-dades .contentheading').text()
		// 			console.log(nameCenter);
		// 		})
		// 	})








		// $centers.each((index, item) => {
		// 	const elem = $(item)
		// 	const data = {}
		// 	data.center = elem.find('span').attr('title')
		// 	data.address = elem.find('.adressa > span').attr('title')
		// 	data.name = elem.find('.teatre > a').text()
		// 	data.priceCenter = elem.find('.preu').text()
		// 	listParsedExpos.push(data);
		// })

		// Expo.create(listParsedExpos)
		// 	.then( () => console.log('expos inserted properly '))
		// 	.catch( () => console.log('there was an error inserting expos'))
	})
