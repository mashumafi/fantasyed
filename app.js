var express = require('express'),
	controllers = require('./controllers'),
	http = require('http'),
	path = require('path'),
	database = require('./database');

var app = express();

app.configure(function(){
	app.set('port', process.env.PORT || 8000);
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
	app.use(express.logger('dev'));
	app.use(express.compress());
	app.use(express.cookieParser());
	app.use(express.cookieSession({ secret: 'secret', cookie: { maxAge: 1000*60*60*24*30 }}));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(express.static(path.join(__dirname, 'public'), { maxAge: 1000*60*60*24*30 }));
});

app.configure('development', function(){
	app.use(express.errorHandler());
});

app.configure('production', function(){
});

app.get('/', controllers.index);
app.get('/portlet', controllers.portlet);
app.get('/student', controllers.student);
app.get('/coach', controllers.coach);

http.createServer(app).listen(app.get('port'), function(){
	console.log("Express server listening on port " + app.get('port'));
});