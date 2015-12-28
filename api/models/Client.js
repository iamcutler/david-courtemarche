/**
* Client.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  tableName: 'clients',

  attributes: {
    name: {
      type: 'string',
      required: true
    },

    client_type: {
      type: 'string',
      required: true,
      enum: ['commercials', 'music_videos', 'director', 'awards', 'photographer']
    }
  }
};

