/**
 * Created by rabeesh on 22/1/18.
 */

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
}]).controller('everyApiController', ['$scope', '$http', 'Upload','$state','$rootScope','$window',
    function ($scope, $http, Upload,$state,$rootScope,$window) {

        $(window).ready(
        function () {
            setTimeout(
                function () {
                    $rootScope.location=
                    console.log( $rootScope.location,"current home")
                    // alert("refrshed")
                },500
            )
            // document.getElementById('#myModal').style.display='block';
           // $('#myModal').modal({backdrop:'static',keyboard:false});
            // $('#myModal').modal('show');

      $http({
            url:'/popupCheck',
            method:'post'
          }).then(function success (res) {
             // $('#myModal').modal({backdrop:'static',keyboard:false},'show');
            console.log(res,"res")
          if (res.data === "File not Exists"){
             $state.go('home.popup')

             $("#myModal").modal('show')
              $rootScope.location = "home.everyAPI"
           }
          else {
            $("#myModal").modal('hide')
            $state.go('home.everyAPI')
        }
       })
      })


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
            // var a4 =(rowHeight4/1.2) ;


            $('.test1').css('height',a1);

            $('.test2').css('height',a2);
            $('.test3').css('height',a3);
            $('.test4').css('height',a2);

            // console.log(navHeight,"nav height");
            // alert(z,"nav");
            var contentHeight = windowHeight-navHeight;


            // $(".fullheight").height(contentHeight);
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


    // Over ALl Modal Triggerring Function

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








// Button Disabling Functions

    // By Default
    $scope.apiTestingBtn1Disable= true;

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

// File Uploading Functions

    $scope.files = [];
    $scope.apiFile2 = [];
    $scope.apiFile2 = [];

// File Inserting Fnctions
    $scope.getApiFile1 = function($files) {

        for (var k = 0; k < $files.length; k++) {
            $scope.apiFile1=[];
            $scope.apiFile1.push($files[k])

        }
        // console.log( $scope.files,"QuestionFilesList");
        $scope.$apply();
    };

    $scope.getApiFile2 = function($files) {

        for (var k = 0; k < $files.length; k++) {

            $scope.apiFile2=[];
            $scope.apiFile2.push($files[k])
        }
        // console.log( $scope.files,"QuestionFilesList")
        $scope.$apply();
    };



    $scope.uploadApiFile1 =function () {

        $('#modal8').modal('hide');
        $scope.ngModel1="Preparation is in progress.";
        $rootScope.loading = true;
        // console.log($scope.files)
        $scope.files=$scope.apiFile1.concat($scope.apiFile2);
        Upload.upload(



            {
                url: '/apiFileUploadAPI',
                method:'post',
                data:[],
                file:$scope.files
            }

        ).then(function (resp) {
                $scope.ngModel1="Preparation has been completed.";
                $('#apiTestingBtn2Disable').val(null);
                $rootScope.loading = false;
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



   // Sending Http Request Functions



// For Step 1 start

    $scope.openPostmanRecord = function () {

        var EveryAPI = 'EveryAPI'
        $http({
            method: 'post',
            url: '/postmanRecord',
            data: [EveryAPI]
        });

        $scope.ngModel1 = "Postman will be opening shortly.";

        setTimeout(function () {
            $scope.$apply(
                $scope.ngModel1 = "Postman has opened. Please remember to close them."
            )
        },60000);


    };

// For Step 1 end

// For Step 3 start

    $scope.openPostman = function () {
        var API = 'API'
        $http({
            method: 'post',
            url: '/postman',
            data: [API]
        });

        $scope.ngModel1 = "Postman will be opening shortly.";

        setTimeout(function () {
            $scope.$apply(
                $scope.ngModel1 = "Postman has opened. Please remember to close it."
        )
        },60000);

        $('#modal5').modal('hide');

    };

    $scope.openAPIRide = function () {
        $http({
            method: 'post',
            url: '/executeAPIGUI'
        });
        $scope.ngModel1 = "RIDE will be opening shortly.";

        setTimeout(function () {
            $scope.$apply(
                $scope.ngModel1 = "RIDE has opened. Please remember to close it."
        )
        },60000);
        $('#modal5').modal('hide');


    };

    $scope.openJenkins = function () {

        var api = "API";
        $http({
            method: 'post',
            url: '/jenkins',
            data:[api]
        });
        $('#modal9').modal('hide');
        $scope.ngModel1 = "Jenkins will be opening shortly.";

        setTimeout(function () {
            $scope.$apply(
                $scope.ngModel1 = "Jenkins has opened. Please remember to close it."
        )
        },60000);



    };

    // For Step 3 end


    // For Step 4 start
        $scope.apiAnalyze = function () {

            $http({
                method: 'post',
                url: '/analyzeApi'
            }).then(function success(response) {

                console.log("resp", response)
            }, function error(error) {

                console.log("err", error)
            });
            $scope.ngModel1 = "Kibana will open in 30 seconds";

            setTimeout(function () {
                $scope.$apply(
                    $scope.ngModel1 = "Kibana has opened. Please remember to close it."
                )
            },60000);
            setTimeout(function () {
                $scope.$apply(function () {
                    $scope.ngModel1 = ''
                })
            }, 31000);

            setTimeout(function () {
                $scope.$apply(function () {
                    var  href="home/visualization" ;
                    $window.open(href,"_blank")
                })
            }, 30000);


        };

        // For Step 4 end

}]);