function DataService ($http) {

	function getAllExpos() {
		return $http.get('/api/expos')
			.then( response => response.data )
	}
	function getDetailsExpo( id ) {
		return $http.get(`/api/expo/${id}`)
			.then( response => response.data )
	}

	function addExpo( data ) {
		return $http.post('/api/expos', data)
			.then( response => response.data )
	}

	function removeExpo( id ) {
		return $http.delete(`/api/expo/${id}`)
			.then( response => response.data )
	}

	return { getAllExpos, getDetailsExpo, addExpo, removeExpo }
}
module.exports = DataService