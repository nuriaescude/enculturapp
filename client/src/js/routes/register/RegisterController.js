function RegisterController($scope, AuthService) {

		$scope.register = function(event) {
			event.preventDefault()
			const { username, password } = $scope

			AuthService.register(username, password)
				.then(console.log)
				.catch(console.log)
		}

}

module.exports = RegisterController