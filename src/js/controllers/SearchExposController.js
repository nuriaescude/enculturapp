function SearchExpoController($scope, $rootScope, $routeParams, ApiService) {

    $rootScope.section = "search"
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
