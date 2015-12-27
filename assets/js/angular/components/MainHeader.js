'use strict';

angular.module('DavidCourtemarche')
  .directive('mainHeader', MainHeader);

function MainHeader() {
  return {
    restrict: 'E',
    replace: true,
    scope: false,
    template: `
      <header class="main">
        David Courtemarche

        <menu role="navigation">
          <ul>
            <li><a ui-sref="media({ type: 'commercials' })">Commercials</a></li>
            <li><a ui-sref="media({ type: 'musicvideos' })">Music Videos</a></li>
            <li><a ui-sref="media({ type: 'film' })">Film</a></li>
            <li><a href="">Portfolio</a></li>
            <li><a href="">Clients</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </menu>
      </header>
    `
  };
}
