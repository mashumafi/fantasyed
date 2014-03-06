var mongoose = require('mongoose'),
	validate = require('mongoose-validator').validate;

var ReportSchema = new mongoose.Schema({
	season: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Season'
	},
	activities: [{
		activity: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Activity'
		},
		role: {
			type: String,
			enum: ["Teacher", "Student", "Assistant"]
		}
	}],
	daily: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Daily'
	}],
	rewards: [{
		reward: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Reward'
		},
		date: Date
	}]
});
var Report = module.exports = mongoose.model('Report', ReportSchema);