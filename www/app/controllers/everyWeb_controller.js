kibanaApp.directive('ngFiles', ['$parse', function ($parse) {

    function fn_link(scope, element, attrs) {
        var onChange = $parse(attrs.ngFiles);
        element.on('change', function (event) {
            if (event.target.files.length>0 ||event.target.files.length == 1 ) {
                onChange(scope, {$files: event.target.files});
            }else if (event.target.files.length > 1) {
                alert('Please select only 1 files');
                element.val(null);
            }

        });
    }

    return {
        link: fn_link
    }
}])
    .controller('everyWebController', ['$scope', '$http', 'Upload','$rootScope','$window',
        function ($scope, $http, Upload,$rootScope,$window) {
        $rootScope.loading = false;

// Over ALl Modal Restricting Function

        $('.close').on('click',function () {
            $('input[type=file]').val(null)
        });

        $(document).ready(function(){


            // Removing Classes
            var alterClass = function() {
                // Equalizing the Sidebar and Page Content
                var windowHeight =$(document).height();
                // var  navHeight =$('#nav').height() ;
                // console.log(navHeight,"nav height");
                var  navHeight =$('#nav').outerHeight() ;
                var  rowHeight1 =$('#1row').innerHeight() ;
                var  rowHeight2 =$('#2row').innerHeight() ;
                var  rowHeight3 =$('#3row').innerHeight() ;
                var  rowHeight4 =$('#4row').innerHeight() ;
                var a1 =(rowHeight1/1.2) ;
                var a2 =(rowHeight2/1.2) ;
                var a3 =(rowHeight3/1.2) ;
                var a4 =(rowHeight4) ;

                $('.test1').css('height',a1);

                $('.test2').css('height',a2);
                $('.test3').css('height',a3);
                $('.test4').css('height',a4);


                var contentHeight = windowHeight-navHeight;

                // $(".fullheight").height(contentHeight);
                // $(".sidebar").top(navHeight);
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


            alterClass();

            $(window).resize(function(){
                alterClass();
            });
        });


// Over ALl Modal Triggerring Function


        // For Web PArt

        // For Step 2 Prepare Test case

        $('#webTestingForBrowserTrigger1').on('click', function () {
            $('#webPrepareTestCaseModal').modal('hide');

        });
        $('#webTestingForBrowserTrigger2').on('click', function () {
            $('#webPrepareTestCaseModal').modal('hide');

        });
        $('#webTestingViaGUITrigger2').on('click', function () {
            $('#webExecuteTestCaseModal1').modal('hide');

        });
        $('#webTestingAPITrigger3').on('click', function () {
            $('#webExecuteTestCaseModal2').modal('hide');

        });
        $('#webTestingBrowserTrigger4').on('click', function () {
            $('#webExecuteTestCaseModal2').modal('hide');

        });
        $('#webTestingViaTestOpsTrigger5').on('click', function () {
            $('#webExecuteTestCaseModal1').modal('hide');

        });


// Ng Model function


        $('.webStepBtn').on('click', function () {
            $scope.ngModel1 = "";
        });

        // Heading Style For Web Part

        // For Prepare Test Case
        $scope.webModalForBrowserHeadingStyle = false;
        $scope.webModalForAPIHeadingStyle = false;
        $scope.webModalBrowserHeadingStyle = false;

        // For Execute  Test Case

        $scope.webModalViaGUIHeadingStyle = false;
        $scope.webModalAPIHeadingStyle = false;
        $scope.webModalViaTestOpsHeadingStyle = false;


        // For Mobile Testing Part
        // Forr Execute  Test Case

        $scope.mobileModalViaGUIHeadingStyle = false;
        $scope.mobileModalViaTestOpsHeadingStyle = false;

        // Back icon Function For Modal

        // For Web Part


        // For step 2 Prepare Test Case
        // For Browser
        $scope.webTestingForBrowserModalClose = function () {
            $('#webPrepareTestCaseModal1').modal('hide');
            $('#webPrepareTestCaseModal').modal('show');
        };

        // For API
        $scope.webTestingForAPIModalClose = function () {
            $('#webPrepareTestCaseModal2').modal('hide');
            $('#webPrepareTestCaseModal').modal('show');
        };


        // For step 3 Execute Test Case
        // For Via GUI
        $scope.webTestingViaGUIModalClose = function () {
            $('#webExecuteTestCaseModal2').modal('hide');
            $('#webExecuteTestCaseModal1').modal('show');
        };
        // For Browser
        $scope.webTestingBrowserModalClose = function () {
            $('#webExecuteTestCaseModal4').modal('hide');
            $('#webExecuteTestCaseModal2').modal('show');
        };

        // For API
        $scope.webTestingAPIModalClose = function () {
            $('#webExecuteTestCaseModal3').modal('hide');
            $('#webExecuteTestCaseModal2').modal('show');
        };


        // For Via TestOps
        $scope.webTestingViaTestOpsModalClose = function () {
            $('#webExecuteTestCaseModal5').modal('hide');
            $('#webExecuteTestCaseModal1').modal('show');
        };



        // overall Disabling btn function


        // For Web Testing For Browser part
        $scope.webTestingBtn1Disable= true;
        $scope.webTestingBtn2Disable= true;


       $scope.files = [];

        $scope.webFile1 = [];
        $scope.webFile2 = [];





        // Disabling the btn1 for Web Testing Part

        $('#WebFile1').change(
            function () {
                if ($('#WebFile1').val()=="")
                {
                    $scope.$apply(function () {
                        $scope.webTestingBtn1Disable= true;
                    })

                }
                else {
                    $scope.$apply(function () {
                        $scope.webTestingBtn1Disable=false;
                    })
                }

            }
        );

        // Disabling the btn2 for Web Testing Part

        $('#WebFile2').change(
            function () {
                if ($('#WebFile2').val()=="")
                {
                    $scope.$apply(function () {
                        $scope.webTestingBtn2Disable= true;
                    })

                }
                else {
                    $scope.$apply(function () {
                        $scope.webTestingBtn2Disable=false;
                    })
                }

            }
        );



// Uploading Files Function

        // For Web Testing

        $scope.getFiles = function($files) {

            for (var k = 0; k < $files.length; k++) {
                $scope.files=[];
                $scope.files.push($files[k])

            }
            console.log( $scope.files,"QuestionFilesList")

            $scope.$apply();
        };  $scope.getWebFile1 = function($files) {

            for (var k = 0; k < $files.length; k++) {
                $scope.webFile1=[];
                $scope.webFile1.push($files[k])

            }
            console.log( $scope.files,"QuestionFilesList")

            $scope.$apply();
        };$scope.getWebFile2 = function($files) {

            for (var k = 0; k < $files.length; k++) {
                $scope.webFile2=[];
                $scope.webFile2.push($files[k])

            }
            console.log( $scope.files,"QuestionFilesList")
            $scope.$apply();
        };


        $scope.uploadWebFile1 = function () {
            $scope.ngModel1= "Preparation is in progress...";
            $rootScope.loading = true;
            $('#webPrepareTestCaseModal1').modal('hide');
            // console.log($scope.WebFile1.length)

            Upload.upload({
                url:'/validate',
                method:'post',
                data:[],
                file:$scope.files

            }).success(function (res) {
                $scope.webTestingBtn1Disable= true;
                $('#WebFile1').val(null);
                $scope.ngModel1= "Preparation has been completed";

                $rootScope.loading = false;
            })
                .error(function (error) {
                    console.log(error,"Error")
                })



        };



        $scope.uploadWebFile2 = function () {
            $scope.files=$scope.webFile1.concat($scope.webFile2);
            $scope.ngModel1= "Preparation is in progress...";
            $rootScope.loading = true;
            $('#webPrepareTestCaseModal2').modal('hide');
            Upload.upload({
                url:'/prepareWebAPI',
                method:'post',
                data:[],
                file:$scope.files
            }).success(function (res) {
                $scope.ngModel1= "Preparation has been completed...";
                $rootScope.loading = false;
                $scope.webTestingBtn2Disable= true;
                $('#WebFile2').val(null);
                $('#WebFile3').val(null);
                $scope.files=[];
                $scope.webFile2=[];
            })
                .error(function (error) {
                    console.log(error,"Error")
                })



        };

        $scope.upload =function () {
            Upload.upload({
                url:'/h',
                method:'post',
                data:$scope.files
            })
        }

        $scope.openKantu = function () {
            $http({
                method: 'post',
                url: '/kantu'
            });
            $('#wModal1').modal('hide');
            $scope.ngModel1 = "Kantu has opened..please remember to close it."

            // $scope.webChildModal=$scope.apiChildModal=$scope.allModalHeadingStyle=$scope.webTestingBackMenuIcon=false;


        };
        $scope.openWebJenkins = function () {

            var webBrowser  = "Web Browser";

            $http({
                method: 'post',
                url: '/jenkins',
                data:[webBrowser]

            }
        );
        
            $('#modal9').modal('hide');
            $('#modal1').modal('hide');
            $scope.ngModel1 = "jenkins has opened..please remember to close it.";

            $('#webExecuteTestCaseModal5').modal('hide');
            $('#mobileExecuteTestCaseModal3').modal('hide');


        };
        $scope.openWebAPIJenkins = function () {

            var webAPI  = "Web API";

            $http({
                method: 'post',
                url: '/jenkins',
                data:[webAPI]

            }
        );
          $('#modal9').modal('hide');
          $('#modal1').modal('hide');
          $scope.ngModel1 = "jenkins has opened..please remember to close it.";

          $('#webExecuteTestCaseModal5').modal('hide');
          $('#mobileExecuteTestCaseModal3').modal('hide');
        };
        $scope.openRide = function () {
            $http({
                method: 'post',
                url: '/execute'
            });

            $scope.ngModel1 = "Ride has opened..please remember to close it.";


            $('#webExecuteTestCaseModal3').modal('hide');
            $('#webExecuteTestCaseModal4').modal('hide');


            $('#mobileTestCaseModal').modal('hide');
            $('#mobileExecuteTestCaseModal2').modal('hide');
            $('#modal5').modal('hide');


        };





        $scope.openWebAPIRide = function () {
            $http({
                method: 'post',
                url: '/executeWebApi'
            });

            $scope.ngModel1 = "Ride has opened..please remember to close it.";


            $('#webExecuteTestCaseModal3').modal('hide');
            $('#webExecuteTestCaseModal4').modal('hide');


            $('#mobileTestCaseModal').modal('hide');


        };



        $scope.analyze = function () {

            $('#webAnalyzeModal').modal('hide');

            $http({
                method: 'post',
                url: '/analyze'
            }).then(function success(response) {

                console.log("resp", response)
            }, function error(error) {

                console.log("err", error)
            });
            $scope.ngModel1 = "Kibana has opened..please remember to close it."
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


        // For bootstrap Popover


        $('[data-toggle="popover"]').popover({container: 'body'});

        $scope.webapiAnalyze = function () {
            $('#webAnalyzeModal').modal('hide');
            $http({
                method: 'post',
                url: '/analyzeWebAPI'
            }).then(function success(response) {

                console.log("resp", response)
            }, function error(error) {

                console.log("err", error)
            });
            $scope.ngModel1 = "Kibana has opened..please remember to close it."
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



        $scope.openPostman = function () {
            $http({
                method: 'post',
                url: '/postman'
            });

            $scope.ngModel1 = "Postman has opened..please remember to close it.";


            // For Web Part

// For Step 3
            $('#webExecuteTestCaseModal3').modal('hide');
            $('#webExecuteTestCaseModal4').modal('hide');

// For Step 1
            $('#wModal1').modal('hide');

            // For Mobile Testing

            // For Step 2
            $('#modal5').modal('hide');

        };


        $scope.openPostmanRecord = function () {
            $http({
                method: 'post',
                url: '/postmanRecord'
            });

            $scope.ngModel1 = "Postman and Chrome has opened..please remember to close them.";


            // For Web Part

// For Step 3
            $('#webExecuteTestCaseModal3').modal('hide');
            $('#webExecuteTestCaseModal4').modal('hide');

// For Step 1
            $('#wModal1').modal('hide');

            // For Mobile Testing

            // For Step 2
            $('#modal5').modal('hide');

        };



    }]);