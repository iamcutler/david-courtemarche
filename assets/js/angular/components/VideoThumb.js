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
            <img src="https://johnero.files.wordpress.com/2012/09/usher-dive-082412.jpg">
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
