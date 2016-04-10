/**
* Portfolio.js
*
* @description :: This model holds portfolio media for all categories of work
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    image: {
      type: 'string',
      required: true
    },

    type: {
      type: 'string',
      required: true
    },

    order: {
      type: 'integer',
      defaultsTo: 1
    }
  }
};

