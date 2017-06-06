const angular = require('angular')
const angularRoute = require("angular-route");


const TabController = require('./controllers/TabController')
const HomeController = require('./controllers/HomeController')
const AddController = require('./controllers/AddController')

const configRoutes = require('./config')
const ApiService = require('./services/ApiService')


angular.module('mainApp', [ angularRoute ])
	.controller('TabController', TabController)
	.controller('AddController', AddController)
	.controller('HomeController', HomeController)
	.factory('ApiService', ApiService)
	.config( configRoutes ) 