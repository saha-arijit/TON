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
    .controller('everyWebController', ['$scope', '$http', 'Upload','$state','$rootScope', function ($scope, $http, Upload,$state,$rootScope) {
        $rootScope.loading = false;
        $scope.openPdf = function () {
            window.open('.../EAadhaar_365840125300_30082017174228_294713.pdf')
        }

        $scope.WebInputBoxOne = "Recording the web application for browser testing  and Convert Recorded testcase to JSON Format";
        $scope.WebInputBoxTwo = "Record the web application for API Testing";
        $scope.WebInputBoxThree = "Selection and Execution of Test Case and view log/report";
        $scope.WebInputBoxFour = "Browser Automation";
        $scope.WebInputBoxFive = "Visualisation of Automated steps";
        $scope.WebInputBoxSix = "Load / Performance testing using API's";
        $scope.WebInputBoxSeven = "Execution of Test Case for Continuous Integration and Continuous Deployment";
        $scope.WebInputBoxEight = "Analytics Viewer to display graphs";
        $scope.WebInputBoxNine = "Feed data to Elastic Search for visualizatio";
        $scope.WebInputBoxTen = "Filter and create graphs from data";
        $scope.WebInputBoxLeven = "Creating backend code";







        // document.getElementById('#hafegi').readOnly = true;
// Over ALl Modal Restricting Function

        $('.close').on('click',function () {
            $('input[type=file]').val(null)
        });

        $(document).ready(function(){


            // Removing Classes
            var alterClass = function() {
                // Equalizing the Sidebar and Page Content
                var windowHeight =$(window).height();
                var  navHeight =$('#nav').height() ;
                // console.log(navHeight,"nav height");
                // alert(z,"nav");
                var contentHeight = windowHeight-navHeight;
                // console.log(y);

                $(".fullheight").height(contentHeight);
                // $(".sidebar").top(navHeight);

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






// Global Resetting function

        $('.container-fluid').on('click', function () {


            // api Testing Step 2 PopUp
            // $('.m').modal('hide');

            // Closing all the modal once the btn clicked
            // $('.btnInModal').modal('hide')


        });

// Disabling the API Testing - api Functional modal
        $scope.apiShowFunctional = false;


// Ng Model function
        $('#webTestingModel').on('click', function () {
            $scope.ngModel1 = "";
                      var href ='/assets/pdf.pdf';$('#userManual').attr('href',href)
        });
        $('#apiTestingModel').on('click', function () {
            $scope.ngModel1 = "";
                     var href ='/assets/pdf2.pdf';
                      $('#userManual').attr('href',href)
        });
        $('#mobileTestingModel').on('click', function () {
            $scope.ngModel1 = "";
                       var href ='/assets/pdf3.pdf';
                       $('#userManual').attr('href',href)
        });


        $('.webStepBtn').on('click', function () {
            $scope.ngModel1 = "";
        });

        $('.apiStepBtn').on('click', function () {
            $scope.ngModel1 = "";
        });


// disabling web testing web prepare testcase button
        $scope.web = true;


        // Heading Style

// Heading Style For API Part
        $scope.apiShowFunctional = false;
        $scope.apiShowAutomation = false;
        $scope.apiShowLoad = false;




        $scope.modalViaTestOpsHeadingStyle = false;


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


        // For API Testing Part
        $scope.apiTestingViaTestOpsModalClose = function () {

            $('#modal9').modal('hide');
            $('#modal1').modal('show');
        };
        $scope.apiTestingViaGUIApiModalClose = function () {
            $('#modal5').modal('hide');
            $('#modal2').modal('show');
        };
        $scope.apiTestingViaGUIModalClose = function () {
            $('#modal2').modal('hide');
            $('#modal1').modal('show');
        };


        // For Mobile Testing Part

        // For Step 3
        $scope.mobileTestingViaGUIModalClose = function () {
            $('#mobileExecuteTestCaseModal2').modal('hide');
            $('#mobileExecuteTestCaseModal1').modal('show');
        };

        $scope.mobileTestingViaTestOpsModalClose = function () {
            $('#mobileExecuteTestCaseModal3').modal('hide');
            $('#mobileExecuteTestCaseModal1').modal('show');
        };





        // overall Disabling btn function


        // For Web Testing For Browser part
        $scope.webTestingBtn1Disable= true;
        $scope.webTestingBtn2Disable= true;


        // MouseOver false for all functions
        $scope.webMouseOverOne = false;
        $scope.webMouseOverTwo= false;
        $scope.webMouseOverThree = false;
        $scope.webMouseOverFour = false;
        $scope.webMouseOverFive= false;
        $scope.webMouseOverSix = false;
        $scope.webMouseOverSeven = false;
        $scope.webMouseOverEight = false;
        $scope.webMouseOverNine = false;
        $scope.webMouseOverTen = false;
        $scope.webMouseOverLeven = false;





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

        $(document).ready(function() {
            // Adding Href Attribute
            $('#apiTestingModel').on('click', function () {
                $scope.ngModel1 = "";
                var href = '/assets/pdf2.pdf';
                $('#userManual').attr('href', href)
            })
        })
        $scope.openKantu = function () {
            $http({
                method: 'post',
                url: '/kantu'
            });
            $('#wModal1').modal('hide');
            $scope.ngModel1 = "Kantu has opened..please remember to close it."

            // $scope.webChildModal=$scope.apiChildModal=$scope.allModalHeadingStyle=$scope.webTestingBackMenuIcon=false;


        };
        $scope.openJenkins = function () {
            $http({
                method: 'post',
                url: '/jenkins'
            });
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
            }, 9000);

            // setTimeout(function () {
            //     $scope.ngModel1="";
            // },100)


            // $('#webTestingModal').modal('hide')


        };

        // For bootstrap Popover
        $(function () {
            $('[data-toggle="popover"]').popover({

            })
        })
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
            }, 9000);
        };

        $scope.apiAnalyze = function () {
            $('#webAnalyzeModal').modal('hide');
            $http({
                method: 'post',
                url: '/analyzeAPI'
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
            }, 9000);
        };

        $scope.mobileAnalyze = function () {
            $('#webAnalyzeModal').modal('hide');
            $http({
                method: 'post',
                url: '/analyzeMobileGUI'
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
            }, 9000);
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



        // To Show the modal one by one
        // Api Testing TestCase Modal
        // var apiModal = $('#apiTestCaseModal');
        // var apiInnermodal1 = apiModal.next(".modal");     //get reference to nested modal
        // apiModal.after(apiInnermodal1);
        //
        // Web Testing
        // var webModal = $('#webTestCaseModal');
        // var webInnermodal1 = webModal.find(".modal");     //get reference to nested modal
        // webModal.after(webInnermodal1);
        // $(document).ready(function () {
        //     $('#sidebarCollapse').on('click', function () {
        //         $('#sidebar').toggleClass('active');
        //     });
        // });
        $scope.$state = $state;
    }]);