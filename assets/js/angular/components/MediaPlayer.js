'use strict';

angular.module('DavidCourtemarche.directives')
  .controller('MediaPlayerController', MediaPlayerController)
  .directive('mediaPlayer', MediaPlayer);

function MediaPlayer() {
  return {
    restrict: 'E',
    replace: true,
    scope: {},
    controller: 'MediaPlayerController',
    controllerAs: 'MediaPlayerCtrl',
    template: `
      <div class="media-player">
        <div class="player"></div>

        <span class="title">{{ MediaPlayerCtrl.video.name }}</span>
      </div>
    `
  };
}

function MediaPlayerController($rootScope) {
  // Listen for video changes and display
  $rootScope.$on('video:selected', (event, video) => {
    this.video = video;
  });
}
