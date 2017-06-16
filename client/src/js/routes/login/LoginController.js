function LoginController($scope, $location, authService) {

	$scope.login = function(event) {
		event.preventDefault()
		const { username, password } = $scope
		authService.login(username, password)
			.then(msg => {
				console.log(msg)
					$location.path('/setMood')
			})
			.catch(console.log)
	}

}

module.exports = LoginController