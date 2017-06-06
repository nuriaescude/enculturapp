function AddController($scope, $rootScope, ApiService) {

    $rootScope.section = "add"

    $scope.addExpo = function() {

        const { name, center, category, description, image } = $scope

        ApiService.addExpo({ name, center, category, description, image })
            .then(console.log)
    }
}
module.exports = AddController
