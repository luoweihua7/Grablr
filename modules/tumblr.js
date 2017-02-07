'use strict';

let tumblr = require('tumblr.js');
let config = require('../config');

let client = tumblr.createClient(config.api);
let ADDITION_API = {
    GET: {
        blogFollowing: '/blog/:blogIdentifier/following'
    }
};

client.addGetMethods(ADDITION_API.GET);

module.exports = client;