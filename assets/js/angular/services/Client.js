'use strict';

angular.module('DavidCourtemarche.services')
  .factory('ClientService', ClientService);

function ClientService($http, CommonService) {
  return {
    get: get
  };

  function get() {
    return $http.get('/api/client')
      .then(CommonService.handleHttpResponse('Error getting clients'));
  }
}
