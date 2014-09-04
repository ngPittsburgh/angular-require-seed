define(function (require) {

    "use strict";

    var angular = require("angular");
    var homeController = require("modules/home/home-controller");
    var homeService = require("modules/home/home-service");

    var homeModule = angular.module("Home", []);

    homeModule.controller("HomeCtrl", homeController);
    homeModule.service("HomeService", homeService);

    return homeModule;
})