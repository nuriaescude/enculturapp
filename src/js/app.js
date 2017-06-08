const angular = require('angular')
const angularRoute = require("angular-route");

const TabController = require('./controllers/TabController')
const HomeController = require('./controllers/HomeController')
const AddController = require('./controllers/AddController')
const ExpoDetailsController = require('./controllers/ExpoDetailsController')
const ExposMoodController = require('./controllers/ExposMoodController')

const configRoutes = require('./config')
const ApiService = require('./services/ApiService')


angular.module('mainApp', [ 'ngRoute', 'ngFileUpload' ])
	.controller('TabController', TabController)
	.controller('AddController', AddController)
	.controller('HomeController', HomeController)
	.controller('ExpoDetailsController', ExpoDetailsController)
	.controller('ExposMoodController', ExposMoodController)
	.factory('ApiService', ApiService)
	.config( configRoutes ) 