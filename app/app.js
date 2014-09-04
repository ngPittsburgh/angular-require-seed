require.config({

    baseUrl: "",
    paths: {
        "angular": "bower_components/angular/angular",
        "angular-ui-router": "bower_components/angular-ui-router/release/angular-ui-router"
    },
    shim: {
        "angular": {
            exports: "angular"
        },
        "angular-ui-router" : {
            deps: ['angular']
        }
    },
    priority: [
        "angular"
    ]
});

require(["angular", "angular-ui-router", "router", "modules/home/home"],
    function (angular, uiRouter, router, homeModule) {

        var appModule = angular.module('App', [
            "ui.router",
            homeModule.name
        ]);

        appModule.config(router);

        angular.bootstrap(document.getElementsByTagName('body')[0], ['App']);
    });

