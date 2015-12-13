interface ICellType {
	state: string;
	posY: number;
	posX: number;
	content: any;
	states: string[]: ['empty', 'wall', 'populated'];
};

class CellType implements ICellType {

	state: string;
	posX: number;
	posY: number;
	content: any;
	
	constructor(posX: number, posY: number, state: string) {
		this.state = state || 'empty';
		this.posX = posX;
		this.posY = posY;
		this.content = undefined;
	};

	populate(entity: any): void {
		this.content = entity
	};
}