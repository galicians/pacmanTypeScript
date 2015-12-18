interface ICellType {
	state: string;
	posY: number;
	posX: number;
	content: any;
};

class CellType implements ICellType {

	state: string;
	posX: number;
	posY: number;
	content: any;
	
	constructor(posX: number, posY: number, state: string = "empty") {
		this.state = state;
		this.posX = posX;
		this.posY = posY;
		this.content = undefined;
	};

	populate(entity: any): void {
		this.content = entity
	};
}