var DEFAULT_HEIGHT = 30;
var DEFAULT_WIDTH = 30;
var MazeType = (function () {
    function MazeType(height, width) {
        this.height = height || DEFAULT_HEIGHT;
        this.width = width || DEFAULT_WIDTH;
    }
    MazeType.prototype.buildGrid = function () {
        this.grid = new Array(this.width);
        for (var i = 0; i < this.width; i++) {
            this.grid[i] = new Array(this.height);
        }
    };
    MazeType.prototype.populateGrid = function (Cell) {
        this.buildGrid();
        for (var x = 0; x < this.width; x++) {
            for (var y = 0; y < this.height; y++) {
                this.grid[x][y] = new Cell(x, y, 'empty');
            }
        }
    };
    MazeType.prototype.place = function (entity, position) {
        this.grid[position[0]][position[1]].populate(entity);
        entity.setPosition(position[0], position[1]);
    };
    MazeType.prototype.walledUpGrid = function () {
        for (var x = 0; x < 30; x++) {
            for (var y = 0; y < 30; y++) {
                if (x == 0)
                    this.grid[x][y].wallUp();
                if (y == 0)
                    this.grid[x][y].wallUp();
            }
        }
    };
    return MazeType;
})();
