function DataService ($http) {

	function getAllExpos() {
		return $http.get('/api/expos')
			.then( response => response.data )
	}
	function getExposByMood(mood) {
		return $http.get(`/api/expos/${mood}`)
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
	function getCenters(){
		return $http.get('/api/expos')
		.then(response => response.data)
	}

	function removeExpo( id ) {
		return $http.delete(`/api/expo/${id}`)
			.then( response => response.data )
	}

	function searchExpos (query) {
      return $http.get(`/api/expos/search?q=${query}`)
                .then(({data}) => {
                  data = data.map(elem => {
            
                    return elem
                  })
                  return data
                })
    }



	return { getAllExpos, getExposByMood, getDetailsExpo, addExpo, getCenters ,removeExpo, searchExpos }
}
module.exports = DataService