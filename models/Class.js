var mongoose = require('mongoose'),
	validate = require('mongoose-validator').validate;

var ClassSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		validate: [validate('len', 3, 50), validate('isAlphanumeric')]
	}
});
var Class = module.exports = mongoose.model('Class', ClassSchema);