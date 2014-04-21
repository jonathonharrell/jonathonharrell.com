'use strict';

var blogUrl = 'http://blog.jonathonharrell.com/rss/',
    async   = require('async');

exports.index = function(req, res, next) { // Read recent blog posts for front page
    res.json('test');
};