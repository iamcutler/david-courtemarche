'use strict';

angular.module('DavidCourtemarche.services')
  .factory('PortfolioService', PortfolioService);

function PortfolioService($http, CommonService) {
  return {
    get: get,
    insert: insert,
    remove: remove
  };

  function get() {
    return $http.get('/api/portfolio')
      .then(CommonService.handleHttpResponse('Error getting portfolio'));
  }

  function insert(client) {
    return $http.post('/api/portfolio', client)
      .then(CommonService.handleHttpResponse('Error inserting into portfolio'));
  }

  function remove(id) {
    return $http.delete('/api/portfolio/' + id)
      .then(CommonService.handleHttpResponse('Error removing from portfolio'));
  }
}
