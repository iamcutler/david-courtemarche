/**
* Media.js
*
* @description :: This model holds video media for all categories of work
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    name: {
      type: 'string',
      required: true
    },

    company: {
      type: 'string'
    },

    director: {
      type: 'string'
    },

    media_file: {
      type: 'string',
      required: true
    },

    media_type: {
      type: 'string',
      required: true,
      enum: ['commercial', 'media_video', 'film'],
      defaultsTo: 'commercial'
    },

    archive: {
      type: 'integer',
      required: true,
      defaultsTo: 0
    },

    order: {
      type: 'integer',
      autoIncrement: true
    }
  },

  // add auto increment value for "order" before create a document
  beforeCreate: function(obj, next) {
    if(!obj['order']) {
      Media.count().exec(function(err, cnt) {
        if(err) {
          next(err);
        } else {
          obj['order'] = cnt + 1;
          next(null);
        }
      });
    } else {
      next(null);
    }
  }
};

