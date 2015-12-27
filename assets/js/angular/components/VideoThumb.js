'use strict';

angular.module('DavidCourtemarche')
  .directive('videoThumb', VideoThumb);

function VideoThumb() {
  return {
    restrict: 'E',
    replace: true,
    scope: {},
    template: `
      <a href="">
        <figure>
          <div class="img">
            <img src="https://johnero.files.wordpress.com/2012/09/usher-dive-082412.jpg">
          </div>

          <figcaption>Usher - Dive</figcaption>
        </figure>
      </a>
    `
  };
}
