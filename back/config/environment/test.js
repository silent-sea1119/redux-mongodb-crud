'use strict';
let local = require('../local.env.js');
// Test specific configuration
// =================================
module.exports = {
     // Server IP
     ip: '0.0.0.0',
     // Control debug level for modules using visionmedia/debug
     DEBUG: '',
     // Server port
     port: 8080,
     // MongoDB connection options
     mongo: {
     //     uri: 'mongodb://localhost:27017/redux_mongodb_crud'
         uri: 'mongodb://root:toor1234@ds151817.mlab.com:51817/redux_mongodb_crud'
     },
     selfURL: 'http://localhost',
     webApp: {
          url: "http://localhost:80"
     }
};