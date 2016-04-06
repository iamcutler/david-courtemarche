/**
 * Created by allancutler on 4/3/16.
 */

'use strict';

angular.module('DavidCourtemarcheAdmin.controllers')
  .controller('MediaAdminController', MediaAdminController);

function MediaAdminController($state, MediaService, UploadService) {
  var vm = this;

  vm.media = [];
  // functions
  vm.initialize = initialize;
  vm.isSubmitting = false;
  vm.new = {}; // new media object
  vm.submit = submit;
  vm.remove = remove;
  vm.upload = upload;

  function initialize() {
    getAllMedia();
  }

  function getAllMedia() {
    return MediaService.getByType()
      .then(response => {
        vm.media = response;
      });
  }

  function remove(id, index) {
    if (confirm('Are you sure you want to remove this media?')) {
      MediaService.remove(id)
        .then(function() {
          vm.media.splice(index, 1);
        });
    }
  }

  function submit() {
    if (UploadService.checkForValidFileType(vm.file.name)) {
      vm.isSubmitting = true;

      UploadService.upload(vm.file)
        .then(function (resp) {
          // assign to inserting record
          vm.new.media_file = resp.data.files[0].fd;

          // Insert new record
          MediaService.insert(vm.new)
            .then(function() {
              // redirect to show all resources
              $state.go('media.index');
            })
            .catch(function(err) {
              console.error(err);
              vm.isSubmitting = false;
            });
        }, function (resp) {
          console.error('Error status: ' + resp.status);
          vm.isSubmitting = false;
        }, function (evt) {});
    }
  }

  function upload(files) {
    if (files && UploadService.checkForValidFileType(files.name)) {
      UploadService.upload(files)
        .then(function (resp) {
          console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
        }, function (resp) {
          console.log('Error status: ' + resp.status);
        }, function (evt) {
          var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
          console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
        });
    }
  }
}
