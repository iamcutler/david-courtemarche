'use strict';

angular.module('DavidCourtemarche')
.config(function AppRoutes($stateProvider, $urlRouterProvider) {
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/media/commercials");

  // Routes
  $stateProvider
    .state('media', {
      url: "/media/:type",
      controller: 'MediaController',
      controllerAs: 'MediaCtrl',
      templateUrl: "templates/media.html"
    })
    .state('clients', {
      url: '/clients',
      controller: 'ClientController',
      controllerAs: 'ClientCtrl',
      templateUrl: 'templates/clients.html'
    });
});
