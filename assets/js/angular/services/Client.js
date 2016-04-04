'use strict';

angular.module('DavidCourtemarche.services')
  .factory('ClientService', ClientService);

function ClientService($http, CommonService) {
  return {
    get: get,
    remove: remove
  };

  function get() {
    return $http.get('/api/client')
      .then(CommonService.handleHttpResponse('Error getting clients'));
  }

  function remove(id) {
    return $http.delete('/api/client/' + id)
      .then(CommonService.handleHttpResponse('Error removing client'));
  }
}
