var fs = require('fs');
var htmlListExpos = fs.readFileSync(__dirname + '/listExpos.html', 'utf8');

function configRoutes($routeProvider) {
  $routeProvider
      .when('/listExpos/:mood', {
        template: htmlListExpos,
        controller: 'ListExposController',
        secure: true
      })
      .otherwise({ redirectTo: '/landing' });
}

module.exports = configRoutes