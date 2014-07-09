/**
 * Created by oscar on 7/6/14.
 */
Template.landingPage.greeting = function () {
    return "Welcome to meteor_testing.";
};

Template.landingPage.events({
    'click input': function () {

        if (typeof console !== 'undefined')
            console.log("You pressed the button");
    }
});