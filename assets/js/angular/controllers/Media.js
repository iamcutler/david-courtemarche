'use strict';

angular.module('DavidCourtemarche.controllers')
  .controller('MediaController', MediaController);

MediaController.$inject = ['$scope', '$stateParams', 'MediaService'];

function MediaController($scope, $stateParams, MediaService) {
  var vm = this;

  vm.media = [];
  // functions
  vm.initialize = initialize;
  vm.selectVideo = selectVideo;
  vm.loadedVideo = false;

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
        vm.currentVideo = response[0];
      })
      .finally(vm.loadedVideo = true);
  }

  function selectVideo(video) {
    vm.loadedVideo = false;
    vm.currentVideo = video;
    setTimeout(() => {
      $scope.$apply(() => {
        vm.loadedVideo = true
      });
    }, 2000);
  }
}
