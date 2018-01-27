/**
 * Created by rabeesh on 22/1/18.
 */
kibanaApp.controller('everyMobileController', ['$scope', '$http', 'Upload', function ($scope, $http, Upload) {
    $(document).ready(function(){


        // Removing Classes
        var alterClass = function() {
            // Equalizing the Sidebar and Page Content
            var windowHeight =$(window).height();
            var  navHeight =$('#nav').height() ;
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

}]);