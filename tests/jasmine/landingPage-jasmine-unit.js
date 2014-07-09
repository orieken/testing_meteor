/**
 * Created by oscar on 7/6/14.
 */
(function (){
    describe("Template.landingPage", function () {

        it("should have a greeting", function(){
            expect(Template.landingPage.greeting()).toBe("Welcome to meteor_testing.")
        });
    });
})();