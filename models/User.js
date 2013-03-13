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
	classes: [new mongoose.Schema({
		_id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Class'
		},
		role: {
			type: String,
			enum: ["Teacher", "Student"]
		}
	})],
	parents: [{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User'
	}],
	report: [new mongoose.Schema({
		season: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Season'
		},
		daily: [new mongoose.Schema({
			day: Date,
			points: [new mongoose.Schema({
				behavior: {
					type: mongoose.Schema.Types.ObjectId,
					ref: 'Season'
				},
				score: Number
			})]
		})],
	})],
	role: {
		type: [String],
		validate: [validate({message: 'Not a valid role'}, 'enums', ['Student', 'Teacher', 'Parent', 'Mentor', 'Volunteer', 'Admin', 'Principle'])]
	}
});
UserSchema.virtual('name.full').get(function() {
	return this.name.first + ' ' + this.name.last;
});
//mongoose.Schema.Types.ObjectId
var User = module.exports = mongoose.model('User', UserSchema);