define(["app"], function (app) {
	app.factory("utilService", function () {

		// var shinyNewServiceInstance = "test";
		// factory function body that constructs shinyNewServiceInstance
		return {
			scrollToTop: function(){
				$("html,body").animate({scrollTop: "0px"}, "slow");
			}
		}; 

	});
});