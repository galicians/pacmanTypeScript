var __require = require("__require");
eval( __require("Cell.js") );
eval( __require("Pacman.js") );

describe('Cell', function() {
	var cell;
	var pacman;

	beforeEach(function() {
		cell = new CellType();
	})

	it('the default state should be empty', function() {
		expect(cell.state).toEqual('empty');
	});

	it('no content in cell by default', function() {
		expect(cell.content).toBeUndefined();
	});

	it('should be initialized in a position', function() {
		cell = new CellType(1, 2);
		expect(cell.posX).toEqual(1);
		expect(cell.posY).toEqual(2);
	});

	it('should be able to hold game entities', function() {
		pacman = new PacmanType('player2')
		cell.populate(pacman)
		expect(cell.content.type).toEqual('pacman')
	});

	it('when initialized the content shouldn\'t contain entities', function() {
		expect(cell.content).toBeUndefined();
	});

	it('should provide the type of entity when is populated', function() {
		pacman = new PacmanType('player2')
		cell.populate(pacman)
		expect(cell.getContent()).toEqual('pacman')
	});
	it('the state of a cell should change when populated', function() {
		cell.populate(pacman)
		expect(cell.state).toEqual('populated')
	});
	it('when populated with an entity should provide the type', function() {
		cell.populate(pacman)
		expect(cell.getContent()).toEqual('pacman')

	})

});