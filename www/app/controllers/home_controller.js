kibanaApp.controller('homeController',['$scope','$http','$location','$rootScope',
    function ($scope,$http,$location,$rootScope) {

        $rootScope.loading=false;
// Enabling the ng-class
$scope.isActive = function (currentUrl) {
    return currentUrl === $location.path();
};

    $(document).ready(function() {
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