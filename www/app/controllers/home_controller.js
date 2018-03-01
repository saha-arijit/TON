kibanaApp.controller('homeController',['$scope','$http','$location','$rootScope','$window',
    function ($scope,$http,$location,$rootScope,$window) {

        $rootScope.loading=false;
// Enabling the ng-class
        $scope.isActive = function (currentUrl) {
            return currentUrl === $location.path();
        };

        $scope.openUserManual = function () {
            var x= $location.path();
            // alert(x)
            if( x == "/home/everyWeb"){
                var href="/assets/UserManual-EveryWeb.pdf";
                $('#userManual').attr('href', href)

            }

            if( x == "/home/everyMobile"){
                var href="/assets/UserManual-EveryMobile-Android.pdf";
                $('#userManual').attr('href', href)
            }
            // else {
            //     var href = ""
            // }
            if( x == "/home/everyAPI"){
                var href = '/assets/UserManual-EveryAPI.pdf';
                $('#userManual').attr('href', href)
            }


        }
        $(document).ready(function() {


            // Adding Href Attribute
            $('#apiTestingModel').on('click', function () {
                $scope.ngModel1 = "";

                // For Web Testing
            }) ;$('#webTestingModel').on('click', function () {
                $scope.ngModel1 = "";

            })

            // For Mobile Testing
            $('#mobileTestingModel').on('click', function () {
                $scope.ngModel1 = "";

            })

        })



    }]);