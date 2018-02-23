/**
 * Created by rabeesh on 22/1/18.
 */
kibanaApp.controller('everyMobileController', ['$scope', '$http', 'Upload','$rootScope','$timeout','$interval','$state','$location','$window',
    function ($scope, $http, Upload,$rootScope,$timeout,$interval,$state,$location,$window) {

    $rootScope.interval=true;






        // For bootstrap Popover

        $('[data-toggle="popover"]').popover({container: 'body'});

        $(document).ready(function(){





            // Removing Classes
        var alterClass = function() {
            // Equalizing the Sidebar and Page Content
            var windowHeight =$(document).height();
            // var windowHeight =$(window).height();
            var  navHeight =$('#nav').outerHeight() ;
            var  rowHeight1 =$('#1row').innerHeight() ;
            // alert(rowHeight1,"")
            var  rowHeight2 =$('#2row').innerHeight() ;
            var  rowHeight3 =$('#3row').innerHeight() ;
            var  rowHeight4 =$('#4row').innerHeight() ;
            // console.log(rowHeight,"rowHeight");
            var a1 =(rowHeight1/1.2) ;
            var a2 =(rowHeight2/1.2) ;
            var a3 =(rowHeight3/1.2) ;
            var a4 =(rowHeight4) ;
            // console.log(rowHeight1,"rowHeight");
            // console.log(rowHeight2,"rowHeight");
            // console.log(rowHeight3,"rowHeight");
            // console.log(rowHeight4,"rowHeight");

            // console.log(a1,"rowHeight");
            // console.log(a2,"rowHeight");
            // console.log(a3,"rowHeight");
            // console.log(a4,"rowHeight");

            $('.test1').css('height',a1);

            $('.test2').css('height',a2);
            $('.test3').css('height',a3);
            $('.test4').css('height',a4);

            // console.log(navHeight,"nav height");
            // alert(z,"nav");
            var contentHeight = windowHeight-navHeight;


            // $(".fullheiht").height(contentHeight);
            // $("#sidebar").top(navHeight);

            var ww = $(document).width();
            // alert(ww)

            if (ww < 768) {
                $('#sidebar').removeClass('fullheight');
                $('#contactUs').removeClass('force-to-bottom');
                $('.content').removeClass('fullheight');
                $(".fullheight").height();
            } else if (ww >= 768) {
                $('.content').addClass('fullheight');
                $('#sidebar').addClass('fullheight');
                $(".fullheight").height(contentHeight);
                $('#contactUs').addClass('force-to-bottom');

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




        // For Step 3
        $scope.mobileTestingViaGUIModalClose = function () {
            $('#mobileExecuteTestCaseModal2').modal('hide');
            $('#mobileExecuteTestCaseModal1').modal('show');
        };

        $scope.mobileTestingViaTestOpsModalClose = function () {
            $('#mobileExecuteTestCaseModal3').modal('hide');
            $('#mobileExecuteTestCaseModal1').modal('show');
        };



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

    // Sending Http Request
// For step1 start
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
// for step 1 end
    $scope.openMobileRide = function () {
        $http({
            method: 'post',
            url: '/executeMobileGUI'
        });

        $scope.ngModel1 = "Ride has opened..please remember to close it.";
           $('#mobileExecuteTestCaseModal2').modal('hide');
    };

      $scope.openAppium = function () {
        $http({
            method: 'post',
            url: '/openAppium'
        });

        $scope.ngModel1 = "Appium has opened..please remember to close it.";
           $('#mobileExecuteTestCaseModal2').modal('hide');
    };
  

    $scope.openJenkins = function () {
            $http({
                method: 'post',
                url: '/jenkins'
            });
            $('#mobileExecuteTestCaseModal3').modal('hide');

            $scope.ngModel1 = "jenkins has opened..please remember to close it.";


        };

        // For Step 3 end
        $scope.mobileAnalyze = function () {


            $http({
                method: 'post',
                url: '/analyzeMobileGUI'
            }).then(function success(response) {

                console.log("resp", response)
            },function error(error) {

                console.log("err", error)
            });
            $scope.ngModel1 = "Kibana has opened..please remember to close it.";
            setTimeout(function () {
                $scope.$apply(function () {
                    $scope.ngModel1 = ''
                })
            }, 31000);

            setTimeout(function () {
                $scope.$apply(function () {
                    var  href="#/home/visualization" ;
                    $window.open(href,"_blank")
                })
            }, 30000);
        };



    }]);