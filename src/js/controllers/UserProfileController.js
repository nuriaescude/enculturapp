function UserProfileController($scope, $rootScope, $routeParams, ApiService) {
    $rootScope.section = ""
    $scope.title = "User Profile"
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
module.exports = UserProfileController
