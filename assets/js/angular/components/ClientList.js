'use strict';

angular.module('DavidCourtemarche.directives')
.directive('clientList', ClientList);

function ClientList() {
  return {
    restrict: 'E',
    replace: true,
    scope: {
      list: '='
    },
    template: `
      <ul>
        <li ng-repeat="client in list track by $index">
          {{ client.name }}
        </li>
      </ul>
    `
  };
}
