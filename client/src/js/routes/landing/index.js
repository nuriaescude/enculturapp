var fs = require('fs');
var htmlLanding = fs.readFileSync(__dirname + '/landing.html', 'utf8');

function configRoutes($routeProvider) {
  $routeProvider
      .when('/landing', {
        template: htmlLanding
        
      })
      .otherwise({ redirectTo: '/landing' });
}

module.exports = configRoutes