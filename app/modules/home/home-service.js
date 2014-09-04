define(function () {

    "use strict";

    function HomeService () {


    }

    HomeService.prototype.getLocation = function () {
        return "World";
    };

    return [HomeService];
});