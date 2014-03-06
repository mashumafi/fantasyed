var controllers = require('../controllers'),
	api = require('../controllers/api');

module.exports = function(app) {
	app.get('/', controllers.index);
	app.get('/login', controllers.login);
	// API
	app.get('/api/home', api.home);
	app.get('/api/reward', api.reward);
	app.get('/api/behavior', api.behavior);
	app.get('/api/student', api.student);
};