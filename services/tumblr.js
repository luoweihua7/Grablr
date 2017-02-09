let tumblr = require('../modules/tumblr');
let tasks = require('../modules/tasks');
let Grab = require('../modules/grab');

exports.userLikes = function(blog) {
    return new Grab(blog, 'likes');
};

exports.userFollowing = function(blog) {
    return new Grab(blog, 'following');
};

exports.userPosts = function(blog) {
    return new Grab(blog, 'posts');
};