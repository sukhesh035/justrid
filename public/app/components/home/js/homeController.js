define(["app",
	"services/utilService",
	"directives/alertDirectives"
], function (app) {
	app.controller("homeController", ["$scope", "$translate", "$rootScope", "utilService", "$timeout", "$http", function ($scope, $translate, $rootScope, utilService, $timeout, $http) {
		$scope.showAlert = false;
		$scope.page = {
			heading: "Welcome"
		};

		$timeout(function () {
			$scope.showAlert = true;
		}, 3000);

		$http.get('http://ipinfo.io/json').
		then(function (data) {
			console.log(data);
			$scope.location = data;
			$scope.country = 'fr';
			if (data.country != 'FR') $scope.country = "en";
		});

		$scope.adList = [
			{
				face : "https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg"
			},{
				face : "https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg"
			},
			{
				face : "https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg"
			},
			{
				face : "https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg"
			},
			{
				face : "https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg"
			},
			{
				face : "https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg"
			},

			{
				face : "https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg"
			},
			{
				face : "https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg"
			},
			{
				face : "https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg"
			},

			{
				face : "https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg"
			},
			{
				face : "https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg"
			},
			{
				face : "https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg"
			}

		]
	}]);
});