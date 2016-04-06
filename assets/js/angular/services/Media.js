'use strict';

angular.module('DavidCourtemarche.services')
  .factory('MediaService', MediaService);

function MediaService($http, CommonService) {
  return {
    getByType: getByType,
    insert: insert,
    remove: remove
  };

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

  function insert(media) {
    return $http.post('/api/media/', media)
      .then(CommonService.handleHttpResponse('Something went wrong inserting media'));
  }

  function remove(id) {
    return $http.delete('/api/media/' + id)
      .then(CommonService.handleHttpResponse('Something went wrong removing media'));
  }
}
