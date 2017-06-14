const angular = require('angular')
const angularRoute = require("angular-route");

const TabController = require('./controllers/TabController')
const ListExposController = require('./controllers/ListExposController')
const AdminController = require('./controllers/AdminController')
const ExpoDetailsController = require('./controllers/ExpoDetailsController')
const ExposMoodController = require('./controllers/ExposMoodController')
const UserProfileController = require('./controllers/UserProfileController')

const configRoutes = require('./config')
const ApiService = require('./services/ApiService')


angular.module('mainApp', [ 'ngRoute', 'ngFileUpload' ])
	.controller('TabController', TabController)
	.controller('AdminController', AdminController)
	.controller('ListExposController', ListExposController)
	.controller('ExpoDetailsController', ExpoDetailsController)
	.controller('ExposMoodController', ExposMoodController)
	.controller('UserProfileController', UserProfileController)
	.factory('ApiService', ApiService)
	.config( configRoutes ) 