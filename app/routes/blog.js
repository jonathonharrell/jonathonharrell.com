'use strict';

module.exports = function(app) {
    // Root routing
    var blog = require('../../app/controllers/blog');
    app.get('/blogposts', blog.index);
};