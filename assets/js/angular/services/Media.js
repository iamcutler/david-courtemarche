'use strict';

angular.module('DavidCourtemarche.services')
  .factory('MediaService', MediaService);

function MediaService($http, CommonService) {
  function getByType(type) {
    return $http.get('/api/media', {
      params: {
        type: type
      }
    })
      .then(CommonService.handleHttpResponse('Something went wrong while getting media'));
  }

  return {
    getByType: getByType
  };
}
