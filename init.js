var mongoose = require('mongoose'),
	validator = require('mongoose-validator'),
	db = require('./database'),
	async = require('async');

var behaviors = [
	{
		name: 'Homework',
		description: 'Based on completion, 4 points earned per day',
		type: 'Weekly',
		target: 'Class',
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
		target: 'Class',
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
		target: 'Class',
		interval: [
			{
				points: 15,
				days: 7
			}
		]
	},
	{
		name: 'Activity',
		description: '5 points per activity per week, need 4/5 days attendance for points',
		type: 'Activity',
		target: 'Class',
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
		target: 'Class',
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
		type: 'Solo',
		target: 'Class',
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
		type: 'Solo',
		target: 'Class',
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
		type: 'Solo',
		target: 'Class',
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
		type: 'Solo',
		target: 'Class',
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
		target: 'Class',
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
		target: 'Class',
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
		target: 'Class',
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
		target: 'Class',
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
		target: 'Class',
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
		type: 'Bonus',
		requirements: [{
			target: 'Team',
			behavior: 0,
			points: 4,
			days: 1
		}],
		bonus: 20
	},
	{
		name: 'Attendance',
		description: 'All students on team have perfect attendance for week',
		type: 'Bonus',
		requirements: [{
			target: 'Team',
			behavior: 1,
			points: 15,
			days: 7
		}],
		bonus: 20
	},
	{
		name: 'Quizzes/Tests',
		description: 'All students on team get 15 points on a quiz/test that week',
		type: 'Bonus',
		requirements: [{
			target: 'Team',
			behavior: 2,
			points: 15,
			days: 7,
			once: true
		}],
		bonus: 20
	},
	{
		name: 'Activity',
		description: 'More than one person on same Activity, +10 for each person',
		type: 'Bonus',
		requirements: [{
			target: 'Team',
			behavior: 3,
			points: 10,
			days: 7
		}],
		bonus: 10
	},
	{
		name: 'Participation',
		description: 'All students on team have perfect participation in all classes on one day',
		type: 'Bonus',
		requirements: [{
			target: 'Team',
			behavior: 4,
			points: 2,
			days: 1
		}],
		bonus: 20
	},
	
	{
		name: 'Bronze Pen',
		description: 'Perfect homework all classes for a week',
		type: 'Badge',
		requirements: [{
			target: 'Solo',
			behavior: 0,
			points: 20,
			days: 7
		}]
	},
	{
		name: 'Silver Pen',
		description: 'Perfect homework all classes for two weeks',
		type: 'Badge',
		requirements: [{
			target: 'Solo',
			behavior: 0,
			points: 20*2,
			days: 7*2
		}]
	},
	{
		name: 'Gold Pen',
		description: 'Perfect homework all classes for four months',
		type: 'Badge',
		requirements: [{
			target: 'Solo',
			behavior: 0,
			points: 20*4*4,
			days: 7*4*4
		}]
	},
	{
		name: 'Bronze Calendar',
		description: 'Perfect attendance for a month',
		type: 'Badge',
		requirements: [{
			target: 'Solo',
			behavior: 1,
			points: 15*4,
			days: 7*4
		}]
	},
	{
		name: 'Silver Calendar',
		description: 'Perfect attendance for two months',
		type: 'Badge',
		requirements: [{
			target: 'Solo',
			behavior: 1,
			points: 15*4*2,
			days: 7*4*2
		}]
	},
	{
		name: 'Gold Calendar',
		description: 'Perfect attendance for four months',
		type: 'Badge',
		requirements: [{
			target: 'Solo',
			behavior: 1,
			points: 15*4*4,
			days: 7*4*4
		}]
	},
	{
		name: 'Bronze Hand',
		description: 'Perfect participation for all classes for a week',
		type: 'Badge',
		requirements: [{
			target: 'Solo',
			behavior: 4,
			points: 10,
			days: 7
		}]
	},
	{
		name: 'Silver Hand',
		description: 'Perfect participation for all classes for two weeks',
		type: 'Badge',
		requirements: [{
			target: 'Solo',
			behavior: 4,
			points: 10*2,
			days: 7*2
		}]
	},
	{
		name: 'Gold Hand',
		description: 'Perfect participation for all classes for a month',
		type: 'Badge',
		requirements: [{
			target: 'Solo',
			behavior: 4,
			points: 10*4,
			days: 7*4
		}]
	},/*
	{
		name: 'Curious Cat',
		description: 'Joining an Activity activity after 1st report period',
		type: 'Badge',
		requirements: [{
			target: 'Solo',
			secret: true
		}]
	},
	{
		name: 'The Juggler',
		description: 'Be a part of three Activities',
		type: 'Badge',
		requirements: [{
			target: 'Solo',
			secret: true
		}]
	},*/
	{
		name: 'Bronze Heart',
		description: 'Extra 10 hours community service',
		type: 'Badge',
		requirements: [{
			target: 'Solo',
			behavior: 11,
			points: 10
		}]
	},
	{
		name: 'Silver Heart',
		description: 'Extra 20 hours community service',
		type: 'Badge',
		requirements: [{
			target: 'Solo',
			behavior: 11,
			points: 20
		}]
	},
	{
		name: 'Gold Heart',
		description: 'Extra 30 hours community service',
		type: 'Badge',
		requirements: [{
			target: 'Solo',
			behavior: 11,
			points: 30
		}]
	},
	/*
	{
		name: 'Quad Squad',
		description: 'All team members participate in same Activity for a week',
		type: 'Badge',
		requirements: [{
			target: 'Team',
			behavior: 1
		}]
	},*/
	{
		name: 'Burning Calendar',
		description: 'All team members perfect attendance for a month',
		type: 'Badge',
		requirements: [{
			target: 'Team',
			behavior: 1,
			points: 15*4,
			days: 7*4
		}]
	},
	{
		name: 'Homework Hawk',
		description: 'All team members perfect homework for a month',
		type: 'Badge',
		requirements: [{
			target: 'Team',
			behavior: 0,
			points: 20*4,
			days: 7*4
		}]
	},
	{
		name: 'Knowledge Buff',
		description: 'All team members visit a museum',
		type: 'Badge',
		requirements: [{
			target: 'Team',
			behavior: 9,
			points: 15
		}]
	},
	{
		name: 'Roadrunner',
		description: 'All team members finish a Do Now first within a week',
		type: 'Badge',
		requirements: [{
			target: 'Team',
			behavior: 5,
			points: 4,
			days: 7
		}]
	},
	{
		name: 'Fearless Help',
		description: 'All team members visit office hours of a teacher',
		type: 'Badge',
		secret: true,
		requirements: [{
			target: 'Team',
			behavior: 7,
			points: 2
		}]
	},
	{
		name: 'Raised Hand',
		description: 'All team members participate in all classes for one day',
		type: 'Badge',
		secret: true,
		requirements: [{
			target: 'Team',
			behavior: 4,
			points: 2, // could be 1-2 possibly
			days: 1
		}]
	},
	{
		name: 'All For One',
		description: 'All team members get team chemistry points within a month',
		type: 'Badge',
		secret: true,
		requirements: [{
			target: 'Team',
			behavior: 6,
			points: 4,
			days: 7*4
		}]
	},
	{
		name: 'Community Stars',
		description: 'All team members do 10 extra hours of service',
		type: 'Badge',
		requirements: [{
			target: 'Team',
			secret: true,
			behavior: 11,
			points: 10
		}]
	}
];

var users = [{
	name: {
		first: 'Matthew',
		last: 'Murphy'
	},
	role: ['Student', 'Admin']
}, {
	name: {
		first: 'Paul',
		last: 'Bowen'
	},
	role: ['Student']
}, {
	name: {
		first: 'Teion',
		last: 'Ensley'
	},
	role: ['Student']
}, {
	name: {
		first: 'Ashcon',
		last: 'Zand'
	},
	role: ['Student']
}, {
	name: {
		first: 'Douglas',
		last: 'Schutz'
	},
	role: ['Teacher']
}];

mongoose.connection.on('connected', function() {
	async.each(Object.keys(mongoose.models), function(collection, cb) {
		db[collection].remove({}, cb);
	}, function() {
		var school = new db.School({
			name: 'Temple University'
		});
		school.save(function(err) {
			if(err) console.log(err);
			var season = new db.Season({
				school: school,
				start: new Date(),
				end: new Date((new Date().getTime()) + 1000*60*60*24*30)
			});
			season.save(function(err) {
				if(err) console.log(err);
				async.map(behaviors, function(behavior, callback) {
						behavior.season = season;
						var res = new db.Behavior(behavior);
						res.save(function(err) {
							if(err) console.log(err);
							callback(err, res);
						});
					}, function(err, results) {
						if(err) console.log(err);
						async.each(rewards, function(reward, callback) {
							for(var i = 0; i < reward.requirements.length; i++) {
								if(results[reward.requirements[i].behavior]) {
									reward.requirements[i].behavior = results[reward.requirements[i].behavior];
								} else {
									callback();
									return;
								}
							}
							reward.season = season;
							var res = new db.Reward(reward);
							res.save(function(err) {
								if(err) console.log(err);
								callback();
							});
						}, function(err) {
							if(err) console.log(err);
							var chess = new db.Activity({
								name: 'Chess Club',
								season: season,
								type: 'Extracurricular'
							});
							var team = new db.Team({
								season: season,
								name: 'Team Koala',
								members: []
							});
							chess.save(function(err, reschess) {
								if(err) console.log(err);
								if(err) console.log(err);
								async.each(users, function(user, cb) {
									var report = new db.Report({
										season: season,
										activities: [{
											activity: chess,
											role: 'Student'
										}]
									});
									report.save(function(err) {
										user.school = school;
										user.report = [report]
										user = new db.User(user);
										user.save(function(err) {
											if(err) console.log(err);
											team.members.push(user);
											cb();
										});
									});
								}, function(err, res) {
									if(err) console.log(err);
									team.save(function(err) {
										process.exit(1);
									});
								});
							});
						});
					});
			});
		});
	});
});