var mongoose = require('mongoose'),
	validator = require('mongoose-validator');
var conn = mongoose.connect('mongodb://localhost/test');

validator.extend('enums', function (ok) {
	return this.str.every(function (val) {
		return !!~ok.indexOf(val)
	});
}, 'Not in enum');

var db = module.exports = {
	School: require('./models/School'),
	Activity: require('./models/Activity'),
	User: require('./models/User'),
	Reward: require('./models/Reward'),
	Season: require('./models/Season'),
	Behavior: require('./models/Behavior'),
	Report: require('./models/Report'),
	Daily: require('./models/Daily'),
	Team: require('./models/Team')
};