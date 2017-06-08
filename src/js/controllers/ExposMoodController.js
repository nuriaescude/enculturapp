function ExposMoodController($scope, $rootScope, $routeParams, ApiService) {
    $rootScope.section = ""
    const id = $routeParams.id
    $scope.moodCategory = id

    ApiService.getByMood(id)
        .then(expos => {
         	$scope.expos = expos 
         	console.log ($scope.expos)
         	console.log($scope.moodCategory)
         })

}
module.exports = ExposMoodController
