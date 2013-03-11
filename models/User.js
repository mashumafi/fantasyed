// This will need to represent Teachers/Coach, Students/Athletes, Parents/Mentors, Admins/DataProcessors

var mongoose = require('mongoose'),
	validate = require('mongoose-validator').validate;

var UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		validate: [validate('len', 3, 50), validate('isAlphanumeric')]
	}
});
var User = module.exports = mongoose.model('User', UserSchema);