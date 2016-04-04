/**
 * Created by allancutler on 4/3/16.
 */

'use strict';

angular.module('DavidCourtemarcheAdmin.controllers')
  .controller('MediaAdminController', MediaAdminController);

function MediaAdminController(MediaService) {
  var vm = this;

  vm.media = [];
  // functions
  vm.initialize = initialize;

  function initialize() {
    getAllMedia();
  }

  function getAllMedia() {
    return MediaService.getByType()
      .then(response => {
        vm.media = response;
      });
  }
}
