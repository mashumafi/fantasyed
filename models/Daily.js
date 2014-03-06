var mongoose = require('mongoose'),
	validate = require('mongoose-validator').validate;

var DailySchema = new mongoose.Schema({
	day: Date,
	rewards: [{
		activity: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Activity'
		},
		points: [{
			behavior: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Behavior'
			},
			score: Number
		}]
	}]
});
var Daily = module.exports = mongoose.model('Daily', DailySchema);