interface IMazeType {
	height: number;
	width: number;
	name: string;
	content: any[];
	grid: any[];
}

var DEFAULT_HEIGHT: number = 30;
var DEFAULT_WIDTH: number = 30;

class MazeType implements IMazeType {
	height: number;
	width: number;
	name: string;
	content: any[];
	grid: any[];

	constructor(height: number, width: number) {
		this.height = height || DEFAULT_HEIGHT;
		this.width = width || DEFAULT_WIDTH;
	}

	buildGrid() {
		this.grid = new Array(this.width)
		for (var i = 0; i < this.width; i++ ) {
			this.grid[i] = new Array(this.height)
		}
	}

	populateGrid(Cell) {
		this.buildGrid()
		for (var x = 0; x < this.width; x++) {
			for (var y = 0; y < this.height; y++) {
				this.grid[x][y] = new Cell(x, y, 'empty');
			}
		}
		// console.log('this.grid', this.grid)
	}

}
