/**
 * Created by oscar on 7/6/14.
 */
describe("landingPage", function () {
    before(function () {
    });

    after(function () {
        //clean up
    });

    describe("Something", function () {
        it("does something cool", function () {
            var thingOne = "hi";
            chai.assert.equal(thingOne, "hi");
        });
    });
});

describe("LandingPage", function () {
    before(function(){
    });

    it("has h1", function () {
        var div = document.createElement("DIV");
        var comp = UI.render(Template.landingPage);
        UI.insert(comp, div);
        chai.assert.equal($(div).find('h1').text(),"Hello World!")
    });

    it("has a button", function(){
        var div = document.createElement("Div");
        var comp = UI.render(Template.landingPage);
        UI.insert(comp, div);
        chai.assert.equal($(div).find('input').css('type', 'button')[0].value, 'Click')
    })
});