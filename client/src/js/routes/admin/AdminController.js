function AddController($scope, $rootScope, ApiService) {

    console.log("Were in AdminController")
    $rootScope.section = "add"
    $scope.title = "Admin"

    $scope.categories = [
        { name: 'Be informed', selected: false },
        { name: 'Cinephile', selected: false },
        { name: 'Classic', selected: false },
        { name: 'Disconnected', selected: false },
        { name: 'Discoverer', selected: false },
        { name: 'Entertained', selected: false },
        { name: 'Exotic', selected: false },
        { name: 'Explorer', selected: false },
        { name: 'In love', selected: false },
        { name: 'Inspired', selected: false },
        { name: 'Musical', selected: false },
        { name: 'Nostalgic', selected: false },
        { name: 'On holiday', selected: false },
        { name: 'Relaxed', selected: false },
        { name: 'Romantic', selected: false },
        { name: 'Vintage', selected: false },
        { name: 'With energy', selected: false },
        { name: 'With family', selected: false }
    ]

    $scope.category = []

    // Helper method to get selected categories
    $scope.selectedCategories = function selectedCategories() {
        return filterFilter($scope.categories, { selected: true })
    };

    // Watch categories for changes
    $scope.$watch('categories|filter:{selected:true}', function(nv) {
        $scope.category = nv.map(function(category) {
            return category.name
        });
    }, true);
    

    ApiService.getCenters() 
    .then(response => $scope.centers = response, console.log($scope.centers) )


    $scope.expoForm = {
    }

    $scope.doTheBack = function() {
        window.history.back();
    }

    $scope.onExpoFormSubmitted = function() {
        console.log ( 'my data form is...' )
        console.log ( $scope )
        const formData = Object.assign(
            $scope.expoForm, {categories: Object.keys($scope.expoForm.categories)}
        )
        ApiService.addExpo(formData)
    }
}

module.exports = AddController
