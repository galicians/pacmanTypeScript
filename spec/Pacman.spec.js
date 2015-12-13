var __require = require("__require");
eval( __require("Pacman.js") );

describe("Pacman", function() {
	var pacman;

	it("should have a name", function() {
		pacman = new PacmanType('player1');
		expect(pacman.name).toEqual('player1');
	});

	it("should have a number of points", function() {
		pacman = new PacmanType('player', 50)
		expect(pacman.points).toEqual(50)
	});

	it("should know when is alive", function() {
		pacman = new PacmanType('player', 0)
		expect(pacman.isAlive()).toBeFalsy()
	})

	it("should be aware of his position")

});