'use strict';

angular.module('DavidCourtemarche.directives')
  .directive('mediaPlayer', MediaPlayer);

function MediaPlayer() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      video: '='
    },
    template: `
      <div class="media-player">
        <div html5-video
             mp4-url="{{ video.videoUrl }}"
             video-width="500"
             video-height="500"></div>

        <span class="title">{{ video.name }}</span>
      </div>
    `,
    link: (scope) => {
      scope.$watch('video', (newVal, oldVal) => {
        if(newVal !== oldVal) {
          newVal.videoUrl = `http://localhost:1337/media/assets/${newVal.media_file}`;
        }
      });
    }
  };
}
