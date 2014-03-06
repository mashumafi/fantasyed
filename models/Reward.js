var mongoose = require('mongoose'),
	validate = require('mongoose-validator').validate;

var RewardSchema = new mongoose.Schema({
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
	description: {
		type: String,
		required: true,
		validate: [validate('len', 3, 100)]
	},
	type: {
		type: String,
		required: true,
		enum: ["Bonus", "Badge"]
	},
	secret: { // will only show name and grey image
		type: Boolean,
		default: false,
	},
	requirements: [{
		target: {
			type: String,
			required: true,
			enum: ["Team", "Solo"]
		},
		behavior: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Behavior',
			required: true,
		},
		points: { // required points
			type: Number,
			required: true,
		},
		days: { // number of days to add points
			type: Number,
			required: false,
		},
		all: { // must be done in every class
			type: Boolean,
			default: false,
		},
		once: { // does not add points, instead just take max value
			type: Boolean,
			default: false,
		}
	}],
	bonus: { // points added from badge
		type: Number,
		default: 0,
	}
});
var Reward = module.exports = mongoose.model('Reward', RewardSchema);