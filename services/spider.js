/**
 * Spider
 *
 * let spider = require('./spider');
 * let adapter = require('./adapter');
 * let sqlite = require('./sqlite');
 * let redis  = require('./redis');
 * spider.use(adapter);
 * spider.use(sqlite);
 * spider.use(redis);
 * spider.likes('some blog name');
 */
let tumblr = require('./tumblr');
//let sqlite = require('./sqlite');
let tasks = require('../modules/tasks');

function Spider() {
    let self = this;
    let callbacks = [];

    function handle(data) {
        callbacks.forEach(fn => {
            fn(data);
        });
    }

    this.use = plugin => {
        callbacks.push(plugin);
    };

    this.grab = (blog, type) => {
        if (!blog) {
            throw 'Blog is undefined!';
        }

        let task = tumblr[type](blog);
        task.on('data', handle);

        return {};
    };

    this.likes = blog => {
        return self.grab(blog, 'likes');
    };

    this.following = blog => {
        return self.grab(blog, 'following');
    }

    this.posts = blog => {
        return self.grab(blog, 'posts');
    }
}

module.exports = Spider;
