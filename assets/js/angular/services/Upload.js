/**
 * Created by allancutler on 4/5/16.
 */

'use strict';

angular.module('DavidCourtemarcheAdmin.services')
  .factory('UploadService', UploadService);

function UploadService(Upload) {
  return {
    checkForValidFileType: checkForValidFileType,
    upload: upload
  };

  function upload(file) {
    return Upload.upload({
      url: '/api/media/upload',
      data: {
        media: file
      }
    });
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

    whitelist = whitelist || ['mp4'];

    var extention = file.split('.');

    if(extention.length > 1) {
      return (whitelist.indexOf(extention[extention.length - 1]) !== -1);
    }

    return false;
  }
}

