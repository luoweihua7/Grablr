let log4js = require('log4js');
let config = require('../config').log4js;

log4js.configure(config.cfg);
let logger = log4js.getLogger(config.category);
logger.setLevel(config.level);

module.exports = logger;