var BrightcovePlayer = require("nativescript-brightcove-player").BrightcovePlayer;
var brightcovePlayer = new BrightcovePlayer();

describe("greet function", function() {
    it("exists", function() {
        expect(brightcovePlayer.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(brightcovePlayer.greet()).toEqual("Hello, NS");
    });
});