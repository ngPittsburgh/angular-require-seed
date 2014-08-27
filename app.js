require.config({

    baseUrl: "",
    paths: {
        "angular": "bower_components/angular/angular"
    },
    shim: {
        "angular": {
            exports: "angular"
        }
    },
    priority: [
        "angular"
    ]
});

require(["angular"],
    function (angular) {


        var appModule = angular.module('DemoApp', []);


        appModule.controller("DemoCtrl", function () {

            this.title = "Hello World!";
        });


        angular.bootstrap(document.getElementsByTagName('body')[0], ['DemoApp']);
    })

