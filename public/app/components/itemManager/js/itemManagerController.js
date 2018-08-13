define(["app",
	"directives/alertDirectives",
	"components/itemManager/js/itemManagerService"
], function (app) {
	app.controller("itemManagerController", ["$scope",  function ($scope) {
		$scope.isLoaded = true;
		$scope.availableItems = [
			{
				name:"This is name",
				plu: "987654567",
				category :"lottery",
				subcategory : "beer",
				brancdFamily: "guinnius",
				size: "3"
			},{
				name:"This is name",
				plu: "987654567",
				category :"lottery",
				subcategory : "beer",
				brancdFamily: "guinnius",
				size: "3"
			},
			{
				name:"This is name",
				plu: "987654567",
				category :"lottery",
				subcategory : "beer",
				brancdFamily: "guinnius",
				size: "3"
			},{
				name:"This is name",
				plu: "987654567",
				category :"lottery",
				subcategory : "beer",
				brancdFamily: "guinnius",
				size: "3"
			},
			{
				name:"This is name",
				plu: "987654567",
				category :"lottery",
				subcategory : "beer",
				brancdFamily: "guinnius",
				size: "3"
			},
			{
				name:"This is name",
				plu: "987654567",
				category :"lottery",
				subcategory : "beer",
				brancdFamily: "guinnius",
				size: "3"
			},

			{
				name:"This is name",
				plu: "987654567",
				category :"lottery",
				subcategory : "beer",
				brancdFamily: "guinnius",
				size: "3"
			},
			{
				name:"This is name",
				plu: "987654567",
				category :"lottery",
				subcategory : "beer",
				brancdFamily: "guinnius",
				size: "3"
			},
			{
				name:"This is name",
				plu: "987654567",
				category :"lottery",
				subcategory : "beer",
				brancdFamily: "guinnius",
				size: "3"
			}
		];

	}]);
});
