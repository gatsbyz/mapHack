angular
  .module('maphack')
  .factory('cheatsService', cheatsService);

cheatsService.$inject = ['$http'];

function cheatsService($http) {
  var factory = {};

  factory.getCheats = function() {
    return $http
      .get('/api/map');
  }

  factory.getCheatsById = function(id) {
    return $http
      .get('/api/cheat?userId='+id);
  }

  factory.getCheat = function(id) {
    return $http
      .get('/api/cheat/' + id);
  }

  factory.updateCheat = function(id, newCheat) {
    return $http
      .put('/api/cheat/' + id, newCheat);
  }

  factory.createCheat = function(newCheat) {
    return $http
    	.post('/api/cheat', newCheat);
  }

  factory.deleteCheat = function(id) {
    return $http
      .delete('/api/cheat/' + id)
  }

  return factory;
}