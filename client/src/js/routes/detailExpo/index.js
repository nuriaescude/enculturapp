var fs = require('fs');
var htmlDetailExpo = fs.readFileSync(__dirname + '/detailExpo.html', 'utf8');

function configRoutes($routeProvider) {
  $routeProvider
      .when('/expo/:id', {
        template: htmlDetailExpo,
        controller: 'ExpoDetailsController',
        secure: true
      })
      .otherwise({ redirectTo: '/landing' });
}

module.exports = configRoutes