kibanaApp.controller('popupController',['$scope','$http','$location','$rootScope','$interval','$state',
    function ($scope,$http,$location,$rootScope,$interval,$state) {
    //     setTimeout(function () {
    //
    // },100)
        $('#myModal').modal({backdrop:'static',keyboard:false},'hide');

    $(window).ready(
        function () {

$http({
            url:'/popupCheck',
            method:'post'
        }).then(function success (res) {
             // $('#myModal').modal({backdrop:'static',keyboard:false},'show');
            console.log(res,"res")
    if (res.data === "File not Exists"){
        $state.go('home.popup')
        $("#myModal").modal('show')
    }
    else {
        $("#myModal").modal('hide')

        $state.go('home.everyWeb')
        //  $state.go($rootScope.location)

    }

        })

        }
        
    )

        $scope.declineTheUser =function () {
        $http({
            url:'/decline',
            method:'post'
        }).then(function success (res) {
            console.log(res,"res")
            $("#myModal").modal('hide')
        },function error (error) {
            console.log("error", error)

        })

        };
        $rootScope.location;
        console.log($rootScope.location,"$rootScope.location")

        $rootScope.alert= function () {
            // $rootScope.$apply()
            return $rootScope.location

        }
        console.log($rootScope.location,"$rootScope.location")


        $scope.acceptTheUser =function () {
        // $("#myModal").modal('hide')
        $http({
            url:'/accept',
            method:'post'
        }).then(function success (res) {
            console.log(res,"res")
            $("#myModal").modal('hide')
            $state.go($rootScope.alert())
            // console.log($rootScope.alert(),"$rootScope.location")
        },function error (error) {
            console.log("error", error)

        })
            // $state.go('home.everyWeb')
            // $location.path('/everyWeb')
        }
    }
    ]
);