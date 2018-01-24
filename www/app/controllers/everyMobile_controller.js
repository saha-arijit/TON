/**
 * Created by rabeesh on 22/1/18.
 */
kibanaApp.controller('everyMobileController', ['$scope', '$http', 'Upload', function ($scope, $http, Upload) {
    $(document).ready(function(){

        // Removing Classes
        var alterClass = function() {
            var ww = document.body.clientWidth;
            if (ww < 768) {
                $('#sidebar').removeClass('fullheight');
                $('#content').removeClass('fullheight');
                $('#contactUs').removeClass('force-to-bottom');
            } else if (ww >= 768) {
                $('#content').addClass('fullheight');
                $('#sidebar').addClass('fullheight');
            };
        };
        $(window).resize(function(){
            alterClass();
        });

        alterClass();

        // Equalizing the Sidebar and Page Content
        var x =$(window).height();
        var  z =$('#nav').height() + 3;
        console.log(z,"nav height");
        var y = x-z;
        console.log(y);

        $(".fullheight").height(y);

    });

}]);