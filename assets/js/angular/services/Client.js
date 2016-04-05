'use strict';

angular.module('DavidCourtemarche.services')
  .factory('ClientService', ClientService);

function ClientService($http, CommonService) {
  return {
    get: get,
    insert: insert,
    remove: remove
  };

  function get() {
    return $http.get('/api/client')
      .then(CommonService.handleHttpResponse('Error getting clients'));
  }

  function insert(client) {
    return $http.post('/api/client', client)
      .then(CommonService.handleHttpResponse('Error inserting clients'));
  }

  function remove(id) {
    return $http.delete('/api/client/' + id)
      .then(CommonService.handleHttpResponse('Error removing client'));
  }
}
