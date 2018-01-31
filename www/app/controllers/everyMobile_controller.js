/**
 * Created by rabeesh on 22/1/18.
 */
kibanaApp.controller('everyMobileController', ['$scope', '$http', 'Upload','$state','$rootScope',
    function ($scope, $http, Upload,$state,$rootScope) {


    $(document).ready(function(){


        // Removing Classes
        var alterClass = function() {
            // Equalizing the Sidebar and Page Content
            var windowHeight =$(window).height();
            var  navHeight =$('#nav').outerHeight() ;
            // console.log(navHeight,"nav height");
            // alert(z,"nav");
            var contentHeight = windowHeight-navHeight;


            $(".fullheight").height(contentHeight);
            // $("#sidebar").top(navHeight);

            var ww = document.body.clientWidth;
            if (ww < 768) {
                $('#sidebar').removeClass('fullheight');
                $('.content').removeClass('fullheight');
            } else if (ww >= 768) {
                $('.content').addClass('fullheight');
                $('#sidebar').addClass('fullheight');

                $("#sidebar").addClass(navHeight);
            };
        };
        $(window).resize(function(){
            alterClass();
        });

        alterClass();


    });


// Modal Configurations
    // Over ALl Modal Restricting Function

    $('.close').on('click',function () {
        $('input[type=file]').val(null)
    });





    // Over ALl Modal Triggerring Functions

    // For Mobile Testing Part

    $('#mobileExecuteTestCaseTrigger2').on('click', function () {
        $('#mobileExecuteTestCaseModal1').modal('hide');

    }); $('#mobileExecuteTestCaseTrigger3').on('click', function () {
        $('#mobileExecuteTestCaseModal1').modal('hide');

    });


// Button Disabling Functions

    // By Default

    // For Mobile Testing For Prepare TestCase part
    $scope.mobileTestingBtn1Disable= true;


    // Disabling the btn for Mobile Testing Part
    $(' #mobileTestingFile1').change(function () {
        if ($('#mobileTestingFile1').val() =="") {
            $scope.$apply(function () {
                $scope.mobileTestingBtn1Disable= true;
            })
        }
        else {
            $scope.$apply(function () {
                $scope.mobileTestingBtn1Disable= false;
            })
        }
    });


    // File Uploading Functions
    $scope.files=[];

    // File Inserting Functions

    $scope.getFiles = function($files) {

        for (var k = 0; k < $files.length; k++) {
            $scope.files=[];
            $scope.files.push($files[k])

        }
        console.log( $scope.files,"QuestionFilesList")

        $scope.$apply();
    };
    $scope.uploadMobileFile1 = function () {
        $scope.ngModel1= "Preparation is in progress...";

        $rootScope.loading = true;

        $('#mobilePrepareTestCaseModal1').modal('hide');

        Upload.upload({
            url: '/prepareMobileGUI',
            method: 'POST',
            data: [],
            file:$scope.files
        }).then(function (resp) {

            $scope.ngModel1= "Preparation has been completed..";
            $rootScope.loading = false;
            $scope.name = "";
            $scope.files=[];
            $('#mobileTestingFile1').val( null);
            $scope.mobileTestingBtn1Disable= true;


        })
    };




    // MouseOver false for all functions

    $scope.mobileMouseOverFirst = false;
    $scope.mobileMouseOverSecond = false;
    $scope.mobileMouseOverThird = false;
    $scope.mobileMouseOverFourth = false;

    // Hovering Text

    $scope.firstMobileInputBox = "bubble works !!! Right????????????";
    $scope.secondMobileInputBox = "bubble works !!!!!!!!!! Right?";
    $scope.thirdMobileInputBox = "bubble works !!!!!!!!!! Right????????????";
    $scope.fourthMobileInputBox = "bubble works !!!!!!!!!! Right";


    // Sending Http Request

    $scope.openNotepad = function () {
        $http({
            method: 'post',
            url: '/notepad'
        }).then(function success(response) {

            console.log("Notepad will be open", response)
        }, function error(error) {

            console.log("Notepad will be not be  open", error)
        });

    };

    $scope.openMobileRide = function () {
        $http({
            method: 'post',
            url: '/executeMobileGUI'
        });

        $scope.ngModel1 = "Ride has opened..please remember to close it.";
           $('#mobileExecuteTestCaseModal2').modal('hide');


    };

}]);