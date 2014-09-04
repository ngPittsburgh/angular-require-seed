define(function () {

    "use strict";

    function HomeController(HomeService) {

        this.location = HomeService.getLocation();
    }

    return ['HomeService', HomeController];
});