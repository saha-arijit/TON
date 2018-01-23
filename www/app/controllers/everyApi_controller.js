/**
 * Created by rabeesh on 22/1/18.
 */
kibanaApp.controller('everyApiController', ['$scope', '$http', 'Upload', function ($scope, $http, Upload) {


    $(document).ready(function(){
        var alterClass = function() {
            var ww = document.body.clientWidth;
            if (ww < 768) {
                $('#sidebar').removeClass('fullheight');
                $('#content').removeClass('fullheight');
            } else if (ww >= 768) {
                $('#content').addClass('fullheight');
                $('#sidebar').addClass('fullheight');
            };
        };
        $(window).resize(function(){
            alterClass();
        });
        //Fire it when the page first loads:
        alterClass();
        var x =$(window).height();
        var  z =$('#nav').height() + 3;
        console.log(z);
        var y = x-z;
        console.log(y);

        $(".fullheight").height(y);

    });
}]);