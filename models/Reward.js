var mongoose = require('mongoose'),
	validate = require('mongoose-validator').validate;

var RewardSchema = new mongoose.Schema({
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
	target: {
		type: String,
		required: true,
		enum: ["Team", "Individual"]
	},
	type: {
		type: String,
		required: true,
		enum: ["Bonus", "Badge"]
	},
	secret: Boolean,
	behavior: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Behavior'
	},
	points: Number,
	days: Number,
	bonus: Number
});
var Reward = module.exports = mongoose.model('Reward', RewardSchema);