define(["routes", "uiBootstrap", "angular-ui-router"], function (config) {
	var app = angular.module("app", ["ui.bootstrap", "ui.router", "ngMaterial", "ngMessages", "pascalprecht.translate", "loginApp", "ngCookies", "md.time.picker", "ng-weekday-selector","mdSteppers"]);

	app.config(
		[
			"$locationProvider",
			"$controllerProvider",
			"$compileProvider",
			"$filterProvider",
			"$provide",
			"$stateProvider",
			"$urlRouterProvider",
			"$injector",

			function ($locationProvider, $controllerProvider, $compileProvider, $filterProvider, $provide, $stateProvider, $urlRouterProvider, $injector) {
				app.controller = $controllerProvider.register;
				app.directive = $compileProvider.directive;
				app.filter = $filterProvider.register;
				app.factory = $provide.factory;
				app.service = $provide.service;
				$locationProvider.hashPrefix("");

				if (config.states !== undefined) {
					angular.forEach(config.states, function (states, path) {
						$stateProvider.state(states.name, states.data);
					});
				}

				if (config.defaultRoutePath !== undefined) {
					$urlRouterProvider.otherwise(config.defaultRoutePath);
				}
			}
		]);

	app.run(["$rootScope", "$state", "$transitions", "accountService", function ($rootScope, $state, $transitions, accountService) {
		$transitions.onStart({}, function (event) {
			// accountService.validateSesstion().then(function (res){
			// 	if(!res){
			// 		$rootScope.loggedInStatus = false;
			// 		$state.go("login");
			// 	}
			// }); 
		});
	}]);

	app.factory("asyncLoader", asyncLoader);
	app.config(configLanguage);

	//@config
	configLanguage.$inject = ["$translateProvider"];
	function configLanguage($translateProvider) {

		$translateProvider.useLoader("asyncLoader");

		var langMap = {
			"en_AU": "en",
			"en_CA": "en",
			"en_NZ": "en",
			"en_PH": "en",
			"en_UK": "en",
			"en_US": "en",
			"ja_JP": "ja"
		};

		$translateProvider
			.registerAvailableLanguageKeys(["en", "sp"], langMap)
			.determinePreferredLanguage("en");

	}

	// @factory
	asyncLoader.$inject = ["$q", "$timeout", "$http"];
	function asyncLoader($q, $timeout, $http) {

		return function (options) {
			var deferred = $q.defer(), translations;

			var resturl = "./app/language-config/lang-" + options.key + ".json";
			$http.get(
				resturl).then(function (translations) {
				deferred.resolve(translations.data);
			}, function (translations) {
				deferred.reject(translations.data);
			});

			$timeout(function () {
				if (translations)
					deferred.resolve(translations.data);
			}, 2000);

			return deferred.promise;
		};

	}

	app.controller("headerController", ["$scope", "$translate", "$rootScope", "accountService","$state", function ($scope, $translate, $rootScope, accountService, $state) {

		$scope.selectedLanguage = "en";

		$translate.use($scope.selectedLanguage);

		$scope.changelanguage = function (lang) {
			$translate.use(lang);
		};

		$scope.languageData = [
			{
				name: "English",
				code: "en"
			},
			{
				name: "Spanish",
				code: "sp"
			}
		];

		$rootScope.breadcrumData = [
			{
				label: "Home",
				link: "#"
			}
		];

		// $scope.logout = function (){
		// 	//$scope.loadingBarOn();
		// 	accountService.logout().then(function(response){
		// 		$rootScope.loggedInStatus = false;
		// 		//$scope.loadingBarOff();
		// 		$state.go("login");
		// 	});
		// };

	}]);

	return app;
});