define(["app",
	"services/accountService",
	"directives/alertDirectives"
], function (app) {
	app.controller("loginController", ["$scope", "$translate", "$rootScope", "$timeout", "$state", "$http", "accountService", function ($scope, $translate, $rootScope, $timeout, $state, $http, accountService) {

		$rootScope.loggedInStatus = false;
		$scope.isLoaded = true;
		$scope.alertObj = {};
		$scope.constructAlert = function (flag, type, msg) {
			$scope.alertObj.showAlert = flag;
			$scope.alertObj.alertType = type;
			$scope.alertObj.alertMessage = msg;
		};
		$scope.submit = function () {
			$scope.isLoaded = false;
			$scope.showAlert = false;
			accountService.login($scope.loginModel).then(function (response) {
				console.log(response);
				$scope.isLoaded = true;
				//$scope.loadingBarOff();
				if (response) {
					$state.go("home");
				} else {
					$scope.constructAlert(true, "danger", "Did'nt work, try again");
				}
			}, function (err) {
				$scope.isLoaded = true;
				$scope.constructAlert(true, "danger", "Did'nt work, try again");
				// $scope.showAlert = true;
				// $scope.alertType = "danger";
				// $scope.alertMessage = "Internal Server Error";
				//$scope.loadingBarOff();
				console.log(err);
			});
		};

	}]);
});