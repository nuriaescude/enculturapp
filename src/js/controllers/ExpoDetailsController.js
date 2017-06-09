function ExpoDetailsController($scope, $rootScope, $routeParams, ApiService) {
    $rootScope.section = ""
    const id = $routeParams.id

    ApiService.getDetailsExpo(id)
        .then(expo => { $scope.expo = expo })
        
}
module.exports = ExpoDetailsController
