'use strict';

angular.module('DavidCourtemarche.controllers')
  .controller('MediaController', MediaController);

function MediaController($stateParams, MediaService) {
  var vm = this;

  vm.media = [];
  // functions
  vm.initialize = initialize;

  function initialize() {
    getMediaByType();
  }

  function getMediaByType() {
    var type;

    switch($stateParams.type) {
      case 'commercials':
        type = 'commercial';
        break;
      case 'musicvideos':
        type = 'music_video';
        break;
      case 'film':
        type = 'film';
        break;
    }

    return MediaService.getByType(type)
      .then(response => {
        vm.media = response;
      });
  }
}
