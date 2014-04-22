'use strict';

var blogUrl = 'http://blog.jonathonharrell.com/rss/',
    rss     = require('rssparser'),
    async   = require('async');

exports.index = function(req, res, next) { // Read recent blog posts for front page
    rss.parseURL(blogUrl, {}, function(err, out) {
        if (err) {
            res.json({}); // return empty
        } else {
            res.json(out);
        }
    });
};