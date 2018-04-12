kibanaApp.controller('popupController',['$scope','$http','$location','$rootScope','$interval','$state',
    function ($scope,$http,$location,$rootScope,$interval,$state) {
    $(window).ready(
        function () {
            // document.getElementById('#myModal').style.display='block';
           $('#myModal').modal({backdrop:'static',keyboard:false},'show');
            // $('#myModal').modal('show');

$http({
            url:'/popupCheck',
            method:'post'
        }).then(function success (res) {
             // $('#myModal').modal({backdrop:'static',keyboard:false},'show');
            console.log(res,"res")
    if (res.data === "File not Exists"){
        $state.go('popup')
        alert("no File")
        $("#myModal").modal('show')
    }
    else {
        alert("file")
        // $("#myModal").modal('hide')

        $state.go('home.everyWeb')

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

        }
        $scope.acceptTheUser =function () {
        // $("#myModal").modal('hide')
        $http({
            url:'/accept',
            method:'post'
        }).then(function success (res) {
            console.log(res,"res")
            $("#myModal").modal('hide')
            $state.go('home.everyWeb')
        },function error (error) {
            console.log("error", error)

        })
            // $state.go('home.everyWeb')
            // $location.path('/everyWeb')
        }
    }
    ]
);