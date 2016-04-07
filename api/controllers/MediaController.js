/**
 * MediaController
 *
 * @description :: Server-side logic for managing media
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  // e.g. /media
  find: function(req, res) {
    var query = {
      where: {
        archive: req.query.archive || 0
      },
      sort: 'order'
    };

    // check if type query param is passed
    if(req.query.type) {
      query.where.media_type = req.query.type;
    }

    Media.find(query).exec(function findAllMedia(err, media) {
      if(err) {
        sails.log.error(err); // Log exception
        return res.serverError(err);
      }

      res.ok(media);
    });
  },
  // e.g. /media/:id
  findOne: function(req, res) {
    var id = req.param('id');

    Media.findOne({ id: id }).exec(function findMedia(err, media) {
      if(err) {
        sails.log.error(err); // Log exception
        return res.serverError(err);
      }

      res.ok(media);
    });
  },
  // e.g. /media/upload/file
  uploadMediaFile: function(req, res) {
    req.file('file').upload({
      adapter: require('skipper-s3'),
      key: sails.config.aws.key,
      secret: sails.config.aws.secret,
      bucket: sails.config.aws.bucket
    }, function (err, filesUploaded) {
      if (err) return res.negotiate(err);

      return res.ok({
        files: filesUploaded,
        textParams: req.params.all()
      });
    });
  },
  // e.g. /media/upload/image
  uploadMediaImage: function(req, res) {
    req.file('file').upload({
      adapter: require('skipper-s3'),
      key: sails.config.aws.key,
      secret: sails.config.aws.secret,
      bucket: sails.config.aws.bucket
    }, function (err, filesUploaded) {
      if (err) return res.negotiate(err);

      return res.ok({
        files: filesUploaded,
        textParams: req.params.all()
      });
    });
  },
  serveImageAsset: function(req, res) {
    var request = require('request');
    var image_path = 'http://' + sails.config.aws.bucket + '.s3-website-us-east-1.amazonaws.com/' + req.params.id;

    request.get(image_path).pipe(res);
  }
};

