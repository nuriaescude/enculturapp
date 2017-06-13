function SearchExpoController($scope, $rootScope, $routeParams, ApiService) {

    
    // $rootScope.section = "search-results"
    // const location = $routeParams.location
    // if(center){
    // ApiService.searchAll(center)
    //   .then(expos => $scope.expos = expos)
    // }
    // if (undefined) {
    //   ApiService.getAllExpos()
    //   .then(expos => $scope.expos = expos)
    // }

    $rootScope.section = "search"
    $scope.title = "Search"
    let {query} = $routeParams
    $rootScope.queryExpo = query
    let vm = this
    vm.showNoResult = true

    $q.all([
      ApiService.searchExpos(query)
    ]).then(data => {
      let expos = [...data[0], ...data[1], ...data[2]]
      vm.showNoResult = false
      if (expos.length === 0) {
        vm.notFound = true
      }
      /* Top of page in a new search */
      $location.hash('top')
      $anchorScroll()
      vm.aExpos = expos
    })
}
module.exports = SearchExpoController
