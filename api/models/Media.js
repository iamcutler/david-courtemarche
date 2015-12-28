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
      required: true,
      autoIncrement: true,
      unique: true
    }
  }
};

