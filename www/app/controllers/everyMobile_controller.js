/**
 * Created by rabeesh on 22/1/18.
 */
kibanaApp.controller('everyMobileController', ['$scope', '$http', 'Upload', function ($scope, $http, Upload) {
    $(document).ready(function(){
        var x =$(window).height();
        var  z =$('#nav').height()+ 2;
        console.log(z);
        var y = x-z;
        $(".fullheight").height(y);

    });


}]);