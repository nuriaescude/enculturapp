var fs = require('fs');
var htmlLogin = fs.readFileSync(__dirname + '/login.html', 'utf8');

function configRoutes($routeProvider) {
  $routeProvider
      .when('/login', {
        template: htmlLogin,
        controller: 'LoginController'
      })
      .otherwise({ redirectTo: '/landing' });
}

module.exports = configRoutes