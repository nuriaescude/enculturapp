function MainController($scope, $rootScope, $routeParams, ApiService) {

	$rootScope.section = "home"

	$scope.mood = $routeParams.mood.replace(/[\W]+/g, " ")
	$scope.title = $scope.mood
	$scope.backPath = '/#!/setMood'


	ApiService.getExposByMood($scope.mood)
		.then(expos => $scope.expos = expos)

	$scope.removeExpo = function(id) {
		ApiService.removeExpo(id)
			.then(console.log)
	}
	$scope.doTheBack = function() {
        window.history.back();
    }
}

module.exports = MainController