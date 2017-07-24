angular
  .module('maphack')
  .factory('profileService', profileService);

profileService.$inject = ['$http'];

function profileService($http) {
	var factory = {};

	factory.getUser= function(id) {
		return $http
		.get('/api/user/' + id);
	}

  	return factory;
}