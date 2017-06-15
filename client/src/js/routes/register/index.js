var fs = require('fs');
var htmlRegister = fs.readFileSync(__dirname + '/register.html', 'utf8');

function configRoutes($routeProvider) {
  $routeProvider
      .when('/register', {
        template: htmlRegister,
        controller: 'RegisterController'
      })
      .otherwise({ redirectTo: '/landing' });
}

module.exports = configRoutes