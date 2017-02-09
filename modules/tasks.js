let redis = require('./redis');
let sqlite = require('./sqlite').tasks;

let tasks = {};
let defaults = {
    limit: 20,
    before: 0,
    offset: 0,
    total: 0,

    done: 0
};

let instance = module.exports = {
    get: function(taskName) {
        return tasks[taskName];
    },
    create: function(taskName, data) {
        let _data = Object.assign({}, defaults, data, {
            data: []
        });
        
        tasks[taskName] = _data;
        return _data;
    },
    remove: function(taskName) {
        delete tasks[taskName];
    },
    done: function(taskName) {
        let task = tasks[taskName];
        if (task) {
            task.done == 1;
        }

        // 存储，持久化，保证下次启动程序时能继续上一次的进度
    }
};