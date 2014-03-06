var mongoose = require('mongoose'),
	validate = require('mongoose-validator').validate;

var SeasonSchema = new mongoose.Schema({
	school: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'School'
	},
	daysOff: [Date],
	start: {
		type: Date,
		required: true,
	},
	end: {
		type: Date,
		required: true,
	},
	behaviors: [],
	rewards: []
});
var Season = module.exports = mongoose.model('Season', SeasonSchema);