let tumblr = require('../modules/tumblr');
let tasks = require('../modules/tasks');
let Grab = require('../modules/grab');

exports.likes = function(blog) {
    return new Grab(blog, 'likes');
};

exports.following = function(blog) {
    return new Grab(blog, 'following');
};

exports.posts = function(blog) {
    return new Grab(blog, 'posts');
};