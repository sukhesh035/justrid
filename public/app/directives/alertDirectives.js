define(["app"], function (app) {
	app.directive("alertDirective", function () {
		return {
			scope: {
				alertObj: "=",
				// showAlert: "=",
				// alertMessage: "=",
				// alertType: "="
			},
			link: function (scope, element, attrs) {
				scope.closeAlert = function () {
					scope.alertObj.showAlert = false;
				};
			},
			templateUrl: "app/templates/alertTemplate.html"
		};

	});
	app.directive("appLoader", function () {
		return {
			scope: {
				isLoaded: "=",
				// loadingBarOff: "="
			},
			templateUrl: "app/templates/appLoader.html",
			link: function (scope, element, attrs) {
				var $modal = $(".js-loading-bar"),
					$bar = $modal.find(".progress-bar");

				scope.$watch("isLoaded", function () {
					if (scope.isLoaded) {
						$bar.removeClass("animate");
						$modal.modal("hide");
						this.$(".js-loading-bar").modal({
							backdrop: false,
							show: false
						});
						$(".modal-backdrop").css("display", "none");
					} else {
						$modal.modal("show");
						$bar.addClass("animate");
						this.$(".js-loading-bar").modal({
							backdrop: true,
							show: false
						});
					}
				});
			},
		};

	});
	app.directive("refreshSpinner", function () {
		return {
			scope: {
				clickSpinner: "="
			},
			templateUrl: "app/templates/refreshSpinner.html",
		};

	});

	app.directive("forceSelect", function ($mdUtil) {
		function postLink(scope, element, attrs, autoComplete) {
			let isSelected = (item) => {
				return autoComplete.matches.indexOf(item) !== -1;
			};

			$mdUtil.nextTick(() => {
				let ngModel = element.find('input').controller('ngModel');

				autoComplete.registerSelectedItemWatcher((selectedItem) => {
					ngModel.$setValidity('forceSelect', isSelected(selectedItem));
				});

				ngModel.$viewChangeListeners.push(() => {
					$mdUtil.nextTick(() => {
						ngModel.$setValidity('forceSelect', isSelected(autoComplete.scope.selectedItem));
					});
				});
			});
		}

		return {
			link: postLink,
			require: 'mdAutocomplete',
			restrict: 'A'
		};
	});

	app.directive('ngFiles', ['$parse', function ($parse) {

		function fn_link(scope, element, attrs) {
			var onChange = $parse(attrs.ngFiles);
			element.on('change', function (event) {
				onChange(scope, {
					$files: event.target.files
				});
			});
		};

		return {
			link: fn_link
		};
	}]);
});