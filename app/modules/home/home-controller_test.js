define(function (require) {

    describe('Home Controller Test', function () {

        var sut;

        var angular = require("angular");
        var mocks = require("angular-mocks");

        var homeModule = require("modules/home/home");

        beforeEach(function () {

            mocks.module(homeModule.name);
        });

        beforeEach(function () {
            mocks.module(function ($provide) {
                $provide.value("HomeService", {
                    getLocation : jasmine.createSpy("HomeService getLocation")
                });
            });
        });

        beforeEach(function () {
            mocks.inject(function ($controller) {

                sut = $controller("HomeCtrl");
            });
        });

        it('should pass', function () {
            expect(sut).toBeDefined();
        });

    });
});