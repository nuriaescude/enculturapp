function AddController($scope, $rootScope, ApiService) {

    $rootScope.section = "add"
    // let vm = this

    $scope.addExpo = function() {

        const { name, center, category, urlExternal, description, image, imageCenter, urlMap, infoCenter, priceCenter, openHoursDay, openHoursWeek } = $scope

        ApiService.addExpo({ name, center, category, urlExternal, description, image, imageCenter, urlMap, infoCenter, priceCenter, openHoursDay, openHoursWeek })
            .then(console.log)
    }
    // vm.submitExpo = (e) => {
    //   e.preventDefault()
    // }

   // vm.keyPressAdd = (e) => {
      
   //    if (e.keyCode === 13) {
   //      if (e.target.name === 'name') vm.addName()
   //      if (e.target.name === 'center') vm.addCenter()
   //    }
   //  }
}
module.exports = AddController
