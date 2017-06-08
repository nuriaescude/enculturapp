function AddController($scope, $rootScope, ApiService) {

    $rootScope.section = "add"
    // let vm = this

    $scope.addExpo = function() {

        const { name, center, category, urlExternal, description, image, imageCenter, urlMap, infoCenter, priceCenter, openingToday, openingTimes } = $scope

        ApiService.addExpo({ name, center, category, urlExternal, description, image, imageCenter, urlMap, infoCenter, priceCenter, openingToday, openingTimes })
            .then(console.log)
    }

}
module.exports = AddController
