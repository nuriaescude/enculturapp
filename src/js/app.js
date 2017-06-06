const angular = require('angular')
const angularRoute = require("angular-route");

const configRoutes = require('./config')
const TabController = require('./controllers/TabController')

angular.module('mainApp', [ angularRoute ])
	.controller('TabController', TabController)
	.config( configRoutes ) 
	// .factory('ApiService', ApiService)
	