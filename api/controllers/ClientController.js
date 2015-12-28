/**
 * ClientController
 *
 * @description :: Server-side logic for managing clients
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  find: function(req, res) {
    Client.find({ sort: 'name' }).exec(function(err, clients) {
      if(err) {
        sails.log.error(err);
        return res.serverError(err);
      }

      res.ok(clients);
    });
  }
};

