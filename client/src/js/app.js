const angular = require('angular');
const angularJwt = require('angular-jwt');

const routesApp = require('./routes')
const runAtBegin = require('./run')

const TabController = require('./controllers/TabController')

const ApiService = require('./services/ApiService')
const AuthService = require('./services/authService')
const AuthInterceptor = require('./services/authInterceptor')
const StorageService = require('./services/StorageService')

angular.module('mainApp', [ routesApp, 'ngRoute', 'angular-jwt' ])
	.controller('TabController', TabController)
	.factory('authService', AuthService)
	.factory('StorageService', StorageService)
	.factory('authInterceptor', AuthInterceptor)
	.factory('ApiService', ApiService)
	.run( runAtBegin ) 