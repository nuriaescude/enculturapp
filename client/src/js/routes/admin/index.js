var fs = require('fs');
var htmlAdmin = fs.readFileSync(__dirname + '/admin.html', 'utf8');

function configRoutes($routeProvider) {
  $routeProvider
      .when('/admin', {
        template: htmlAdmin,
        controller: 'AdminController'
      })
      .otherwise({ redirectTo: '/landing' });
}

module.exports = configRoutes