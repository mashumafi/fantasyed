var mongoose = require('mongoose'),
	validate = require('mongoose-validator').validate;

var ActivitySchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		validate: [validate('len', 3, 50), validate('isAlphanumeric')]
	}
});
var Activity = module.exports = mongoose.model('Activity', ActivitySchema);