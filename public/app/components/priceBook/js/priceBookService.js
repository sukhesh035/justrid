define(["app"], function (app) {
    app.factory("priceBookService", function ($http) {
        return {
            postPriceBookXml: function (file) {
                return $http({
                    method: 'POST',
                    url: 'http://example.com',
                    headers: {
                        'Content-Type': 'application/xml'
                    },
                    data: file
                }).then(function(response){
                    return response.data;
                });
            }
        };
    });
});