kibanaApp.controller('homeController',['$scope','$http','$location','$rootScope','$state',
    function ($scope,$http,$location,$rootScope,$state) {
// $rootScope.location = "home.everyWeb"
        $rootScope.loading=false;
        setTimeout(
            function () {
                $rootScope.location = "home.everyWeb"
                console.log( $rootScope.location,"setTimoout home")

            },500
        )
// Enabling the ng-class
        $scope.isActive = function (currentUrl) {
            return currentUrl === $location.path();
        };
         $scope.webLocation = function(){
             return $rootScope.location = "home.everyWeb"

        }
        $scope.apiLocation = function(){
          return  $rootScope.location = "home.everyAPI"
            // console.log( $rootScope.location," $rootScope.location")

        } 
        $scope.mobileLocation = function(){
            return $rootScope.location = "home.everyMobile"
        }
        $scope.desktopLocation = function(){
            return $rootScope.location = "home.everyDesktop"
        }
        setTimeout(function () {
            $scope.$apply(
                $rootScope.interval=false
            )

        },120000);

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
            if( x == "/home/everyDesktop"){
                var href = '/assets/UserManual-EveryDesktop.pdf';
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