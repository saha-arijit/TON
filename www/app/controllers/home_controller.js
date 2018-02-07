kibanaApp.controller('homeController',['$scope','$http','$state','$location','$rootScope',
    function ($scope,$http,$state,$location,$rootScope) {

    $scope.firstInputBox = "bubble works !!!!!!!!!! Right????????????-";
        $rootScope.loading=false
// Enabling the ng-class
$scope.isActive = function (currentUrl) {
    return currentUrl === $location.path();
};

    $(document).ready(function() {
        // Adding Href Attribute
        $('#apiTestingMode').on('click', function () {
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