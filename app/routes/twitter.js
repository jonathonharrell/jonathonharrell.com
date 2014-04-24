'use strict';

module.exports = function(app) {
    // Root routing
    var twitter = require('../../app/controllers/twitter');
    app.get('/tweets', twitter.index);
};