angular.module('mainApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/tutorial', {
        templateUrl: '/templates/tutorial.html'
      })
      .when('/login', {
        templateUrl: '/templates/login.html'
      })
      .when('/register', {
        templateUrl: '/templates/register.html'
      })
      .when('/setMood', {
        templateUrl: '/templates/setMood.html'
      })
      .when('/listExpos', {
        templateUrl: '/templates/listExpos.html'
      })
      .when('/detailExpo', {
        templateUrl: '/templates/detailExpo.html'
      })
  })