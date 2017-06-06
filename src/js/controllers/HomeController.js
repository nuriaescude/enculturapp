function MainController($scope, $rootScope, ApiService) {

	$rootScope.section = "home"

	ApiService.getAllExpos()
		.then(expos => $scope.expos = expos)

	$scope.removeExpo = function(id) {
		ApiService.removeExpo(id)
			.then(console.log)
	}
}

module.exports = MainController