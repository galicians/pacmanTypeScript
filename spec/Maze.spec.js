var __require = require("__require");
eval( __require("Maze.js") );
eval( __require("Cell.js") );

describe("Maze", function() {
	var maze;
	var cell;

	beforeEach(function() {
		maze = new MazeType();
	});

	it("should have a default height and width", function() {
		expect(maze.height).toEqual(30);
		expect(maze.width).toEqual(30);
	});

	it("should have a name", function() {
		maze.name = 'pablo\'s maze';
	});

	it("should build a grid of default width", function() {
		maze.buildGrid();
		expect(maze.grid.length).toEqual(30);
	});

	it("should build a grid of default height", function() {
		maze.buildGrid()
		expect(maze.grid[0].length).toEqual(30)
	});

	beforeEach(function() {
		cell = CellType
		maze.populateGrid(cell)
	});

	it("should populate the its grid", function() {
		expect(maze.grid[0][0]).toBeDefined()
	});

	it("should be assign the position to the cells after populate grid", function() {
		expect(maze.grid[0][0].posX).toEqual(0)
		expect(maze.grid[0][0].posY).toEqual(0)
	})

})