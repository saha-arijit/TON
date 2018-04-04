kibanaApp.controller('popupController',['$scope','$http','$location','$rootScope','$interval','$state',
    function ($scope,$http,$location,$rootScope,$interval,$state) {
    $(window).ready(
        function () {
            // document.getElementById('#myModal').style.display='block';
            $('#myModal').modal({backdrop:'static',keyboard:false},'show');
            // $('#myModal').modal('show');


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

        }
        $scope.acceptTheUser =function () {
        $("#myModal").modal('hide')
            $state.go('home.everyWeb')
            // $location.path('/everyWeb')
        }
    }
    ]
);