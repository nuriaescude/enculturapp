var fs = require('fs');
var htmlSetMood = fs.readFileSync(__dirname + '/setMood.html', 'utf8');

function configRoutes($routeProvider) {
  $routeProvider
      .when('/setMood', {
        template: htmlSetMood,
        controller: 'ExposMoodController',
        secure: true
      })
      .otherwise({ redirectTo: '/landing' });
}

module.exports = configRoutes