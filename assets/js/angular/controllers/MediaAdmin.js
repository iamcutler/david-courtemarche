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
  vm.new = {}; // new media object
  vm.remove = remove;

  function initialize() {
    getAllMedia();
  }

  function getAllMedia() {
    return MediaService.getByType()
      .then(response => {
        vm.media = response;
      });
  }

  function remove(id, index) {
    if(confirm('Are you sure you want to remove this media?')) {
      MediaService.remove(id)
        .then(function() {
          vm.media.splice(index, 1);
        });
    }
  }
}
