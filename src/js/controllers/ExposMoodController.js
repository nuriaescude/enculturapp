function ExposMoodController($scope, $rootScope, $routeParams, ApiService) {
    $rootScope.section = ""
    $scope.title = "How do you feel?"
    const id = $routeParams.id
    $scope.moodCategory = id
  
    // ApiService.getByMood(id)
    //     .then(expos => {
    //      	$scope.expos = expos 
    //      	console.log ($scope.expos)
    //      	console.log($scope.moodCategory)
    //      })
    $scope.doTheBack = function() {
        window.history.back();
    }
}
module.exports = ExposMoodController
