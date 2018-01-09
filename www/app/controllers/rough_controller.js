kibanaApp.directive('ngFiles', ['$parse', function ($parse) {

    function fn_link(scope, element, attrs) {
        var onChange = $parse(attrs.ngFiles);
        element.on('change', function (event) {
            onChange(scope, {$files: event.target.files});
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

        $scope.firstInputBox = "bubble works !!!!!!!!!! Right????????????";


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
        $('#Trigger8').on('click', function () {
            $('#modal5').modal('hide');

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

// Disabling the API Testing - api Functional modal
        $scope.apiShowFunctional = false;


// Ng Model function
        $('#webTestingModel').on('click', function () {
            $scope.ngModel1 = "";
        });
        $('#apiTestingModel').on('click', function () {
            $scope.ngModel1 = "";
        });
        $('#mobileTestingModel').on('click', function () {
            $scope.ngModel1 = "";
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
        $scope.apiModalLoadHeadingStyle = false;



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

        $scope.apiTestingViaGUILoadModalClose = function () {
            $('#modal8').modal('hide');
            $('#modal5').modal('show');
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





        // overall Disabling btn furntion


        // For Web Testing For Browser part
        $scope.webTestingForBrowserFile = true;
        $scope.webTestingForAPIFile = true;

        // For API Testing For API -> load part
        $scope.apiTestingBtn1Disable= true;
        $scope.apiTestingBtn2Disable= true;



        // Initially MouseOver false for all functions
        $scope.mouseOver = false;


// for web Testing  -  web modal
        $scope.webModalPrepareTestCase = function () {
            var iFrame = $('<iframe name = "myIFrame" id="iFrame"></iframe>');
            $('body').append(iFrame);
            document.getElementById('webModalInputId1').click();
            $('#iFrame').hide();

            setTimeout(function () {

                $('#iFrame').remove();
                // $('#iFrame').detach();

            }, 3000);
            // $('#').modal('hide');
            // $('#webPrepareTestCaseModal1').modal('hide');
            $('.modal').modal('hide');

            $scope.ngModel1 = "Preparation is in progress....Finished now...."


        };
        $scope.files = [];
        $scope.fileNames = [];




        $scope.getFiles = function ($files) {
            for (i = 0; i < $files.length; i++) {
                $scope.files.push($files[i]);
                $scope.fileNames.push($files[i].name);

                console.log($scope.files
                )

            }


        };





        // Disabling the btn for Mobile Testing Part
        $(' #mobileTestingFile1').change(function () {
            if ($('#mobileTestingFile1').val() == null) {
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




        // Disabling the btn 2 for API Testing Part
        $('#apiTestingBtn2Disable').change(function () {
            if ($('#apiTestingBtn2Disable').val() =="") {
                $scope.$apply(function () {


                    $scope.apiTestingBtn2Disable= true;


                })

            }
            else {
                $scope.$apply(function () {


                    $scope.apiTestingBtn2Disable= false;

                })

            }
        });

// Uploading Files Function

        // For Mobile Testing
        $scope.uploadPythonFile = function () {
            $scope.loading = true;

            $('#mobilePrepareTestCaseModal1').modal('hide');




            Upload.upload({
                url: '/h',
                method: 'POST',
                // data: [],
                data: $scope.files
            }).then(function (resp) {


                $scope.loading = false;
                $scope.name = "";

                    $('input[type=file]').val( null);
                $scope.mobileTestingBtn1Disable= true;



            })
        };


        // For API Testing Part

        $scope.uploadApiFile1 =function () {
            $('#modal8').modal('hide');
            $scope.loading = true;
            Upload.upload(
                {
                    url: '/apiFile1',
                    method:'post',
                    data:$scope.files,
                    // file:$scope.files
                }

            ).then(function (resp) {
                $scope.loading = false;
                $('#apiTestingBtn1Disable').val(null);
                $('#apiTestingBtn2Disable').val(null);
                    $scope.apiTestingBtn1Disable= true;
                    $scope.apiTestingBtn2Disable= true;
            },
                function (error) {
                  console.log(error,"error")
                })


        };

        // Loader or Spinner
        $scope.loading = false;
        // for apitTesting
        $scope.apiModalPrepareTestCase = function () {
            var iFrame = $('<iframe name = "myIFrame" id="iFrame"></iframe>');
            $('body').append(iFrame);
            document.getElementById('apiModalInputId').click();
            $('#iFrame').hide();
            $('#webPrepareTestCaseModal1').modal('hide');

            setTimeout(function () {

                $('#iFrame').remove();
                // $('#iFrame').detach();

            }, 3000);
            $('.modal').modal('hide');
            $scope.ngModel1 = "Preparation is in progress....Finished now...."


        };


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
                url: '/executeWebApi'
            });

            $scope.ngModel1 = "Ride has opened..please remember to close it.";


            $('#webExecuteTestCaseModal3').modal('hide');
            $('#webExecuteTestCaseModal4').modal('hide');


            $('#mobileTestCaseModal').modal('hide');
            $('#mobileExecuteTestCaseModal2').modal('hide');


        };
        $scope.analyze = function () {
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