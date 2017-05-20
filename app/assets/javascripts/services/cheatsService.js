angular
  .module('mapHack')
  .factory('cheatsService', cheatsService);

cheatsService.$inject = ['$http', '$stateParams'];

function cheatsService($http, $stateParams) {
  var factory = {};

  factory.getCheats = function() {
    return $http
    	.get('/api/map');
  }

  factory.createCheat = function(newCheat) {
    return $http
    	.post('/api/cheat', newCheat);
  }

  return factory;
}