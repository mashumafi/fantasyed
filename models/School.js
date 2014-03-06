var mongoose = require('mongoose'),
	validate = require('mongoose-validator').validate;

var SchoolSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		validate: [validate('len', 3, 50)]
	}
});
var School = module.exports = mongoose.model('School', SchoolSchema);