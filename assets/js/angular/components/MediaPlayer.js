'use strict';

angular.module('DavidCourtemarche.directives')
  .directive('mediaPlayer', MediaPlayer);

function MediaPlayer() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      title: '@'
    },
    template: `
      <div class="media-player">
        <div class="player">

        </div>

        <span class="title">{{ title }}</span>
      </div>
    `
  };
}
