var express = require('express'),
	http = require('http'),
	conf = require('./conf');


var app = require('express')(),
	server = require('http').createServer(app),
	io = require('socket.io').listen(server);
conf(app);

server.listen(app.get('port'), function() {
	console.log("Express server listening on port " + app.get('port'));
});

io.sockets.on('connection', function (socket) {
	socket.on('chat', function (data) {
		socket.broadcast.emit('chat', data);
	});
});