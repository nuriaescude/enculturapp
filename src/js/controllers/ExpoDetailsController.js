function ExpoDetailsController($scope, $rootScope, $routeParams, ApiService) {
    $rootScope.section = ""
    const id = $routeParams.id

    ApiService.getDetailsExpo(id)
        .then(expo => {
            $scope.expo = expo
            $scope.title = expo.name
            console.log(expo)
            $scope.backPath = '/#!/listExpos/' +
                expo.category[0]
        })
    $scope.doTheBack = function() {
        window.history.back();
    }
}
module.exports = ExpoDetailsController
