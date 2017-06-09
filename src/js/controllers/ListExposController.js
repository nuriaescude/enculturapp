function MainController($scope, $rootScope, $routeParams, ApiService) {

	$rootScope.section = "home"

	$scope.mood = $routeParams.mood


	ApiService.getExposByMood($scope.mood)
		.then(expos => $scope.expos = expos)

	$scope.removeExpo = function(id) {
		ApiService.removeExpo(id)
			.then(console.log)
	}
}

module.exports = MainController