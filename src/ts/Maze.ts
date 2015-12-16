


interface IMazeType {
	height: number;
	width: number;
	name: string;
	content: any[];
}

var DEFAULT_HEIGHT: number = 30;
var DEFAULT_WIDTH: number = 30;

class MazeType implements IMazeType {
	height: number;
	width: number;
	name: string;
	content: any[];

	constructor(height: number, width: number) {
		this.height = height || DEFAULT_HEIGHT;
		this.width = width || DEFAULT_WIDTH;
		// this.content = 
	}

	// createGrid():[] {

	// }
}
