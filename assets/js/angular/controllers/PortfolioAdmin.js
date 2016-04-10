'use strict';

angular.module('DavidCourtemarcheAdmin.controllers')
  .controller('PortfolioAdminController', PortfolioAdminController);

function PortfolioAdminController($state, CommonService, PortfolioService, UploadService) {
  var vm = this;

  vm.images = [];
  // functions
  vm.assetUrl = assetUrl;
  vm.getPortfolio = getPortfolio;
  vm.insert = insert;
  vm.isSubmitting = false;
  vm.new = {}; // new client object
  vm.remove = remove;

  function assetUrl(id) {
    return CommonService.assetUrl(id);
  }

  function getPortfolio() {
    PortfolioService.get()
      .then(response => {
        vm.images = response;
      })
      .catch(err => {
        console.error(err);
      });
  }

  function insert() {
    if (UploadService.checkForValidFileType(vm.image.name)) {
      vm.isSubmitting = true;

      UploadService.uploadImage(vm.image)
        .then(function (resp) {
          // assign to inserting record
          vm.new.image = resp.data.files[0].fd;

          // Insert new record
          PortfolioService.insert(vm.new)
            .then(() => {
              // redirect to show all resources
              $state.go('portfolio.index');
            })
            .catch(err => {
              console.error(err);
              vm.isSubmitting = false;
            });
        }, resp => {
          console.error('Error status: ' + resp.status);
          vm.isSubmitting = false;
        }, evt => {});
    }
  }

  function remove(id, index) {
    if(confirm('Are you sure you want to remove this image from your portfolio?')) {
      PortfolioService.remove(id)
        .then(() => {
          vm.images.splice(index, 1);
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
}
