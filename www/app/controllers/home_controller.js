kibanaApp.controller('homeController',['$scope','$http',function ($scope,$http) {

    $scope.firstInputBox = "bubble works !!!!!!!!!! Right????????????-";



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


    // Upload.upload({
    //     url: 'my/upload/url',
    //     data: inputFile,
    //     file: files
    // }).then(success, error, progress);

}]);
// .$setViewValue(foo, scope.$parent);