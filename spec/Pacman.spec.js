var __require = require("__require");
eval( __require("Pacman.js") );
eval( __require("Cell.js") );

describe("Pacman", function() {
	var pacman;

	beforeEach(function() {
		pacman = new PacmanType('player1')
	})

	it("should have a type", function() {
		expect(pacman.type).toEqual('pacman');
	})//TO DO

	it("should have a name", function() {
		expect(pacman.name).toEqual('player1')
	});

	it("should accept a position", function() {
		pacman.setPosition(1,2)
		expect(pacman.posX).toEqual(1)
		expect(pacman.posY).toEqual(2)
	});

	it("should update its score", function() {
		pacman.updateScore(15)
		expect(pacman.score).toEqual(15)
		pacman.updateScore(-5)
		expect(pacman.score).toEqual(10)
	});

	it("should know how many lifes has left", function() {
		expect(pacman.lives).toEqual(3);
	});

	it("should know when is alive", function() {
		pacman.lives = 0
		expect(pacman.isAlive()).toBeFalsy()
	});

	it("should manage its lives", function() {
		pacman.updateLives(2)
		expect(pacman.lives).toEqual(5)
		pacman.updateLives(-3)
		expect(pacman.lives).toEqual(2)
	});

	it("should calculate new potential position, depending on input", function() {
		pacman.setPosition(2, 2)
		expect(pacman.newPosition('up')).toEqual([2,1])
		expect(pacman.newPosition('down')).toEqual([3,2])
		expect(pacman.newPosition('left')).toEqual([2,3])
		expect(pacman.newPosition('right')).toEqual([2,1])
	});

	it("should know the state of a cell", function() {
		cell = new CellType()
		expect(pacman.checkCellState(cell)).toEqual('empty');
	});
	it("should move to an empty cell", function() { // TO DO AFTER MAZE
		cell = new CellType()
	})

});
//    ;2,1
// 2,1;2,2;2,3
//    ;3,2;