interface ICellType {
	posY: number;
	posX: number;
	content: any;
	state: string;
};

var STATES: string[] = ['empty', 'wall', 'populated'];

class CellType implements ICellType {

	posX: number;
	posY: number;
	content: any;
	state: string;
	
	constructor(posX: number, posY: number, state: string = "empty") {
		this.state = state;
		this.posX = posX;
		this.posY = posY;
		this.content = undefined;
		this.state = 'empty'
	};
	populate(entity: any) {
		this.content = entity
		this.state = 'populated'
	};
	getContent():string {
		return (this.state === 'populated') ? this.content.type : this.state
	}
	wallUp() {
		this.content = 'wall'
		this.state = 'wall'
	}

}