function MainController($scope, $rootScope, $routeParams, ApiService) {

	$rootScope.section = "home"

	const mood = $routeParams.mood

	console.error(mood)

	ApiService.getExposByMood(mood)
		.then(expos => $scope.expos = expos)

	$scope.removeExpo = function(id) {
		ApiService.removeExpo(id)
			.then(console.log)
	}
}

module.exports = MainController