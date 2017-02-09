let util = requir('util');
let EventEmitter = require('event').EventEmitter;
let tumblr = require('../modules/tumblr');
let tasks = require('../modules/tasks');

let fnMap = {
    "likes": "blogLikes",
    "following": "blogFollowing",
    "posts": "blogPosts"
};

function Grab(blog, type) {
    EventEmitter.call(this);

    let self = this;
    let taskName = blog + '-' + type;
    let task = tasks.get(taskName);

    if (task && !task.done) {
        return;
    }

    task = task || tasks.create(taskName);
    let fnName = fnMap[type];

    let before = Date.now();
    let offset = task.offset;
    let limit = task.limit;

    let grab = (offset) => {
        let opts = {
            limit: limit,
            before: before,
            offset: offset
        };

        client[fnName](opts, (err, data) => {
            if (err) {
                self.emit('error', err);
            } else {
                self.emit('data', data);

                offset += limit;
                task.offset = Math.min(task.total, offset);

                if (offset < task.total) {
                    grab(offset);
                } else {
                    self.emit('done', {});
                }
            }
        });
    };

    grab(offset, handle);
}

util.inherits(Grab, EventEmitter);

module.exports = Grab;