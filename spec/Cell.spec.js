var __require = require("__require");
eval( __require("Cell.js") );

describe('Cell', function() {
	var cell;

	it('the default state should be empty', function() {
		cell = new CellType();
		expect(cell.state).toEqual('empty');
	});

	it('should be initialized in a position', function() {
		cell = new CellType(1, 2);
		expect(cell.posX).toEqual(1);
		expect(cell.posY).toEqual(2);
	});

	it('should be able to hold game entities', function() {
		cell = new CellType();
		var pacman = new function() {
			this.name = 'pacman'
		}
		cell.populate(pacman)
		expect(cell.content.name).toEqual('pacman')
	});

	it('when initialized the content shouldn\'t contain entities', function() {

	});

});