var fs = require('fs');

var htmlNavbarBack = fs.readFileSync(__dirname + '/templates/navbarBack.html', 'utf8');
var htmlNavbarBottom = fs.readFileSync(__dirname + '/templates/navbarBottom.html', 'utf8');
var htmlNavbarMain = fs.readFileSync(__dirname + '/templates/navbarMain.html', 'utf8');

function runAtBegin($templateCache, $rootScope, $location, StorageService, authService) {
  $templateCache.put('navbarBack.html', htmlNavbarBack);
  $templateCache.put('navbarBottom.html', htmlNavbarBottom);
  $templateCache.put('navbarMain.html', htmlNavbarMain);
  
  if ( authService.isLoggedIn() ) {
      const token = StorageService.getToken()
      authService.setCredentials(token)
    }

    $rootScope.$on( "$routeChangeStart", function(event, next, current) {

      console.log("route has changed")
      if (next && next.secure) {
        console.log("this route is secured!!")
        if ( !authService.isLoggedIn() ) {
          $location.path("/login");
        }
      }

    });
}

module.exports = runAtBegin