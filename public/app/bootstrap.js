require.config({
	paths: {
		"angular": "../libs/angular-1.6.10/angular.min",
		"angular-ui-router": "../libs/angular-1.6.10/angular-ui-router.min",
		"uiBootstrap": "../libs/angular-bootstrap/ui-bootstrap-tpls.min",
		"angular-material": "../libs/angular-material/angular-material.min",
		"angular-animate":"../libs/angular-1.6.10/angular-animate.min",
		"angular-aria" : "../libs/angular-1.6.10/angular-aria.min",
		"angular-messages" : "../libs/angular-1.6.10/angular-messages.min",
		"angular-translate" : "../libs/angular-1.6.10/angular-translate.min",
		"jquery" : "../libs/jQuery.min",
		"ng-cookies" : "../libs/angular-1.6.10/angular-cookies.min",
		"boot-strap" : "../assets/bootstrap/js/bootstrap.min",
		"md-time-piker" : "../libs/md-time-picker",
		"ng-weekday-selector" : "../libs/ngWeekdaySelector",
		"md-stepper" : "../libs/md-steppers"
	},
	shim: {
		"app": {
			deps: ["angular","angular-ui-router", "uiBootstrap","angular-material","angular-translate","jquery","ng-cookies","boot-strap", "md-time-piker", "ng-weekday-selector","md-stepper"]
		},
		"angular-ui-router": {
			deps: ["angular"]
		},
		"uiBootstrap": {
			deps: ["angular"]
		},
		"angular-material":{
			deps: ["angular","angular-animate","angular-aria","angular-messages"]
		},
		"angular-animate": {
			deps: ["angular"]
		},
		"angular-aria": {
			deps: ["angular"]
		},
		"angular-messages": {
			deps: ["angular"]
		},
		"angular-translate":  {
			deps: ["angular"]
		},
		"ng-cookies" : {
			deps: ["angular"]
		},
		"boot-strap" : {
			deps: ["angular"]
		},
		"md-time-piker" : {
			deps: ["angular"]
		},
		"ng-weekday-selector" : {
			deps: ["angular"]
		},
		"md-stepper" : {
			deps: ["angular"]
		}
		
	}
});

require
(
	[
		"app"
	],
	function(app)
	{
		angular.bootstrap(document, ["app"]);
	}
);