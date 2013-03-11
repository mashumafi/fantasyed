function generateViewModel(model) {
	var self = model;
	for(var key in model.fields) {
		self[key] = ko.observable(model.fields[key].value);
		self[key + "_error"] = ko.computed(function() {
			return validate(model, this);
		}, key);
	}
	self.isValid = ko.computed(function() {
		for(var key in model.fields) {
			return validate(model, key) === "";
		}
	});
	ko.applyBindings(self, self.target);
}

function validate(model, key) {
	var meta = model.fields[key];
	var validate = meta.validate;
	var clean = meta.clean;
	var field = model[key];
	var value = field();
	try {
		check(value).notEmpty();
		meta.attempts = meta.attempts || 0;
		meta.attempts++;
	} catch(e) {
	}
	if(meta.attempts !== undefined) {
		if(clean) {
			for(var i = 0; i < clean.length; i++) {
				var res = sanitize(value);
				value = res[clean[i][0]].apply(res, clean[i][1]);
			}
		}
		field(value);
		if(validate) {
			try {
				var name, res;
				for(var i = 0; i < validate.length; i++) {
					if($.isArray(validate[i][0])) {
						name = validate[i][0][0];
						res = check(value, validate[i][0][1]);
					} else {
						name = validate[i][0];
						res = check(value);
					}
					res[name].apply(res, validate[i][1]);
				}
			} catch(e) {
				return e.message;
			}
		}
	} else {
		return "";
	}
}

$(function() {
	$(".column").sortable({
		connectWith: ".column"
	});
	
	$(".portlet").addClass("ui-widget ui-corner-all")
		.find(".portlet-header")
		.addClass("ui-widget-header ui-corner-top")
		.prepend("<span class='ui-icon ui-icon-minusthick'></span>")
		.end()
		.find(".portlet-content")
		.addClass("ui-widget-content ui-corner-bottom");
	
	$(".portlet-header .ui-icon").click(function() {
		$(this).toggleClass("ui-icon-minusthick").toggleClass("ui-icon-plusthick");
		$(this).parents(".portlet:first").find(".portlet-content").toggle();
	});
	
	$(".column").disableSelection();
});

generateViewModel({
	fields: {
		"username": {
			clean: [
				["trim"]
			],
			validate: [
				["notEmpty"],
				["len", [3, 10]]
			]
		},
		"password": {
			validate: [
				["notEmpty"],
				["len", [6, 20]],
				[["is", "Your password must contain one character and number"], [/^(?=.*\d)(?=.*[a-zA-Z]).{6,20}$/]]
			]
		},
		"remember": {
			value: false
		}
	},
	login: function() {
		// alert(this.username() + this.password() + this.remember());
	}
});