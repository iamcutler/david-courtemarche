/**
 * MediaController
 *
 * @description :: Server-side logic for managing media
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  // e.g. /media
  find: function(req, res) {
    var query = { sort: 'order' };

    // check if type query param is passed
    if(req.query.type) {
      query.where = {
        media_type: req.query.type
      };
    }

    Media.find(query).exec(function findAllMedia(err, media) {
      if(err) {
        sails.log.info(err);
        return res.serverError(err);
      }

      return res.json(media);
    });
  },
  // e.g. /media/:id
  findOne: function(req, res) {
    var id = req.param('id');

    Media.findOne({ id: id }).exec(function findMedia(err, media) {
      if(err) {
        sails.log.info(err);
        return res.serverError(err);
      }

      return res.json(media);
    });
  }
};
