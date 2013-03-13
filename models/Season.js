var mongoose = require('mongoose'),
	validate = require('mongoose-validator').validate;

var SeasonSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		validate: [validate('len', 3, 50), validate('isAlphanumeric')]
	}
});
var Season = module.exports = mongoose.model('Season', SeasonSchema);