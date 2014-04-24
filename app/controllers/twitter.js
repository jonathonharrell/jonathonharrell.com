'use strict';

var twitterAPI = require('node-twitter-api');
var twitter = new twitterAPI({
    consumerKey: 'xRvC0Uqe5rTTdgcB6wfibdjbm',
    consumerSecret: 'nPIO1xpC7NZ0IeCAYlhghnVuJxF1PMMjmN0DUCdeztOY3sOlWW'
});

var accessToken = '122160999-gm85qEAGfrFcnYofWGPRIGjs4AWdmARt0CGOKX2v',
    accessTokenSecret = 'GObbU6Zmc0Kwcb8Hf0rUJRL0cm7aBimUO0oOYfzJJLG6e';

exports.index = function(req, res, next) { // Read recent blog posts for front page
    twitter.getTimeline('user', { screen_name: 'overlysunny' }, accessToken, accessTokenSecret, function(err, result) {
        if (err) {
            next(err);
        } else {
            res.json(result);
        }
    });
};