ko.bindingHandlers.jqmRefreshList = { 
	update: function(element, valueAccessor) { 
		ko.utils.unwrapObservable(valueAccessor());
		$(element).listview("refresh"); 
	} 
};

$(document).on('pageinit', function(event) {
	if(!location.hash) {
		location.hash = '#home';
	}
});

$(document).on('pageinit', '#home',  function(event) {
	$.ajax({
		url: "api/home",
		complete: function() {
			console.log(arguments);
		},
		success: function(home) {
			home.user.team = home.team;
			ko.applyBindings(ko.mapping.fromJS(home.user, {
				
			}), document.getElementById("home"));
		}
	});
});

$(document).on('pageinit', '#team',  function(event) {
	$.ajax({
		url: "api/home",
		success: function(team) {
			ko.applyBindings(ko.mapping.fromJS(team.team, {
				
			}), document.getElementById("team"));
		}
	});
});

$(document).on('pageinit', '#leaderboard',  function(event) {
	$.ajax({
		url: "api/leaderboard.json",
		success: function(leaderboard) {
			ko.applyBindings(ko.mapping.fromJS(leaderboard, {
				
			}), document.getElementById("leaderboard"));
			$('#leaderboard div .category').collapsible({
				collapsed: true
			});
		}
	});
});

$(document).on('pageinit', '#leaderboard-team',  function(event) {
	$.ajax({
		url: "api/leaderboard-team.json",
		success: function(leaderboard) {
			ko.applyBindings(ko.mapping.fromJS(leaderboard, {
				
			}), document.getElementById("leaderboard-team"));
			$('#leaderboard-team div .category').collapsible({
				collapsed: true
			});
		}
	});
});

$(document).on('pageinit', '#badges',  function(event) {
	$.ajax({
		url: "api/reward",
		success: function(rewards) {
			ko.applyBindings(ko.mapping.fromJS(rewards, {
				
			}), document.getElementById("badges"));
		}
	});
});

$(document).on('pageinit', '#badges-team',  function(event) {
	$.ajax({
		url: "api/reward",
		success: function(rewards) {
			ko.applyBindings(ko.mapping.fromJS(rewards, {
				
			}), document.getElementById("badges-team"));
		}
	});
});

$(document).on('pageinit', '#scoreboard',  function(event) {
	$.ajax({
		url: "api/scoreboard.json",
		success: function(scoreboard) {
			ko.applyBindings(ko.mapping.fromJS(scoreboard, {
				
			}), document.getElementById("scoreboard"));
			$('#scoreboard div .category').collapsible({
				collapsed: true
			});
		}
	});
});

var chat = {
	friends: ko.observableArray(),
	friend: ko.observable()
};
chat.friends.push({
	name: {
		first: 'Matthew',
		last: 'Murphy'
	},
	unread: ko.observable(1),
	chat: ko.observableArray([{
		content: 'Hello world!',
		time: new Date
	}]),
	showChat: function() {
		this.unread(0);
		chat.friend(this);
	},
	message: ko.observable(),
	send: function() {
		var msg = {
			content: chat.friend().message(),
			time: new Date
		};
		chat.friend().chat.push(msg);
		socket.emit('chat', msg);
		chat.friend().message('');
	}
});
$(document).on('pageinit', '#feed-chat', function(event) {
	ko.applyBindings(chat, document.getElementById("feed-chat"));
});
var socket = io.connect('');
socket.on('chat', function (data) {
	chat.friend().chat.push(data);
	chat.friend().unread(chat.friend().unread() + 1);
	$("#chat").trigger("updatelayout");
});