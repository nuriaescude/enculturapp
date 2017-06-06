function configRoutes ($routeProvider) {
    $routeProvider
      .when('/admin', {
        templateUrl: '/templates/admin.html',
        controller: 'AddController'
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
      .when('/listExpos', {
        templateUrl: '/templates/listExpos.html',
        controller: 'HomeController'
      })
      .when('/detailExpo', {
        templateUrl: '/templates/detailExpo.html',
        controller: 'TabController'
      })
      .when('/userProfile', {
        templateUrl: '/templates/userProfile.html',
      })
      .otherwise({ redirectTo: '/landing' });
  };

module.exports = configRoutes