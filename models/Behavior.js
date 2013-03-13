var mongoose = require('mongoose'),
	validate = require('mongoose-validator').validate;

var BehaviorSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		validate: [validate('len', 3, 50), validate('isAlphanumeric')]
	},
	description: {
		type: String,
		required: true,
		validate: [validate('len', 3, 50), validate('isAlphanumeric')]
	},
	type: {
		type: String,
		required: true,
		enum: ["Weekly", "Team", "Individual", "Outside"]
	},
	// how often a behavior can be rewarded
	interval: [new mongoose.Schema({
		points: {
			type: Number,
			required: true
		},
		days: {
			type: Number,
			required: true
		}
	})]
});
var Behavior = module.exports = mongoose.model('Behavior', BehaviorSchema);