function LogoutController($scope, $location, authService) {

		authService.logout()
		console.log("logouting....");
		$location.path('/')
}
module.exports = LogoutController