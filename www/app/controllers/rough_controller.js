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
    .controller('roughController', ['$scope', '$http', 'Upload', function ($scope, $http, Upload) {

        $scope.openPdf = function () {
            window.open('.../EAadhaar_365840125300_30082017174228_294713.pdf')
        }

        $scope.firstWebInputBox = "bubble works !!! Right????????????";
        $scope.secondWebInputBox = "bubble works !!!!!!!!!! Right?";
        $scope.thirdWebInputBox = "bubble works !!!!!!!!!! Right????????????";
        $scope.fourthWebInputBox = "bubble works !!!!!!!!!! Right";

 $scope.firstApiInputBox = "bubble works !!! Right????????????";
        $scope.secondApiInputBox = "bubble works !!!!!!!!!! Right?";
        $scope.thirdApiInputBox = "bubble works !!!!!!!!!! Right????????????";
        $scope.fourthApiInputBox = "bubble works !!!!!!!!!! Right";

 $scope.firstMobileInputBox = "bubble works !!! Right????????????";
        $scope.secondMobileInputBox = "bubble works !!!!!!!!!! Right?";
        $scope.thirdMobileInputBox = "bubble works !!!!!!!!!! Right????????????";
        $scope.fourthMobileInputBox = "bubble works !!!!!!!!!! Right";



        // document.getElementById('#hafegi').readOnly = true;
// Over ALl Modal Restricting Function

        $('.close').on('click',function () {
            $('input[type=file]').val(null)
        });

        $(document).ready(function(){

                $(".fullheight").height($(document).height());

        });
// Making columns to same height
        function equalHeight(group) {
            tallest = 0;
            group.each(function() {
                thisHeight = $(this).height();
                if(thisHeight > tallest) {
                    tallest = thisHeight;
                }
            });
            group.height(tallest);
        }
        $(document).ready(function() {
            equalHeight($(".column"));
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


// For Api Testing

        // For Step 2
        $('#Trigger2').on('click', function () {
            $('#modal1').modal('hide');
            // $('#singleModal').modal('toggle');
            // $('#apiTestCaseModal').modal('show');
        });
        $('#Trigger3').on('click', function () {
            $('#modal2').modal('hide');

        });

        $('#Trigger9').on('click', function () {
            $('#modal1').modal('hide');

        });





        // For Mobile Testing Part

        $('#mobileExecuteTestCaseTrigger2').on('click', function () {
            $('#mobileExecuteTestCaseModal1').modal('hide');

        }); $('#mobileExecuteTestCaseTrigger3').on('click', function () {
            $('#mobileExecuteTestCaseModal1').modal('hide');

        });







// Global Resetting function

        $('.container-fluid').on('click', function () {


            // api Testing Step 2 PopUp
            // $('.m').modal('hide');

            // Closing all the modal once the btn clicked
            // $('.btnInModal').modal('hide')


        });
var x= $(window).height();

        var a = (x/113)+'%';
        var b = 0;
        var c = (x/33.3)+'%';
        var d = (x/67)+'%';
        var y = a +" "+b+" "+c+" "+d;

        console.log(y);
        $("#id").each(function() {
            $(this).css("padding", y);
        });
    // $('#id').css('padding-bottom',20%)
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


        // For API Testing For API -> load part
        $scope.apiTestingBtn1Disable= true;

        // For Mobile Testing For Prepare TestCase part
        $scope.mobileTestingBtn1Disable= true;



        // Initially MouseOver false for all functions
        $scope.webMouseOverFirst = false;
        $scope.webMouseOverSecond = false;
        $scope.webMouseOverThird = false;
        $scope.webMouseOverFourth = false;

        // For ApiPart

        $scope.apiMouseOverFirst = false;
        $scope.apiMouseOverSecond = false;
        $scope.apiMouseOverThird = false;
        $scope.apiMouseOverFourth = false;
// For Mobile Part

        $scope.mobileMouseOverFirst = false;
        $scope.mobileMouseOverSecond = false;
        $scope.mobileMouseOverThird = false;
        $scope.mobileMouseOverFourth = false;



        $scope.files = [];

        $scope.webFile1 = [];
        $scope.webFile2 = [];
        $scope.apiFile2 = [];
        $scope.apiFile2 = [];




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




        // Disabling the btn 1 for API Testing Part
        $(' #apiTestingBtn1Disable').change(function () {
            if ($('#apiTestingBtn1Disable').val() == "") {
                $scope.$apply(function () {

                    $scope.apiTestingBtn1Disable= true;


                })

            }
            else {
                $scope.$apply(function () {

                    $scope.apiTestingBtn1Disable= false;

                })

            }
        });





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

// For Api Testing
        $scope.getApiFile1 = function($files) {

            for (var k = 0; k < $files.length; k++) {
                $scope.apiFile1=[];
                $scope.apiFile1.push($files[k])

            }
            console.log( $scope.files,"QuestionFilesList")
            $scope.$apply();
        };

        $scope.getApiFile2 = function($files) {

            for (var k = 0; k < $files.length; k++) {

                $scope.apiFile2=[];
                $scope.apiFile2.push($files[k])
            }
            console.log( $scope.files,"QuestionFilesList")
            $scope.$apply();
        };

        $scope.uploadWebFile1 = function () {
            $scope.ngModel1= "Preparation is in progress..."; $scope.ngModel1= "Preparation has been completed";
            $scope.loading = true;
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

                $scope.loading = false;
            })
                .error(function (error) {
                    console.log(error,"Error")
                })



        };



        $scope.uploadWebFile2 = function () {
            $scope.files=$scope.webFile1.concat($scope.webFile2);
            $scope.ngModel1= "Preparation is in progress...";
            $scope.loading = true;
            $('#webPrepareTestCaseModal2').modal('hide');
            Upload.upload({
                url:'/prepareWebAPI',
                method:'post',
                data:[],
                file:$scope.files
            }).success(function (res) {
                $scope.ngModel1= "Preparation has been completed...";
                $scope.loading = false;
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

        // For Mobile Testing
        $scope.uploadMobileFile1 = function () {
            $scope.ngModel1= "Preparation is in progress...";

            $scope.loading = true;

            $('#mobilePrepareTestCaseModal1').modal('hide');

            Upload.upload({
                url: '/prepareMobileGUI',
                method: 'POST',
                data: [],
                file:$scope.files
            }).then(function (resp) {

                $scope.ngModel1= "Preparation has been completed..";
                $scope.loading = false;
                $scope.name = "";
                $scope.files=[];
                $('#mobileTestingFile1').val( null);
                $scope.mobileTestingBtn1Disable= true;


            })
        };



        // For API Testing Part

        $scope.uploadApiFile1 =function () {

            $('#modal8').modal('hide');
            $scope.ngModel1="Preparation is in progress...";
            $scope.loading = true;
            console.log($scope.files)
            $scope.files=$scope.apiFile1.concat($scope.apiFile2)
            Upload.upload(



                {
                    url: '/apiFileUploadAPI',
                    method:'post',
                    data:[],
                    file:$scope.files
                }

            ).then(function (resp) {
                    $scope.ngModel1="Preparation has been completed...";
                    $('#apiTestingBtn2Disable').val(null);
                    $scope.loading = false;
                    $('#apiTestingBtn1Disable').val(null);
                    $scope.apiTestingBtn1Disable= true;
                    $scope.files=[];
                    $scope.apiFile2=[];
                    $('#File1').val( null);
                },
                function (error) {
                    console.log(error,"error")
                })


        };
        // Loader or Spinner
        $scope.loading = false;



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


        $scope.openAPIRide = function () {
            $http({
                method: 'post',
                url: '/executeAPIGUI'
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

        $scope.openMobileRide = function () {
            $http({
                method: 'post',
                url: '/executeMobileGUI'
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


        };   $scope.apiAnalyze = function () {
            $('#webAnalyzeModal').modal('hide');
            $http({
                method: 'post',
                url: '/analyzeWebApi'
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


    }]);