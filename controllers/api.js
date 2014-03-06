var db = require('../database'),
	async = require('async'),
	mongoose = require('mongoose');

exports.home = function(req, res) {
	db.User.findById(req.cookies.id, 'name role')
		.lean()
		.exec(function(err, user) {
			user.points = 0;
			db.Team.findOne({
				members: req.cookies.id
			}, 'name members').populate('members', 'name role').exec(function(err, team) {
				res.jsonp({
					user: user,
					team: team
				});
			});
	});
};

exports.student = function(req, res) {
	db.User.findOne()
		.populate({
			path: 'report',
			model: 'Report'
		})
		.exec(function(err, student) {
			student.getTeam(function(err, team) {
				db.User.populate(student.report, {
					path: 'season',
					model: 'Season'
				}, function(err, val) {
					db.User.populate(student.report, {
						path: 'activities.activity',
						model: 'Activity'
					}, function(err, val) {
						res.jsonp({
							id: req.cookies.id,
							student: student,
							team: team
						});
					});
				});
			});
	});
};

exports.behavior = function(req, res) {
	db.Season.findOne(function(err, season) {
		db.Behavior.find({season: season})
			.exec(function(err, behaviors) {
				db.Behavior.rewards(behaviors, function(err) {
					if(err) {
						res.send(err.message);
					} else {
						res.jsonp(behaviors);
					}
				});
			});
	});
};

exports.reward = function(req, res) {
	db.Season.findOne(function(err, season) {
		db.Reward.find({season: season})
			.populate('requirements.behavior')
			.exec(function(err, rewards) {
				res.jsonp({
					badges: rewards
				});
			});
	});
};