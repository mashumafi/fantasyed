var express = require('express');

module.exports = function(app) {
	app.configure('development', function() {
		app.use(express.errorHandler());
	});
};