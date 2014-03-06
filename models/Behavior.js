var mongoose = require('mongoose'),
	validate = require('mongoose-validator').validate,
	async = require('async');

var BehaviorSchema = new mongoose.Schema({
	season: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'Season'
	},
	target: {
		type: String,
		required: true,
		enum: ['Class', 'Activity']
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
		enum: ["Weekly", "Team", "Solo", "Outside", "Activity"]
	},
	// how often a behavior can be rewarded
	interval: [{
		points: {
			type: Number,
			required: true
		},
		days: {
			type: Number,
			required: true
		}
	}]
});
BehaviorSchema.methods.rewards = function (cb) {
	this.model('Reward').find({
		season: this.season,
		"requirements.behavior": this._id
	}, cb);
};
BehaviorSchema.statics.rewards = function (behaviors, cb) {
	async.each(behaviors, function(behavior, callback) {
		behavior.rewards(function(err, requirements) {
			behavior.requirements = requirements;
			callback(err);
		});
	}, function(err) {
		cb();
	});
};
var Behavior = module.exports = mongoose.model('Behavior', BehaviorSchema);