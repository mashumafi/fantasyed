// This will need to represent Teachers/Coach, Students/Athletes, Parents/Mentors, Admins/DataProcessors

var mongoose = require('mongoose'),
	validate = require('mongoose-validator').validate;

var UserSchema = new mongoose.Schema({
	name: {
		first: {
			type: String,
			required: true,
			validate: [validate('len', 3, 20), validate('isAlpha')]
		},
		last: {
			type: String,
			required: true,
			validate: [validate('len', 3, 20), validate('isAlpha')]
		}
	},
	school: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'School'
	},
	parents: [{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User'
	}],
	report: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Report'
	}],
	role: {
		type: [String],
		validate: [validate({message: 'Not a valid role'}, 'enums', ['Student', 'Teacher', 'Parent', 'Mentor', 'Volunteer', 'Admin'])]
	}
});
UserSchema.virtual('name.full').get(function() {
	return this.name.first + ' ' + this.name.last;
});
UserSchema.methods.getTeam = function(cb) {
	var self = this, now = new Date();
	self.model('Season').findOne({start: { $lt: now}, end: {$gt: now}}, function(err, season) {
		self.model('Team').findOne({
			season: season._id,
			members: self._id
		}).populate('members').exec(cb);
	});
};
var User = module.exports = mongoose.model('User', UserSchema);