/**
 * Created by allancutler on 4/3/16.
 */

'use strict';

angular.module('DavidCourtemarcheAdmin')
  .config(function AppRoutes($stateProvider, $urlRouterProvider) {
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/media");

    // Routes
    $stateProvider
      .state('media', {
        url: "/media",
        controller: 'MediaAdminController',
        controllerAs: 'MediaCtrl',
        templateUrl: "templates/admin/media.html"
      })
      .state('clients', {
        url: '/clients',
        controller: 'ClientAdminController',
        controllerAs: 'ClientCtrl',
        templateUrl: 'templates/admin/clients.html'
      });
  });

