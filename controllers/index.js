var db = require('../database'),
	async = require('async'),
	mongoose = require('mongoose'),
	Model = mongoose.Model;

exports.index = function(req, res) {
	res.cookie('id', req.query.id, { maxAge: 900000 });
	res.render('mobile', {
		title: 'Fantasy Learning'
	});
};

exports.login = function(req, res) {
	db.User.find(function(err, users) {
		res.render('login', {
			title: 'Fantasy Learning',
			users: users
		});
	});
};