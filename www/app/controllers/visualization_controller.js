kibanaApp.controller('visualizationController',['$scope','$http','$location','$rootScope','$interval','$state',
    function ($scope,$http,$location,$rootScope,$interval,$state) {

        $(document).ready(function(){
            $rootScope.interval=true;
            if ($location.path()==='/home/visualization') {
                delay();

            }          function delay () {

                var timerStop  =     $interval(function hai() {
                    if( $rootScope.interval){
                        $state.transitionTo($state.current, {}, {reload:true});

                        console.log("$rootScope.interval:true in mobile")

                    }
                    else {
                        $interval.cancel(timerStop)
                    }


                },30000);

            };
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


                $('.test1').css('height',a1);

                $('.test2').css('height',a2);
                $('.test3').css('height',a3);
                $('.test4').css('height',a4);

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
                    $(".fullheight").height(contentHeight);
                    $("#iframe").height(contentHeight);
                    $('#sidebar').addClass('fullheight');
                    $('#contactUs').addClass('force-to-bottom');
                    // $('#').addClass('force-to-bottom');


                    // var sidebar = $('#sidebar').outerHeight()
                    // alert(sidebar)
                    //
                    // $("#iframe").height(sidebar);
                    // $('#contactUs').addClass('force-to-bottom');
                    // $('#iframe').addClass('force-to-bottom');

                };
            };
            $(window).resize(function(){
                alterClass();
            });

            alterClass();


        });


    }]);