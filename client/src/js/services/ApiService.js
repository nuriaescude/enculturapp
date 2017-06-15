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
			.catch(err => console.error('Error!', err))
			.then( response => response.data )
	}
	function getCenters(){
		return $http.get('/api/museum')
			.then(response => response.data)
			.then(centers => centers.map( center => {
				center.name = removeAccents(center.name)
				return center
			}))
	}

	function removeExpo( id ) {
		return $http.delete(`/api/expo/${id}`)
			.then( response => response.data )
	}


	return { getAllExpos, getExposByMood, getDetailsExpo, addExpo, getCenters, removeExpo }
}
module.exports = DataService

function removeAccents(value) {
    return value
        .replace(/á/g, 'a')
        .replace(/é/g, 'e')
        .replace(/í/g, 'i')
        .replace(/ó/g, 'o')
        .replace(/ú/g, 'u');
}