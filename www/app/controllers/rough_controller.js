kibanaApp.controller('roughController', ['$scope', '$http', function ($scope, $http) {

    $scope.firstInputBox = "bubble works !!!!!!!!!! Right????????????";

// Global Resetting function

    $('.container-fluid').on('click',function () {
        $scope.apiShowTestOps=false;
        $scope.apiModalViaTestOpsHeadingStyle=false;
        $scope.apiShowGUIBrowser=false;
        $scope.apiModalGUIBrowserHeadingStyle=false;
        $scope.apiModalViaGUIHeadingStyle=false;
        $scope.apiModalGUIApiHeadingStyle=false;
        $scope.apiShowGUIapi=false;
        $scope.apiBackIcon=true;
        //
        // $('#webTestCaseModal').modal('hide')
        // $('#apiTestCaseModal').modal('hide')
        // $('#mobileTestCaseModal').modal('hide')


    });
// NgModel for Tab switching

    // $scope.webTestingModel = "";
    // $scope.apiTestingModel = "";
    // $scope.mobileTestingModel = "";
    // $scope.ngModel1 = "";

$('#webTestingModel').on('click',function () {
    $scope.ngModel1 = "";
});
$('#apiTestingModel').on('click',function () {
    $scope.ngModel1 = "";
});
$('#mobileTestingModel').on('click',function () {
    $scope.ngModel1 = "";
});


// disabling web testing web prepare testcase button
    $scope.web = true;

    // For Close button to resset everything
    $scope.webChildModal=false;
    $scope.apiChildModal=false;
    // Disabling the button initially
    $scope.webModalFileSelected = true;
    $scope.apiModalFileSelected = true;
    // Hiding the  Modal back menu icon
    $scope.webTestingBackMenuIcon = true;

    // Hidding or Showing GUI
$scope.showGUI = false;
$scope.apiShowGUI=false;

// api Testing 3rd step
    $scope.apiShowTestOps= false;
    $scope.apiShowTestOps=false;
    $scope.apiModalViaTestOpsHeadingStyle=false;
    $scope.apiShowGUIBrowser=false;
    $scope.apiModalGUIBrowserHeadingStyle=false;
    $scope.apiModalViaGUIHeadingStyle=false;
    $scope.apiModalGUIApiHeadingStyle=false;
    $scope.apiShowGUIapi=false;
    $scope.apiBackIcon=true;

    $scope.apiTestingShowBrowserFun =function () {
        $scope.apiShowGUIBrowser =$scope.apiModalGUIBrowserHeadingStyle=true
            $scope.apiBackIcon=false;

    };




// Hidding or Showing GUI Browser
$scope.showGUIBrowser = false;
// Hidding or Showing GUI API
$scope.showGUIapi = false;
// dding or Showing API Testing -  api Modal
$scope.showAPITestingApiModal = false;

$scope.showGUIapifun= function () {
    $scope.showGUIBrowser = false;
    $scope.showGUIapi = true;
    $scope.allModalHeadingStyle = true;
    $scope.modalGUIApiHeadingStyle = true;
};$scope.apiShowGUIapifun= function () {
    $scope.apiShowGUIBrowser = false;
    $scope.apiShowGUIapi = true;
    $scope.apiModalGUIApiHeadingStyle = true;
    $scope.apiShowGUIapi = true;
    $scope.apiBackIcon =false;


    $scope.allModalHeadingStyle = true;

    $scope.apiTestingModalGUIApiHeadingStyle = true;
};
// Showing or hidding Via TestOps
    $scope.showTestOps =false;

    $scope.showTestOpsFun = function () {
        // $scope.showGUI=false;
        $scope.showTestOps=true;
        $scope.allModalHeadingStyle = true;
        $scope.modalViaTestOpsHeadingStyle = true;
    $scope.webBackIcon=false;
    };
    $scope.apiShowTestOpsFun = function () {
        // $scope.showGUI=false;
        $scope.apiShowTestOps=true;
        $scope.allModalHeadingStyle = true;
        $scope.apiModalViaTestOpsHeadingStyle = true;
    $scope.apiBackIcon=false;
    };
    $scope.ViaGUIShowHideFun = function () {
        $scope.showGUI=$scope.modalViaGUIHeadingStyle=true;
        $scope.webBackIcon=false;
    }; $scope.apiViaGUIShowHideFun = function () {
        $scope.apiBackIcon=false;
        $scope.apiShowGUI=$scope.apiModalViaGUIHeadingStyle=true

        // $scope.apiShowGUI=$scope.modalViaGUIHeadingStyle=true;
        // $scope.webBackIcon=false;
    };
    // Showing or hidding Via API Testing api Modal Fun
    $scope.showAPITestingApiModalFun= function () {
        $scope.showAPITestingApiModal = true;
        $scope.modalApiHeadingStyle = true;
    };

    // Ng class for web Modal Heading
    $scope.allModalHeadingStyle = false;
    $scope.modalViaGUIHeadingStyle=false;
    $scope.modalGUIBrowserHeadingStyle=false;
    $scope.modalGUIApiHeadingStyle=false;
    $scope.modalViaTestOpsHeadingStyle=false;

// Hiding Back Icon for web testing

    $scope.webTestingBackMenuIcon=false;
    $scope.webBackIcon=true;

    $scope.webBackIconFun = function () {

    $scope.showGUI= false;
    $scope.showTestOps= false;
    $scope.showGUIapi= false;
    $scope.allModalHeadingStyle= false;
    $scope.modalViaGUIHeadingStyle= false;
    $scope.modalGUIBrowserHeadingStyle= false;
    $scope.modalGUIApiHeadingStyle= false;
    $scope.modalViaTestOpsHeadingStyle= false;
    if ($scope.webBackIcon=true){
        $scope.webBackIcon=true

    }else{
        $scope.webBackIcon=false;
        }
    // if($scope.showGUIBrowser=true)
    // {
    //
    //     // $scope.showGUI=$scope.showGUIBrowser= $scope.showGUIapi=false;
    //     // $scope.showGUI=false;
    //     // $scope.showTestOps= false;
    //     // $scope.showGUI=true;
    //
    //     $scope.showGUIBrowser= false;
    //     // $scope.showTestOps= false;
    //
    //
    //
    //
    //     // alert("jhufegh")
    // }else {
    //     alert("yes")
    // }

}; $scope.apiBackIconFun = function () {

    $scope.apiShowGUI= false;
    $scope.apiShowTestOps= false;
    $scope.apiModalViaTestOpsHeadingStyle= false;
    $scope.apiModalGUIApiHeadingStyle= false;
    $scope.apiModalGUIBrowserHeadingStyle= false;
    $scope.apiModalViaGUIHeadingStyle= false;


    $scope.apiShowTestOps= false;
    $scope.apiShowGUIapi= false;

    $scope.allModalHeadingStyle= false;

    $scope.apiTestingModalViaGUIHeadingStyle= false;
    $scope.apiTestingModalGUIBrowserHeadingStyle= false;
    $scope.apiTestingModalGUIApiHeadingStyle= false;
    $scope.apiTestingModalViaTestOpsHeadingStyle= false;
    if ($scope.apiBackIcon=true){
        $scope.apiBackIcon=true

    }else{
        $scope.apiBackIcon=false;
        }


};
   $scope.webCloseIconFun = function () {
       $scope.showGUI=$scope.showTestOps=false;
       $scope.allModalHeadingStyle= false;
       $scope.modalViaGUIHeadingStyle= false;
       $scope.modalGUIBrowserHeadingStyle= false;
       $scope.modalGUIApiHeadingStylee= false;
       $scope.modalViaTestOpsHeadingStyle= false;
       $scope.webBackIcon=true;



   };
   $scope.apiCloseIconFun = function () {

       $scope.apiShowGUI= false;
       $scope.apiShowTestOps= false;
       $scope.apiModalViaTestOpsHeadingStyle= false;
       $scope.apiModalGUIApiHeadingStyle= false;
       $scope.apiModalGUIBrowserHeadingStyle= false;
       $scope.apiModalViaGUIHeadingStyle= false;
       $scope.apiBackIcon= true;


       $scope.apiShowTestOps= false;
       $scope.apiShowTestOps=false;
       $scope.apiModalViaTestOpsHeadingStyle=false;
       $scope.apiShowGUIBrowser=false;
       $scope.apiModalGUIBrowserHeadingStyle=false;
       $scope.apiModalViaGUIHeadingStyle=false;
       $scope.apiModalGUIApiHeadingStyle=false;
       $scope.apiShowGUIapi=false;



   };$scope.APICloseIconFun = function () {
        $scope.modalApiHeadingStyle=$scope.showAPITestingApiModal=false
    };

    $scope.webChildModalHide = function () {
        $scope.webChildModal=true;
        $scope.webTestingBackMenuIcon = false;
        $scope.allModalHeadingStyle = true;
        $scope.webTestingBackMenuIcon=true;
    };$scope.apiChildModalHide = function () {
        $scope.apiChildModal=true;
        $scope.webTestingBackMenuIcon =false;
        $scope.allModalHeadingStyle = true;
        $scope.webTestingBackMenuIcon=true;


    };

// Enabling the validate case button after picking a file
    $scope.webFileSelected = function () {
        $scope.web = false;
    };

    // Initially MouseOver false for all functions
    $scope.mouseOver=false;


    // for Api Testing
    // $scope.mouseOver = function () {
    //
    //     $scope.firstInputBox = "bubble works !!!!!!!!!! Right????????????-";
    //     var data = $('<p id="apiBubbleElement"  ng-mouseover="mouseOver()" ng-mouseleave="mouseLeave()"\n' +
    //         '                               class="apiSpeech"\n' +
    //         '                               style="text-align: center;margin-top: -10%;float: left">bubble works !!!!!!!!!! Right????????????</p>\n');
    //     $('#apiBubbleColumn').append(data);
    //     $scope.x = true;
    //
    // };
    // $scope.mouseLeave = function () {
    //
    //     $('#apiBubbleElement').remove();
    //     $scope.x = false;
    // };

// for web Testing  -  web modal
    $scope.webModalPrepareTestCase = function () {
        var iFrame = $('<iframe name = "myIFrame" id="iFrame"></iframe>');
        $('body').append(iFrame);
        document.getElementById('webModalInputId').click();
        $('#iFrame').hide();

        setTimeout(function () {

            $('#iFrame').remove();
            // $('#iFrame').detach();

        }, 3000);
        $('#webTestCaseModal').modal('hide');
        $scope.webChildModal=$scope.apiChildModal=$scope.allModalHeadingStyle=$scope.webTestingBackMenuIcon=false;


    };

    // for apitTesting
    $scope.apiModalPrepareTestCase = function () {
        var iFrame = $('<iframe name = "myIFrame" id="iFrame"></iframe>');
        $('body').append(iFrame);
        document.getElementById('apiModalInputId').click();
        $('#iFrame').hide();

        setTimeout(function () {

            $('#iFrame').remove();
            // $('#iFrame').detach();

        }, 3000);
        $('#webTestCaseModal').modal('hide');
        $scope.webChildModal=$scope.apiChildModal=$scope.allModalHeadingStyle=$scope.webTestingBackMenuIcon=false;



    };

    // for webTesting
    // $scope.webPrepareTestCase = function () {
    //     var iFrame = $('<iframe name = "myIFrame" id="iFrame"></iframe>');
    //     $('body').append(iFrame);
    //     document.getElementById('webInputId').click();
    //     $('#iFrame').hide();
    //
    //     setTimeout(function () {
    //
    //         $('#iFrame').remove();
    //         // $('#iFrame').detach();
    //
    //     }, 3000);
    //
    // };

    $scope.openKantu = function () {
        $http({
            method: 'post',
            url: '/kantu'
        });
        $('#recordTestCaseModal').modal('hide');
        $scope.ngModel1="Kantu has opened..please remember to close it."

        // $scope.webChildModal=$scope.apiChildModal=$scope.allModalHeadingStyle=$scope.webTestingBackMenuIcon=false;


    };
    $scope.openJenkins = function () {
        $http({
            method: 'post',
            url: '/jenkins'
        });

        $scope.ngModel1="jenkins has opened..please remember to close it.";

        $('#webTestingModal').modal('hide');
        $scope.showGUI=$scope.showTestOps=false;
        $scope.allModalHeadingStyle= false;
        $scope.modalViaGUIHeadingStyle= false;
        $scope.modalGUIBrowserHeadingStyle= false;
        $scope.modalGUIApiHeadingStylee= false;
        $scope.modalViaTestOpsHeadingStyle= false;
        $scope.webBackIcon=true;

        $('#apiTestCaseModal').modal('hide');
        $scope.apiShowGUI= false;
        $scope.apiShowTestOps= false;
        $scope.apiModalViaTestOpsHeadingStyle= false;
        $scope.apiModalGUIApiHeadingStyle= false;
        $scope.apiModalGUIBrowserHeadingStyle= false;
        $scope.apiModalViaGUIHeadingStyle= false;
        $scope.apiBackIcon= true;

    };
    $scope.openRide = function () {
        $http({
            method: 'post',
            url: '/execute'
        });

        $scope.ngModel1="Ride has opened..please remember to close it.";

        $('#webTestingModal').modal('hide');
        $scope.showGUI=$scope.showTestOps=false;
        $scope.allModalHeadingStyle= false;
        $scope.modalViaGUIHeadingStyle= false;
        $scope.modalGUIBrowserHeadingStyle= false;
        $scope.modalGUIApiHeadingStylee= false;
        $scope.modalViaTestOpsHeadingStyle= false;
        $scope.webBackIcon=true;

        $('#apiTestCaseModal').modal('hide');
        $scope.apiShowGUI= false;
        $scope.apiShowTestOps= false;
        $scope.apiModalViaTestOpsHeadingStyle= false;
        $scope.apiModalGUIApiHeadingStyle= false;
        $scope.apiModalGUIBrowserHeadingStyle= false;
        $scope.apiModalViaGUIHeadingStyle= false;
        $scope.apiBackIcon= true;

        $('#mobileTestCaseModal').modal('hide');







// alert("shduhdu")
    };
    $scope.analyze = function () {
        $http({
            method: 'post',
            url: '/analyze'
        });
        $scope.ngModel1="Kibana has opened..please remember to close it."

        // $('#webTestingModal').modal('hide')


    };
    $scope.openPostman = function () {
        $http({
            method: 'post',
            url: '/postman'
        });

        $scope.ngModel1="Postman has opened..please remember to close it.";


        $('#recordTestCaseModal').modal('hide');
        $('#webTestingModal').modal('hide');
        $scope.showGUI=$scope.showTestOps=false;
        $scope.allModalHeadingStyle= false;
        $scope.modalViaGUIHeadingStyle= false;
        $scope.modalGUIBrowserHeadingStyle= false;
        $scope.modalGUIApiHeadingStylee= false;
        $scope.modalViaTestOpsHeadingStyle= false;
        $scope.webBackIcon=true;

        $('#apiTestCaseModal').modal('hide');
        $scope.apiShowGUI= false;
        $scope.apiShowTestOps= false;
        $scope.apiModalViaTestOpsHeadingStyle= false;
        $scope.apiModalGUIApiHeadingStyle= false;
        $scope.apiModalGUIBrowserHeadingStyle= false;
        $scope.apiModalViaGUIHeadingStyle= false;
        $scope.apiBackIcon= true;



    };

    // To Show the modal one by one
    // Api Testing TestCase Modal
    // var apiModal = $('#apiTestCaseModal');
    // var apiInnermodal1 = apiModal.next(".modal");     //get reference to nested modal
    // apiModal.after(apiInnermodal1);
    //
    // Web Testing
    var webModal = $('#webTestCaseModal');
    var webInnermodal1 = webModal.find(".modal");     //get reference to nested modal
    webModal.after(webInnermodal1);


    $(function () {
                     // Single Modal
        $('#singleModalTrigger').on('click', function () {
            $('#apiTestCaseModal').modal('hide');


        });$('#webPrepareBtn1,#webPrepareBtn2').on('click', function () {
            $('#webTestCaseModal').modal('hide');


        });
        //

        $('#closeSingleModal').on('click', function () {
            $('#singleModal').modal('hide');
            // $('#singleModal').modal('toggle');
            $('#apiTestCaseModal').modal('show');
        });

        // Performance Modal
        $('#performanceModalTrigger').on('click', function () {
            $('#apiTestCaseModal').modal('hide')


        });
        $('#closePerformanceModal').on('click', function () {
            $('#performanceModal').modal('hide');
            // // $('#singleModal').modal('toggle');
            $('#apiTestCaseModal').modal('show');
        });




    });




}]);