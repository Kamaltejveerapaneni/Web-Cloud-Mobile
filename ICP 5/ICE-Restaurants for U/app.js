// Declare app level module which depends on views, and components
angular.module('myApp', [])

    .controller('View1Ctrl', function ($scope, $http) {
        $scope.venueList = new Array();
        $scope.venueid=null;
        $scope.mostRecentReview;
        $scope.data=null;
        $scope.getVenues = function () {
            var placeEntered = document.getElementById("txt_placeName").value;
            var searchQuery = document.getElementById("txt_searchFilter").value;
            if (placeEntered != null && placeEntered != "" && searchQuery != null && searchQuery != "") {

                //This is the API that gives the list of venues based on the place and search query.
                var handler = $http.get("https://api.foursquare.com/v2/venues/search" +
                    "?client_id=HSJO5QMPI2LEUJNNUS5WNOJB11305WJOTONLMOKZFMJFJGPJ" +
                    "&client_secret=OZUB31SAGD0FOUVU1YHNQNOJOU5NR04DIBEYOA2PAHGWFISQ" +
                    "&v=20160215&limit=5" +
                    "&near=" + placeEntered +
                    "&query=" + searchQuery);
                handler.success(function (data) {
                    if (data != null && data.response != null && data.response.venues != undefined && data.response.venues != null) {
                        $scope.data=(data.response.venues);
                        $scope.venueid = $scope.data.id;

                        //console.log(data.response.venues[0].id);
                        //console.log($scope.data[0].id);

                        //var temp = $scope.data[0].id;
                        //console.log(temp);
                        //for (var i=0;i<$scope.data.length;i++) {

                        var handler2 = $http.get ("https://api.foursquare.com/v2/venues/"+$scope.data[0].id+"/tips" +
                            "?client_id=HSJO5QMPI2LEUJNNUS5WNOJB11305WJOTONLMOKZFMJFJGPJ" +
                            "&client_secret=OZUB31SAGD0FOUVU1YHNQNOJOU5NR04DIBEYOA2PAHGWFISQ" +
                            "&v=20160215"
                        );

                        handler2.success(function (data2) {
                            if (data2 != null && data2.response != null && data2.response.tips != undefined && data2.response.tips != null) {
                                $scope.data2=(data2.response.tips);
                                $scope.data[0]["review"] = $scope.data2.items[0].text;
                                //$scope.data.push($scope.data2.items[0].text);
                                console.log($scope.data);
                            }
                        })

                        var handler2 = $http.get ("https://api.foursquare.com/v2/venues/"+$scope.data[1].id+"/tips" +
                            "?client_id=5DHND4BAC353XFUM0TFBBF1JQRET3L4G3BEZMFQKX4TMKQH1" +
                            "&client_secret=4WLZKTNJRV0VBG0QU1FPL4J0ZTGXZZ0NY4Z5L2CTDEDJZIQF" +
                            "&v=20160215"
                        );

                        handler2.success(function (data2) {
                            if (data2 != null && data2.response != null && data2.response.tips != undefined && data2.response.tips != null) {
                                $scope.data2=(data2.response.tips);
                                $scope.data[1]["review"] = $scope.data2.items[0].text;
                                //$scope.data.push($scope.data2.items[0].text);
                                console.log($scope.data);
                            }
                        })


                        var handler2 = $http.get ("https://api.foursquare.com/v2/venues/"+$scope.data[2].id+"/tips" +
                            "?client_id=5DHND4BAC353XFUM0TFBBF1JQRET3L4G3BEZMFQKX4TMKQH1" +
                            "&client_secret=4WLZKTNJRV0VBG0QU1FPL4J0ZTGXZZ0NY4Z5L2CTDEDJZIQF" +
                            "&v=20160215"
                        );

                        handler2.success(function (data2) {
                            if (data2 != null && data2.response != null && data2.response.tips != undefined && data2.response.tips != null) {
                                $scope.data2=(data2.response.tips);
                                $scope.data[2]["review"] = $scope.data2.items[0].text;
                                //$scope.data.push($scope.data2.items[0].text);
                                console.log($scope.data);
                            }
                        })

                        var handler2 = $http.get ("https://api.foursquare.com/v2/venues/"+$scope.data[3].id+"/tips" +
                            "?client_id=5DHND4BAC353XFUM0TFBBF1JQRET3L4G3BEZMFQKX4TMKQH1" +
                            "&client_secret=4WLZKTNJRV0VBG0QU1FPL4J0ZTGXZZ0NY4Z5L2CTDEDJZIQF" +
                            "&v=20160215"
                        );

                        handler2.success(function (data2) {
                            if (data2 != null && data2.response != null && data2.response.tips != undefined && data2.response.tips != null) {
                                $scope.data2=(data2.response.tips);
                                $scope.data[3]["review"] = $scope.data2.items[0].text;
                                //$scope.data.push($scope.data2.items[0].text);
                                console.log($scope.data);
                            }
                        })

                        var handler2 = $http.get ("https://api.foursquare.com/v2/venues/"+$scope.data[4].id+"/tips" +
                            "?client_id=5DHND4BAC353XFUM0TFBBF1JQRET3L4G3BEZMFQKX4TMKQH1" +
                            "&client_secret=4WLZKTNJRV0VBG0QU1FPL4J0ZTGXZZ0NY4Z5L2CTDEDJZIQF" +
                            "&v=20160215"
                        );

                        handler2.success(function (data2) {
                            if (data2 != null && data2.response != null && data2.response.tips != undefined && data2.response.tips != null) {
                                $scope.data2=(data2.response.tips);
                                $scope.data[4]["review"] = $scope.data2.items[0].text;
                                //$scope.data.push($scope.data2.items[0].text);
                                console.log($scope.data);
                            }
                        })

                    }
                })



                handler.error(function (data) {
                    alert("There was some error processing your request. Please try after some time.");
                });
            }
        }
    });
