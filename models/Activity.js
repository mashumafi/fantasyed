var mongoose = require('mongoose'),
	validate = require('mongoose-validator').validate;

var ActivitySchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		validate: [validate('len', 3, 50)]
	},
	season: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'Season'
	},
	type: {
		type: String,
		required: true,
		enum: ['Class', 'Extracurricular']
	}
});
var Activity = module.exports = mongoose.model('Activity', ActivitySchema);