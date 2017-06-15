function LogoutController($scope, $location, authService) {

		authService.logout()
		console.log("logouting....");
		$location.path('/landing')
}
module.exports = LogoutController