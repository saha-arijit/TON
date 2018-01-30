kibanaApp.controller('homeController',['$scope','$http','$state','$location',function ($scope,$http,$state,$location) {

    $scope.firstInputBox = "bubble works !!!!!!!!!! Right????????????-";

// Enabling the ng-class
$scope.isActive = function (currentUrl) {
    return currentUrl === $location.path();
};
// disabling validate case button
    $scope.input = true;

// Enabling the validate case button after picking a file
    $scope.fileSelected = function () {
        $scope.input = false;


    };
    $scope.mouseOver = function () {

        $scope.firstInputBox = "bubble works !!!!!!!!!! Right????????????-";
        var data = $('<p id="bubbleElement"  ng-mouseover="mouseOver()" ng-mouseleave="mouseLeave()"\n' +
            '                               class="speech"\n' +
            '                               style="text-align: center;margin-top: -10%;float: left">bubble works !!!!!!!!!! Right????????????</p>\n');
        $('#bubbleColumn').append(data);
        $scope.x = true;


    };
    $scope.mouseLeave = function () {

        $('#bubbleElement').remove();
        $scope.x = false;
    };

    $scope.RecordTestCase = function () {
        $http({
            method:'post',
              url : '/kantu'
        })

    };

    $scope.validateTestCase =  function () {
            var iFrame = $('<iframe name = "myIFrame" id="iFrame"></iframe>');
            $('body').append(iFrame);
        document.getElementById('inputId').click();
        $('#iFrame').hide();

        setTimeout(function () {

            $('#iFrame').remove();
            // $('#iFrame').detach();

        },3000);

    };

    $scope.startRide = function () {
        $http({
            method:'post',
              url : '/execute'
        })

    };
    $scope.analyze = function () {
        $http({
            method:'post',
            url : '/analyze'
        })

    }
    $scope.$state = $state;
    $(document).ready(function() {
        // Adding Href Attribute
        $('#apiTestingModel').on('click', function () {
            $scope.ngModel1 = "";
            var href = '/assets/pdf2.pdf';
            $('#userManual').attr('href', href)
            // For Web Testing
        }) ;$('#webTestingModel').on('click', function () {
            $scope.ngModel1 = "";
            var href="/assets/pdf.pdf";
            $('#userManual').attr('href', href)
        })

        // For Mobile Testing
        $('#mobileTestingModel').on('click', function () {
            $scope.ngModel1 = "";
            var href="/assets/pdf3.pdf";
            $('#userManual').attr('href', href)
        })

    })

    // $(document).ready(function () {
    //     var url = window.location;
    //     // Will only work if string in href matches with location
    //     $('ul.nav a[href="' + url + '"]').parent().addClass('active');
    //
    //     // Will also work for relative and absolute hrefs
    //     $('ul.nav a').filter(function () {
    //         return this.href == url;
    //     }).parent().addClass('active').parent().parent().addClass('active');
    // });

    // Upload.upload({
    //     url: 'my/upload/url',
    //     data: inputFile,
    //     file: files
    // }).then(success, error, progress);

}]);
// .$setViewValue(foo, scope.$parent);