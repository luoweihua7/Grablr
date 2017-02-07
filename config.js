/**
 * Config
 */
const path = require('path');
let filesPath = path.join(__dirname, 'data');

module.exports = {
    redis: {
        likes: 'likes',
        following: 'following',
        port: '6379',
        host: '127.0.0.1'
    },
    sqlite: {
        client: 'sqlite3',
        connection: {
            filename: filesPath + '/db/data.sqlite'
        }
    },
    log4js: {
        level: 'INFO',
        category: 'Grablr',
        cfg: {
            replaceConsole: true,
            appenders: [{
                type: 'console'
            }, {
                type: 'file',
                filename: filesPath + '/logs/access.log',
                pattern: '-yyyyMMdd',
                maxLogSize: 20480,
                category: 'Tumblike'
            }]
        }
    },
    api: {
        consumer_key: 'consumer_key',
        consumer_secret: 'consumer_secret',
        token: 'token',
        token_secret: 'token_secret'
    },
    paths: {
        data: filesPath + 'data',
        photo: filesPath + 'photo',
        video: filesPath + 'video'
    }
};