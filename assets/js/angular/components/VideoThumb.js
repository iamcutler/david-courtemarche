'use strict';

angular.module('DavidCourtemarche.directives')
  .directive('videoThumb', VideoThumb);

function VideoThumb() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      video: '='
    },
    template: `
      <a href="">
        <figure>
          <div class="img">
            <img ng-src="/media/assets/{{ video.media_image }}">
          </div>

          <figcaption>{{ VideoThumbCtrl.video.name }}</figcaption>
        </figure>
      </a>
    `
  };
}
