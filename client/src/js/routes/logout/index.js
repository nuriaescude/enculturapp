function configRoutes($routeProvider) {
    $routeProvider
        .when('/logout', {
            template: '<h1>Logouting....</h1>',
            controller: 'LogoutController'
        })

}

module.exports = configRoutes
