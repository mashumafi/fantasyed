var mongoose = require('mongoose'),
	validate = require('mongoose-validator').validate;

var TeamSchema = new mongoose.Schema({
	season: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'Season'
	},
	name: {
		type: String,
		required: true,
		validate: [validate('len', 3, 50)]
	},
	members: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	}]
});
var Team = module.exports = mongoose.model('Team', TeamSchema);