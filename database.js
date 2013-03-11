var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = module.exports = {
	School: require('./models/School'),
	Class: require('./models/Class'),
	User: require('./models/User'),
	Badge: require('./models/Badge')
};