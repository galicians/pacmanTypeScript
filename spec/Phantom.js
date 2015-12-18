var __require = require("__require");
eval( __require("Phantom.js") );

describe('Phantom', function() {
	var phantom;

	beforeEach(function() {
		phantom = new PhantomType();
	})

	it('should be initialized at speed 1', function() {
		expect(phantom.speed).toEqual(1);
	});

	it('shouldn\'t be harmful when initialized', function() {
		expect(phantom.harmful).toBeFalsy();
	});

	it('should be harmful after inception period', function() {
		phantom = new PhantomType();
		// expect(phantom.harmful).toBeTruthy();
	}); // TO DO ( FIND A WAY TO TEST SETTIMEOUT)

})