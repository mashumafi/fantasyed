var mongoose = require('mongoose'),
	validate = require('mongoose-validator').validate;

var BadgeSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		validate: [validate('len', 3, 50), validate('isAlphanumeric')]
	}
});
var Badge = module.exports = mongoose.model('Badge', BadgeSchema);