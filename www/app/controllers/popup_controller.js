kibanaApp.controller('popupController',['$scope','$http','$location','$rootScope','$interval','$state',
    function ($scope,$http,$location,$rootScope,$interval,$state) {
    $(window).ready(
        function () {
            // document.getElementById('#myModal').style.display='block';
           $('#myModal').modal({backdrop:'static',keyboard:false},'show');
            // $('#myModal').modal('show');

// $http({
//             url:'/popupCheck',
//             method:'post'
//         }).then(function success (res) {
//              // $('#myModal').modal({backdrop:'static',keyboard:false},'show');
//             console.log(res,"res")
//             $("#myModal").modal('hide')
//         },function error (error) {
//               $state.go('popup')
//             $('#myModal').modal({backdrop:'static',keyboard:false},'show');
//             console.log("error", error)

//         })

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
        $http({
            url:'/accept',
            method:'post'
        })
            $state.go('home.everyWeb')
            // $location.path('/everyWeb')
        }
    }
    ]
);