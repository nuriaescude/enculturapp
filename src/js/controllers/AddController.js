function AddController($scope, $rootScope, ApiService) {

    $rootScope.section = "add"
    // let vm = this

    $scope.addExpo = function() {

        const { name, center, category, urlExternal, description, image, imageCenter, urlMap, infoCenter, priceCenter, openHoursDay, openHoursWeek } = $scope

        ApiService.addExpo({ name, center, category, urlExternal, description, image, imageCenter, urlMap, infoCenter, priceCenter, openHoursDay, openHoursWeek })
            .then(console.log)
    }

}
module.exports = AddController
