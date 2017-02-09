let Spider = require('../services/spider');
let postAdapter = require('../adapters/postAdapter');
let likeAdapter = require('../adapters/likeAdapter');
let followingAdapter = require('../adapters/followingAdapter');

function TumblrGrab() {
    let self = this;
    this.likeSpider = new Spider();
    this.postSpider = new Spider();
    this.followingSpider = new Spider();

    this.likeSpider.use(likeAdapter);
    this.postSpider.use(postAdapter);
    this.followingSpider.use(followingAdapter);

    this.likes = (req, res, next) => {
        let blog = req.query.blog;
        self.likeSpider.likes(blog);

        res.jsonp({
            ret: 0,
            msg: ''
        });
    };

    this.posts = (req, res, next) => {
        let blog = req.query.blog;
        self.postSpider.likes(blog);

        res.jsonp({
            ret: 0,
            msg: ''
        });
    };

    this.following = (req, res, next) => {
        let blog = req.query.blog;
        self.followingSpider.likes(blog);

        res.jsonp({
            ret: 0,
            msg: ''
        });
    };
}

module.exports = new TumblrGrab();
