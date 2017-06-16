var fs = require('fs');
var htmlUserProfile = fs.readFileSync(__dirname + '/userProfile.html', 'utf8');

function configRoutes($routeProvider) {
  $routeProvider
      .when('/userProfile', {
        template: htmlUserProfile,
        controller: 'UserProfileController',
        secure: true
      })
      .otherwise({ redirectTo: '/landing' });
}

module.exports = configRoutes