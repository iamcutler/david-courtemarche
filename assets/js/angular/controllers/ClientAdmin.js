'use strict';

angular.module('DavidCourtemarcheAdmin.controllers')
  .controller('ClientAdminController', ClientAdminController);

function ClientAdminController(ClientService) {
  var vm = this;

  vm.clients = [];
  // functions
  vm.getClients = getClients;
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
