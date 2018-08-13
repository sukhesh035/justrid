define(["app",
	"services/utilService",
	"directives/alertDirectives"
], function (app) {
	app.controller("homeController", ["$scope", "$translate", "$rootScope", "utilService", "$timeout", function ($scope, $translate, $rootScope, utilService, $timeout) {
		$scope.showAlert = false;
		$scope.page =
            {
            	heading: "Welcome"
            };

		$timeout(function () {
			$scope.showAlert = true;
		}, 3000);
	}]);
});