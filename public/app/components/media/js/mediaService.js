define(["app"], function (app) {
	app.factory("mediaService", function ($http) {
		return {
			getMediaList: function (query) {
				return $http({
					url: "/api/service/media/getmedia",
					method: "GET",
					params: {
						"name": query.name,
						// "slot": query.slot,
						// "sortby": query.sortby,
						"pagenum": query.pagenum,
						"pagesize": query.pagesize,
						"orgcode": query.orgcode
					}
				}).then(function (response) {
					return response.data;
				});
			}
		};
	});
});
