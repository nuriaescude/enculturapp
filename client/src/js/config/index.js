function configRoutes ($routeProvider) {
    $routeProvider
      .when('/admin', {
        templateUrl: '/templates/admin.html',
        controller: 'AddController',
        controllerAs: 'vm'
      })
      .when('/expo/:id', {
        templateUrl: '/templates/detailExpo.html',
        controller: 'ExpoDetailsController',
      })
      .when('/tutorial', {
        templateUrl: '/templates/tutorial.html'
      })
      .when('/landing', {
        templateUrl: '/templates/landing.html'
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
      .when('/listExpos/:mood', {
        templateUrl: '/templates/listExpos.html',
        controller: 'ListExposController'
      })
      .when('/userProfile', {
        templateUrl: '/templates/userProfile.html',
        controller: 'UserProfileController'
      })
      .when('/search/:query', {
      templateUrl: '/templates/searchExpo.html',
      controller: 'SearchExposController',
      controllerAs: 'vm',
    })
      .otherwise({ redirectTo: '/landing' });
  };

module.exports = configRoutes