function configRoutes ($routeProvider) {
    $routeProvider
      .when('/admin', {
        templateUrl: '/templates/admin.html',
        controller: 'AdminController',
      })
      .when('/expo/:id', {
        templateUrl: '/templates/detailExpo.html',
        controller: 'ExpoDetailsController'
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
        templateUrl: '/templates/setMood.html',
        controller: 'ExposMoodController'
      })
      .when('/listExpos/:mood', {
        templateUrl: '/templates/listExpos.html',
        controller: 'ListExposController'
      })
      .when('/userProfile', {
        templateUrl: '/templates/userProfile.html',
        controller: 'UserProfileController'
      })
      .when('/search', {
      templateUrl: '/templates/searchExpo.html',
      controller: 'SearchExposController'
    })
      .otherwise({ redirectTo: '/landing' });
  };

module.exports = configRoutes