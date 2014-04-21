'use strict';

exports.index = function(req, res, next) { // Read recent blog posts for front page

    res.render('index.html', {
        user: req.user || null
    });

};