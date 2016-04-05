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
        abstract: true,
        template: '<ui-view></ui-view>'
      })
        .state('media.index', {
          url: '',
          controller: 'MediaAdminController',
          controllerAs: 'MediaCtrl',
          templateUrl: 'templates/admin/media.html',
          parent: 'media'
        })
        .state('media.new', {
          url: '/new',
          controller: 'MediaAdminController',
          controllerAs: 'MediaCtrl',
          templateUrl: 'templates/admin/media.new.html',
          parent: 'media'
        })
      .state('clients', {
        url: '/clients',
        abstract: true,
        template: '<ui-view></ui-view>'
      })
        .state('clients.index', {
          url: '',
          controller: 'ClientAdminController',
          controllerAs: 'ClientCtrl',
          templateUrl: 'templates/admin/clients.html',
          parent: 'clients'
        })
        .state('clients.new', {
          url: '/new',
          controller: 'ClientAdminController',
          controllerAs: 'ClientCtrl',
          templateUrl: 'templates/admin/client.new.html',
          parent: 'clients'
        });
  });

