var __require = require("__require");
eval( __require("Maze.js") );
eval( __require("Cell.js") );

describe("Maze", function() {
	var maze;

	beforeEach(function() {
		maze = new MazeType();
	});

	it("should have a default height and width", function() {
		expect(maze.height).toEqual(30);
		expect(maze.width).toEqual(30);
	});

	
})