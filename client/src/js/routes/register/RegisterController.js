function RegisterController($scope, $location, authService) {

		$scope.register = function(event) {
			event.preventDefault()
			const { username, password } = $scope

			authService.register(username, password)
				.then(msg => {
				console.log(msg)
					$location.path('/login')
			})
				.catch(console.log)
		}

}

module.exports = RegisterController