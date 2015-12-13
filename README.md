TDD: PACMAN(TYPESCRIPT)

Typescript version: Version 1.7.3

Test framework for TDD: jasmine

Javascript Task Runner: Gulp

To run the tests: gulp
- This gulp task will watch all the typeScript files in the src/ts folder and on any change on those files will compile the new typeScript source code, generating *.js files on src/js.
Once the js files are generated it will run the tests against these files, displaying on the console what tests are passing.


CLASSES:
CELL
PACMAN 
PHANTOM
MAZE


JASMINE MATCHERS:

expect(fn).toThrow(e);
expect(instance).toBe(instance);
expect(mixed).toBeDefined();
expect(mixed).toBeFalsy();
expect(number).toBeGreaterThan(number);
expect(number).toBeLessThan(number);
expect(mixed).toBeNull();
expect(mixed).toBeTruthy();
expect(mixed).toBeUndefined();
expect(array).toContain(member);
expect(string).toContain(substring);
expect(mixed).toEqual(mixed);
expect(mixed).toMatch(pattern)

https://github.com/JamieMason/Jasmine-Matchers

Jasmine wiki:
https://github.com/jasmine/jasmine/wiki