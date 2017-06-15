var fs = require('fs');
var htmlNavbarBack = fs.readFileSync(__dirname + '/templates/navbarBack.html', 'utf8');
var htmlNavbarBottom = fs.readFileSync(__dirname + '/templates/navbarBottom.html', 'utf8');
var htmlNavbarMain = fs.readFileSync(__dirname + '/templates/navbarMain.html', 'utf8');

function runAtBegin($templateCache) {
  $templateCache.put('navbarBack.html', htmlNavbarBack);
  $templateCache.put('navbarBottom.html', htmlNavbarBottom);
  $templateCache.put('navbarMain.html', htmlNavbarMain);
}

module.exports = runAtBegin