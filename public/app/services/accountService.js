//login code here
// define(['app'], function (app) {

var loginApp = angular.module("loginApp", ["ui.router"]);
loginApp.factory("accountService", ["$q", "$http", "$rootScope","$state", function ($q, $http, $rootScope, $state) {

	return {
		login: function (credentials) {

			return $http({
				method: "POST",
				url: "/api/service/login",
				data: $.param(
					{
						username: credentials.username,
						password: credentials.password,
						submit: "Login",
					}
				),
				headers: { "Content-Type": "application/x-www-form-urlencoded" }
			}).then(function (response) {
				console.log(response.data.content);
				if (response.status === 200 && response.data.content) {
					return response.data;
				} else {
					console.log(response.data);
				}
			});
		},
		logout: function () {
			return $http.get("/api/service/logout").then(function(response){
				return response.data;
			});
		},
		validateSesstion: function () {
			return $http.get("/api/service/user").then(function (response) {
				if (response.status === 200 && response.data.content) {
					$rootScope.loggedInStatus = true;
					if($state.$current.name === "login"){
						$state.go("home");
					}
					return true;
				} else {
					return false;
					$rootScope.loggedInStatus = false;
				}
			}, function (err) {
				return false;
				$rootScope.loggedInStatus = false;
			});

		}

	};

}]);
// });