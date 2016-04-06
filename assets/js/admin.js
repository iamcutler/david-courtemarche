'use strict';

angular.module('DavidCourtemarcheAdmin.controllers', []);
angular.module('DavidCourtemarcheAdmin.services', []);

angular.module('DavidCourtemarcheAdmin', [
  'DavidCourtemarcheAdmin.controllers',
  'DavidCourtemarcheAdmin.services',
  'DavidCourtemarche.services',
  'DavidCourtemarche.filters',
  'ui.router',
  'ngFileUpload'
]);
