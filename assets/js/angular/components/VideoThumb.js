'use strict';

angular.module('DavidCourtemarche.directives')
  .controller('VideoThumbController', videoThumbController)
  .directive('videoThumb', VideoThumb);

function VideoThumb() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      video: '='
    },
    controller: 'VideoThumbController',
    controllerAs: 'VideoThumbCtrl',
    bindToController: true,
    template: `
      <a href="" ng-click="VideoThumbCtrl.selectVideo()">
        <figure>
          <div class="img">
            <img ng-src="/media/images/{{ VideoThumbCtrl.video.media_image }}">
          </div>

          <figcaption>{{ VideoThumbCtrl.video.name }}</figcaption>
        </figure>
      </a>
    `
  };
}

function videoThumbController($rootScope) {
  this.selectVideo = selectVideo;

  function selectVideo() {
    $rootScope.$broadcast('video:selected', this.video);
  }
}
