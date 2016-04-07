/**
 * Created by allancutler on 4/5/16.
 */

'use strict';

angular.module('DavidCourtemarcheAdmin.services')
  .factory('UploadService', UploadService);

function UploadService($q, Upload) {
  return {
    checkForValidFileType: checkForValidFileType,
    uploadFile: uploadFile,
    uploadImage: uploadImage,
    uploadFileAndImage: uploadFileAndImage
  };

  function uploadFile(file) {
    return Upload.upload({
      url: '/api/media/upload/file',
      data: {
        file: file
      }
    });
  }

  function uploadImage(file) {
    return Upload.upload({
      url: '/api/media/upload/image',
      data: {
        file: file
      }
    });
  }

  function uploadFileAndImage(file, image) {
    var files = [];

    files.push(uploadFile(file));
    files.push(uploadImage(image));

    return $q.all(files);
  }

  /**
   * Check for valid file type against white list
   *
   * @param {string} file
   * @param {array} whitelist
   * @returns {boolean}
   */
  function checkForValidFileType(file, whitelist) {
    if(typeof file !== 'string') return false;

    whitelist = whitelist || ['mp4', 'jpg', 'jpeg', 'gif', 'png'];

    var extention = file.split('.');

    if(extention.length > 1) {
      return (whitelist.indexOf(extention[extention.length - 1]) !== -1);
    }

    return false;
  }
}

