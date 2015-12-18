var DEFAULT_HEIGHT = 30;
var DEFAULT_WIDTH = 30;
var MazeType = (function () {
    function MazeType(height, width) {
        this.height = height || DEFAULT_HEIGHT;
        this.width = width || DEFAULT_WIDTH;
        this.grid;
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
        // console.log('this.grid', this.grid)
    };
    return MazeType;
})();
