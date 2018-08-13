define(["app",
	// 'directives/alertDirectives',
	"services/utilService",
	"components/media/js/mediaService",
], function (app) {
	app.controller("mediaManagerController", ["$scope", "mediaService", "utilService", function ($scope, mediaService, utilService) {

		$scope.mediaObj = {};
		$scope.queryParams = {
			pagesize: 10
		};
		$scope.paginationCtrl = {
			maxSize: 5
		};

		$scope.openMediaItem = function (item) {
			$scope.currentSlectedMedia = item;

			$(".mediaItemModal").modal("show");
		};

		$scope.addMediaModal = function () {
			$scope.mediaObj = {};
			$(".mediaCreateModal").modal("show");
		};

		$scope.saveMedia = function () {
			$(".mediaCreateModal").modal("hide");
		};

		$scope.editMedia = function (ev,item) {
			ev.stopPropagation();
			$scope.mediaObj = item;
			$(".mediaCreateModal").modal("show");
		};

		$scope.mediaTypeList = [{
			name: "text/text",
			value: "text/text"
		}, {
			name: "video/mov",
			value: "video/mov"
		},
		{
			name: "image/png",
			value: "image/png"
		},
		{
			name: "image/svg",
			value: "image/svg"
		},
		{
			name: "video/mp4",
			value: "video/mp4"
		},
		{
			name: "video/mpg",
			value: "video/mpg"
		},
		{
			name: "audio/wav",
			value: "audio/wav"
		}, {
			name: "html/archive",
			value: "html/archive"
		}
		];

		$scope.mediaSubTypeList = [{
			name: "Cashier Background",
			value: "Cashier Background"
		}, {
			name: "Background",
			value: "Background"
		}, {
			name: "Image",
			value: "Image"
		}, {
			name: "Cashier Image",
			value: "Cashier Image"
		}, {
			name: "Video",
			value: "Video"
		}, {
			name: "HTML 5",
			value: "HTML 5"
		}];

		$scope.getMediaTypeImage = function (param) {
			switch (param) {
			case "text/text":
				return "assets/imgs/textText.ico";
			case "video/mov":
				return "assets/imgs/videoMov.png";
			case "image/png":
				return "assets/imgs/imagePng.png";
			case "image/svg":
				return "assets/imgs/imageSvg.png";
			case "video/mp4":
				return "assets/imgs/videoMp4.png";
			case "video/mpg":
				return "assets/imgs/videoMpg.png";
			case "audio/wav":
				return "assets/imgs/audioWav.png";
			case "html5/archive":
				return "assets/imgs/htmlArchive.png";

			}

		};

		$scope.getMediaList = function () {
			$scope.isLoaded = false;
			mediaService.getMediaList($scope.queryParams).then(function (response) {
				console.log(response);
				$scope.existingMediaList = response;
				$scope.isLoaded = true;
			}, function (err) {
				$scope.isLoaded = true;
				console.log(err);
			});
		};

		$scope.getMediaList();
		$scope.scrollToTop = function () {
			utilService.scrollToTop();
		};

	}]);
});