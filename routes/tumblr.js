var express = require('express');
var router = express.Router();

let tumblr = require('../controllers/tumblr');

/* GET users listing. */
router.get('/', function(req, res, next) {
    //res.send('respond with a resource');
    next();
});

router.get('/posts', tumblr.posts);
router.get('/likes', tumblr.likes);
router.get('/following', tumblr.following);

module.exports = router;
