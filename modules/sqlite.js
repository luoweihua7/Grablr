let config = require('../config');
let knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: config.sqlite3.file
    },
    useNullAsDefault: true,
    debug: true
});
let logger = require('./logger');

// init
knex.schema
    .createTableIfNotExists('users', function(table) {
        table.increments('userid');
        table.string('user');
        table.string('password');
        table.timestamp('createDate').defaultTo(knex.fn.now());
        table.timestamp('lastLogin').defaultTo(knex.fn.now());
    })
    .createTableIfNotExists('posts', function(table) {
        table.increments('postid');
        table.integer('id').unsigned();
        table.integer('type'); // 0:likes, 1:posts
        table.string('blog_name');
        table.string('post_url');
        table.string('type');
        table.timestamp('date');
        table.string('reblog_key');
        table.text('photos'); //photo
        table.text('video_url'); // video
        table.string('thumbnail_url'); //video
        table.timestamp('liked_timestamp');
    })
    .createTableIfNotExists('following', function(table) {
        table.increments('followid');
        table.integer('id').unsigned();
        table.string('blog_name');
        table.timestamp('last_post');
    })
    .createTableIfNotExists('tasks', function(table) {
        table.increments('taskid');
        table.string('task_name');
        table.integer('limit');
        table.integer('offset');
        table.integer('total');
    })
    .then(function() {
        function query(tableName) {
            return new Promise(function(resolve, reject) {
                knex(tableName).select().limit(1).then(resolve).catch(reject);
            });
        }

        Promise.all([query('users'), query('posts'), query('following')])
            .then(function() {
                logger.info('Database ready')
            })
            .catch(function(e) {
                logger.error('Database error!', e);
            });
    });

// exports
exports.knex = knex;
exports.posts = knex('posts');
exports.following = knex('followding');
exports.users = knex('users');