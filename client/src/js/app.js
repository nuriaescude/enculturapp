const angular = require('angular');
const angularJwt = require('angular-jwt');

const routesApp = require('./routes')
const runAtBegin = require('./run')

const TabController = require('./controllers/TabController')
// const logoutController = require('./controllers/logoutController')
// const ListExposController = require('./controllers/ListExposController')
// const AdminController = require('./controllers/AdminController')
// const ExpoDetailsController = require('./controllers/ExpoDetailsController')
// const ExposMoodController = require('./controllers/ExposMoodController')
// const UserProfileController = require('./controllers/UserProfileController')

// const configRoutes = require('./config')
const ApiService = require('./services/ApiService')
const AuthService = require('./services/AuthService')
const AuthInterceptor = require('./services/AuthInterceptor')
const StorageService = require('./services/StorageService')

angular.module('mainApp', [ routesApp, 'ngRoute', 'angular-jwt' ])
	.controller('TabController', TabController)
	// .controller('logoutController', logoutController)
	.factory('ApiService', ApiService)
	.run( runAtBegin ) 