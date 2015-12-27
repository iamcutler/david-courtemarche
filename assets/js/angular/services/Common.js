'use strict';

angular.module('DavidCourtemarche.services')
  .factory('CommonService', CommonService);

function CommonService($q) {
  return {
    handleHttpResponse: handleHttpResponse
  };

  function handleHttpResponse(error_message) {
    error_message = error_message || 'Something went wrong on the server';

    return (response) => {
      if( !response ||
        !response.data ||
        response.status.toString().slice(0, 1) === 4 ||
        response.status.toString().slice(0, 1) === 5
      ) {
        return this.$q.reject(error_message);
      }

      return response.data;
    }
  }
}
