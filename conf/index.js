var express = require('express'),
	http = require('http'),
	path = require('path'),
	db = require('../database'),
	routes = require('./routes');

module.exports = function(app) {
	app.set('port', process.env.PORT || 8000);
	app.set('views', __dirname + '/../views');
	app.set('view engine', 'jade');
	app.use(express.logger('dev'));
	app.use(express.compress());
	app.use(express.cookieParser('secret'));
	app.use(express.methodOverride());
	app.use(express.bodyParser());
	app.use(express.session());
	app.use(app.router);
	app.use(express.static(path.join(__dirname, '../public'), { maxAge: 1000*60*60*24*30 }));
	require('./development')(app);
	require('./production')(app);
	require('./test')(app);
	routes(app);
};