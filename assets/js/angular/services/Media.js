'use strict';

angular.module('DavidCourtemarche.services')
  .factory('MediaService', MediaService);

function MediaService($http, CommonService) {
  function getByType(type, archive) {
    archive = archive || 0;

    return $http.get('/api/media', {
      params: {
        type: type,
        archive: archive
      }
    })
      .then(CommonService.handleHttpResponse('Something went wrong while getting media'));
  }

  return {
    getByType: getByType
  };
}
