define(["services/dependencyResolverFor", "services/accountService"], function (dependencyResolverFor) {
	var loadController = function (controllerName) {
		return ["$q", function ($q) {
			var deferred = $q.defer();
			require([controllerName], function () { deferred.resolve(); });
			return deferred.promise;
		}];
	};

	return {
		defaultRoutePath: "/home",
		states: [
			{
				name: "login",
				data: {
					url: "/login",
					views: {
						"": {
							templateUrl: "app/components/login/html/login.html",
							controller: "loginController"
						},
					},
					resolve: {
						loginController: loadController("components/login/js/login"),
					}
				}
			},
			{
				name: "home",
				data: {
					url: "/home",
					views: {
						"": {
							templateUrl: "app/components/home/html/home.html",
							controller: "homeController"
						},
					},
					resolve: {
						homeController: loadController("components/home/js/homeController"),

					}
				}
			},
			{
				name: "adManager",
				data: {
					url: "/adManager",
					views: {
						"": {
							templateUrl: "app/components/adManager/html/adHome.html",
							controller: "adManagerController"
						},
						"adManager@list": (
							{
								templateUrl: "app/components/adManager/html/adListPage.html",
							}
						)
					},
					resolve: {
						adManagerController: loadController("components/adManager/js/adManagerController"),
					},
				}
			},
			{
				name: "adManager.list",
				data: {
					url: "/adList",
					views: {
						"": {
							templateUrl: "app/components/adManager/html/adListPage.html",
							controller: "adManagerController"
						},
					},
					resolve: {
						alertDirectives: loadController("directives/alertDirectives"),
						adManagerController: loadController("components/adManager/js/adManagerController"),
                        
					},
				}
			},
			{
				name: "adManager.create",
				data: {
					url: "/adCreatelist",
					views: {
						"": {
							templateUrl: "app/components/adManager/html/adCreate.html",
							controller: "adManagerController"
						},
					},
					resolve: {
						adManagerController: loadController("components/adManager/js/adEditManager"),

					},
				}
			},
			{
				name: "adManager.edit",
				data: {
					url: "/adEditSingle/:id",
					views: {
						"": {
							templateUrl: "app/components/adManager/html/adCreate.html",
							controller: "adManagerController"
						},
					},
					resolve: {
						adManagerController: loadController("components/adManager/js/adEditManager"),

					},
				}
			},
			{
				name: "itemCatalog",
				data: {
					url: "/itemCatalog",
					views: {
						"": {
							templateUrl: "app/components/itemManager/html/itemManager.html",
							controller: "itemManagerController"
						},
					},
					resolve: {
						adManagerController: loadController("components/itemManager/js/itemManagerController"),
					},
				}
			},
			{
				name: "itemCreate",
				data: {
					url: "/itemCreate",
					views: {
						"": {
							templateUrl: "app/components/itemManager/html/itemCreate.html",
							controller: "itemManagerController"
						},
					},
					resolve: {
						adManagerController: loadController("components/itemManager/js/itemManagerController"),
					},
				}
			},
			{
				name: "mediaCatelog",
				data: {
					url: "/mediaManager",
					views: {
						"": {
							templateUrl: "app/components/media/html/mediaHome.html",
							controller: "mediaManagerController"
						}
					},
					resolve: {
						mediaManagerController: loadController("components/media/js/mediaController"),
					},
				}
			},
			{
				name: "mediaCatelog.list",
				data: {
					url: "/mediaList",
					views: {
						"": {
							templateUrl: "app/components/media/html/mediaList.html",
							controller: "mediaManagerController"
						},
					},
					resolve: {
						alertDirectives: loadController("directives/alertDirectives"),
						mediaManagerController: loadController("components/media/js/mediaController"),
                        
					},
				}
			},
			{
				name: "uploadPricebook",
				data: {
					url: "/uploadPricebook",
					views: {
						"": {
							templateUrl: "app/components/priceBook/html/uploadPriceBoon.html",
							controller: "priceBookController"
						}
					},
					resolve: {
						priceBookController: loadController("components/priceBook/js/priceBookController"),
					},
				}
			},

		]
	};
});