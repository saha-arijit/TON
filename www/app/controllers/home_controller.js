kibanaApp.controller('homeController',['$scope','$http','$location','$rootScope','$timeout','$interval',
    function ($scope,$http,$location,$rootScope,$timeout,$interval) {

        $rootScope.loading=false;
        // $rootScope.interval=false;



// Enabling the ng-class
$scope.isActive = function (currentUrl) {
    return currentUrl === $location.path();
};

    $(document).ready(function() {
        reload()
        $(document).click(function () {
reload()

        })
function reload() {
    if ($location.path()==='/home/visualization'){
        // delay();
        $timeout(
            function hello(){
                $rootScope.interval=false;
                console.log("rootscope:true in home timout")},120000);

    }
    else{

    }

}

        // Adding Href Attribute
        $('#apiTestingModel').on('click', function () {
            $scope.ngModel1 = "";
            var href = '/assets/UserManual-EveryAPI.pdf';
            $('#userManual').attr('href', href)
            // alert(href)
            // For Web Testing
        }) ;$('#webTestingModel').on('click', function () {
            $scope.ngModel1 = "";
            var href="/assets/UserManual-EveryWeb.pdf";
            $('#userManual').attr('href', href)
        })

        // For Mobile Testing
        $('#mobileTestingModel').on('click', function () {
            $scope.ngModel1 = "";
            var href="/assets/UserManual-EveryMobile.pdf";
            $('#userManual').attr('href', href)
        })

    })



}]);