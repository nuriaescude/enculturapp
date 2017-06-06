function DataService ($http) {

	function getAllExpos() {
		return $http.get('/api/expos')
			.then( response => response.data )
	}
	return { getAllExpos }
}
module.exports = DataService