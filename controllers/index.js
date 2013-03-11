exports.index = function(req, res) {
	console.log(this);
	res.render('index', { title: 'Fantasy Learning' });
};

exports.portlet = function(req, res) {
	res.render('portlet', { title: 'Fantasy Learning' });
};

exports.student = function(req, res) {
	res.render('student', { title: 'Fantasy Learning' });
};

exports.coach = function(req, res) {
	res.render('coach', { title: 'Fantasy Learning' });
};