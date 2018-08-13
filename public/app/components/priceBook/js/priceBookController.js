define(["app",
    "directives/alertDirectives",
    "components/priceBook/js/priceBookService",
    "components/adManager/js/adManagerService"
], function (app) {
    app.controller("priceBookController", ["$scope", "priceBookService","adManagerService", function ($scope, priceBookService, adManagerService) {
        $scope.isLoaded = true;
        $scope.data = "";

        $scope.showUploadPriceBook = function () {
            $(".priceBookUploadClass").modal("show");
        }

        $scope.xmlList = [
            {
                name: "test",
                date: "test",
                status: "test"
            },
            {
                name: "test",
                date: "test",
                status: "test"
            },
            {
                name: "test",
                date: "test",
                status: "test"
            },
            {
                name: "test",
                date: "test",
                status: "test"
            },
            {
                name: "test",
                date: "test",
                status: "test"
            },
            {
                name: "test",
                date: "test",
                status: "test"
            },
            {
                name: "test",
                date: "test",
                status: "test"
            }
        ];

        $scope.getOrgsList = function () {
            adManagerService.getListOfOrgs().then(function (response) {
                $scope.existingOrgsList = response;
            });
        };

        $scope.getOrgsList();

        $scope.uploadXml = function () {
            // console.log();
            // console.log($scope.uploadedFile);
            $scope.isLoaded = false;
            var f = document.getElementById('xmlFile').files[0],
                r = new FileReader();
            r.onloadend = function (e) {
                $scope.data = e.target.result;
                //alert($scope.data);
                console.log(JSON.stringify($scope.data));
                $scope.isLoaded = true;
                var ks = (JSON.stringify($scope.data)).split("\n");
                // $.each(ks, function (k) {
                //     console.log(k);
                // });
            };
            r.readAsBinaryString(f);
        }

        $scope.submitXml = function () {
            priceBookService.postPriceBookXml().then(function (res) {
                console.log(res);
            }, function (err) {
                console.log(err);
            });
        }

    }]);
});
