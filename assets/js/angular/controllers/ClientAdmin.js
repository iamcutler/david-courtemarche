'use strict';

angular.module('DavidCourtemarcheAdmin.controllers')
  .controller('ClientAdminController', ClientAdminController);

function ClientAdminController($state, ClientService) {
  var vm = this;

  vm.clients = [];
  // functions
  vm.getClients = getClients;
  vm.insert = insert;
  vm.new = {}; // new client object
  vm.remove = remove;

  function getClients() {
    ClientService.get()
      .then(function(clients) {
        vm.clients = clients;
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  function insert() {
    ClientService.insert(vm.new)
      .then(function() {
        $state.go('clients.index');
      });
  }

  function remove(id, index) {
    if(confirm('Are you sure you want to remove this client?')) {
      ClientService.remove(id)
        .then(function() {
          vm.clients.splice(index, 1);
        })
        .catch(function(err) {
          console.error(err);
        });
    }
  }
}
