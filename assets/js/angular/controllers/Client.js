'use strict';

angular.module('DavidCourtemarche.controllers')
  .controller('ClientController', ClientController);

function ClientController(ClientService) {
  var vm = this;

  vm.clients = [];
  // functions
  vm.getClients = getClients;

  function getClients() {
    ClientService.get()
      .then(function(clients) {
        vm.clients = clients;
      })
      .catch(function(err) {
        console.log(err);
      });
  }
}
