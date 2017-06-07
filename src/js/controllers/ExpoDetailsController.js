function ExpoDetailsController($scope, $rootScope, $routeParams, ApiService) {
    $rootScope.section = ""
    const id = $routeParams.id

    ApiService.getDetailsExpo(id)
        .then(expos => { $scope.expos = expos })
        
}
module.exports = ExpoDetailsController
