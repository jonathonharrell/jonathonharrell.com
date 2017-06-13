'use strict';

var path = require('path'),
	rootPath = path.normalize(__dirname + '/../..');

module.exports = {
	app: {
		title: 'Jonathon Harrell',
		description: 'Web developer, node enthusiast.',
		keywords: 'web, developer, designer, node, javascript'
	},
	root: rootPath,
	port: process.env.PORT || 3000,
	templateEngine: 'swig'
};
