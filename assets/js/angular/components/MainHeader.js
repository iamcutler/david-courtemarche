'use strict';

angular.module('DavidCourtemarche.directives')
  .directive('mainHeader', MainHeader);

function MainHeader() {
  return {
    restrict: 'E',
    replace: true,
    scope: false,
    template: `
      <header class="main">
        <h1>David Courtemarche</h1>
        <h2>Production Designer</h2>

        <menu role="navigation">
          <ul>
            <li><a ui-sref="media({ type: 'commercials' })">Commercials</a></li>
            <li><a ui-sref="media({ type: 'musicvideos' })">Music Videos</a></li>
            <li><a ui-sref="media({ type: 'film' })">Film</a></li>
            <li><a href="">Portfolio</a></li>
            <li><a ui-sref="clients">Clients</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </menu>
      </header>
    `
  };
}
