var mongoose = require('mongoose'),
	validator = require('mongoose-validator');
mongoose.connect('mongodb://localhost/test');

validator.extend('enums', function (ok) {
	return this.str.every(function (val) {
		return !!~ok.indexOf(val)
	});
}, 'Not in enum');

var db = module.exports = {
	School: require('./models/School'),
	Class: require('./models/Class'),
	User: require('./models/User'),
	Reward: require('./models/Reward'),
	Season: require('./models/Season'),
	Behavior: require('./models/Behavior'),
	Activity: require('./models/Activity')
};

// Behaviors: Homework, Attendance, Quizzes/Tests, Extracurriculars, Participation, Community Service

var behaviors = [
	{
		name: 'Homework',
		description: 'Based on completion, 4 points earned per day',
		type: 'Weekly',
		interval: [
			{
				points: 4,
				days: 1
			},
			{
				points: 20,
				days: 7
			}
		]
	},
	{
		name: 'Attendance',
		description: '3 points per day, late = 1/2 points',
		type: 'Weekly',
		interval: [
			{
				points: 3,
				days: 1
			},
			{
				points: 15,
				days: 7
			}
		]
	},
	{
		name: 'Quizzes/Tests',
		description: '90+ = 15, 80+ = 10, 76+ = 5',
		type: 'Weekly',
		interval: [
			{
				points: 15,
				days: 7
			}
		]
	},
	{
		name: 'Extracurriculars',
		description: '5 points per activity per week, need 4/5 days attendance for points',
		type: 'Weekly',
		interval: [
			{
				points: 10,
				days: 7
			}
		]
	},
	{
		name: 'Participation',
		description: '2 points a day possible',
		type: 'Weekly',
		interval: [
			{
				points: 2,
				days: 1
			},
			{
				points: 10,
				days: 7
			}
		]
	},
	
	{
		name: 'Finish Do Now First',
		description: 'Student finishes daily “do now” first',
		type: 'Individual',
		interval: [
			{
				points: 4,
				days: 1
			}
		]
	},
	{
		name: 'Team Chemistry',
		description: 'Teacher sees strong teamwork in class',
		type: 'Individual',
		interval: [
			{
				points: 4,
				days: 1
			}
		]
	},
	{
		name: 'Office Hours',
		description: 'Student visits teacher office hours',
		type: 'Individual',
		interval: [
			{
				points: 2,
				days: 1
			}
		]
	},
	{
		name: 'Teacher Assistance',
		description: 'Student helps teacher with task',
		type: 'Individual',
		interval: [
			{
				points: 2,
				days: 1
			}
		]
	},
	
	{
		name: 'Visiting a Museum',
		description: 'Student brings museum stub and a photo of themselves there',
		type: 'Outside',
		interval: [
			{
				points: 15,
				days: 7
			}
		]
	},
	{
		name: 'Contacting Mentor',
		description: 'Can be earned once per week by each student',
		type: 'Outside',
		interval: [
			{
				points: 5,
				days: 7
			}
		]
	},
	{
		name: 'Additional Community Service',
		description: 'Points earned per hour',
		type: 'Outside',
		interval: [
			{
				points: 10,
				days: 7
			}
		]
	},
	{
		name: 'Attending School Events',
		description: 'Per event',
		type: 'Outside',
		interval: [
			{
				points: 10,
				days: 1
			}
		]
	},
	{
		name: 'Parental Involvement',
		description: 'Earned once per week by parent signing in',
		type: 'Outside',
		interval: [
			{
				points: 10,
				days: 7
			}
		]
	}
];

var rewards = [
	{
		name: 'Homework',
		description: 'All students on team have perfect on one day',
		target: 'Team',
		type: 'Bonus',
		behavior: '',
		points: 4,
		days: 1,
		bonus: 20
	},
	{
		name: 'Attendance',
		description: 'All students on team have perfect attendance for week',
		target: 'Team',
		type: 'Bonus',
		behavior: '',
		points: 15,
		days: 7,
		bonus: 20
	},
	{
		name: 'Quizzes/Tests',
		description: 'All students on team get 15 points on a quiz/test that week',
		target: 'Team',
		type: 'Bonus',
		behavior: '',
		points: 15,
		days: 7,
		bonus: 20
	},
	{
		name: 'Extracurriculars',
		description: 'More than one person on same extracurricular, +10 for each person',
		target: 'Team',
		type: 'Bonus',
		behavior: '',
		points: 10,
		days: 7,
		bonus: 10
	},
	{
		name: 'Participation',
		description: 'All students on team have perfect participation in all classes on one day',
		target: 'Team',
		type: 'Bonus',
		behavior: '',
		points: 2,
		days: 1,
		bonus: 20
	},
	
	{
		name: 'Bronze Pen',
		description: 'Perfect homework all classes for a week',
		target: 'Individual',
		type: 'Badge',
		behavior: '',
		points: 20,
		days: 7
	},
	{
		name: 'Silver Pen',
		description: 'Perfect homework all classes for two weeks',
		target: 'Individual',
		type: 'Badge',
		behavior: '',
		points: 20*2,
		days: 7*2
	},
	{
		name: 'Gold Pen',
		description: 'Perfect homework all classes for four months',
		target: 'Individual',
		type: 'Badge',
		behavior: '',
		points: 20*4*4,
		days: 7*4*4
	},
	{
		name: 'Bronze Calendar',
		description: 'Perfect attendance for a month',
		target: 'Individual',
		type: 'Badge',
		behavior: '',
		points: 15*4,
		days: 7*4
	},
	{
		name: 'Silver Calendar',
		description: 'Perfect attendance for two months',
		target: 'Individual',
		type: 'Badge',
		behavior: '',
		points: 15*4*2,
		days: 7*4*2
	},
	{
		name: 'Gold Calendar',
		description: 'Perfect attendance for four months',
		target: 'Individual',
		type: 'Badge',
		behavior: '',
		points: 15*4*4,
		days: 7*4*4
	},
	{
		name: 'Bronze Hand',
		description: 'Perfect participation for all classes for a week',
		target: 'Individual',
		type: 'Badge',
		behavior: '',
		points: 10,
		days: 7
	},
	{
		name: 'Silver Hand',
		description: 'Perfect participation for all classes for two weeks',
		target: 'Individual',
		type: 'Badge',
		behavior: '',
		points: 10*2,
		days: 7*2
	},
	{
		name: 'Gold Hand',
		description: 'Perfect participation for all classes for a month',
		target: 'Individual',
		type: 'Badge',
		behavior: '',
		points: 10*4,
		days: 7*4
	},
	{
		name: 'Curious Cat',
		description: 'Joining an extracurricular activity after 1st report period',
		target: 'Individual',
		type: 'Badge',
		secret: true
	},
	{
		name: 'The Juggler',
		description: 'Be a part of three extracurriculars',
		target: 'Individual',
		type: 'Badge',
		secret: true
	},
	{
		name: 'Bronze Heart',
		description: 'Extra 10 hours community service',
		target: 'Individual',
		type: 'Badge',
		behavior: '',
		points: 10
	},
	{
		name: 'Silver Heart',
		description: 'Extra 20 hours community service',
		target: 'Individual',
		type: 'Badge',
		behavior: '',
		points: 20
	},
	{
		name: 'Gold Heart',
		description: 'Extra 30 hours community service',
		target: 'Individual',
		type: 'Badge',
		behavior: '',
		points: 30
	},
	
	{
		name: 'Quad Squad',
		description: 'All team members participate in same extracurricular for a week',
		target: 'Team',
		type: 'Badge'
	},
	{
		name: 'Burning Calendar',
		description: 'All team members perfect attendance for a month',
		target: 'Team',
		type: 'Badge',
		behavior: '',
		points: 15*4,
		days: 7*4
	},
	{
		name: 'Homework Hawk',
		description: 'All team members perfect homework for a month',
		target: 'Team',
		type: 'Badge',
		behavior: '',
		points: 20*4,
		days: 7*4
	},
	{
		name: 'Knowledge Buff',
		description: 'All team members visit a museum',
		target: 'Team',
		type: 'Badge'
	},
	{
		name: 'Roadrunner',
		description: 'All team members finish a Do Now first within a week',
		target: 'Team',
		type: 'Badge'
	},
	{
		name: 'Fearless Help',
		description: 'All team members visit office hours of a teacher',
		target: 'Team',
		type: 'Badge',
		secret: true
	},
	{
		name: 'Raised Hand',
		description: 'All team members participate in all classes for one day',
		target: 'Team',
		type: 'Badge',
		secret: true
	},
	{
		name: 'All For One',
		description: 'All team members get team chemistry points within a month',
		target: 'Team',
		type: 'Badge',
		secret: true
	},
	{
		name: 'Community Stars',
		description: 'All team members do 10 extra hours of service',
		target: 'Team',
		type: 'Badge',
		secret: true
	}
];