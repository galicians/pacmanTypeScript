interface IPacmanType {
	name: string;
	score: number;
	lives: number;
	posX: number;
	posY: number;
	type: string;
	isAlive(): boolean;
}

class PacmanType implements IPacmanType {
	score: number;
	lives: number;
	name: string;
	posX: number;
	posY: number;
	type: string;

	constructor(nameArg: string) {
		this.name = nameArg;
		this.score = 0;
		this.lives = 3;
		this.type = 'pacman';
	}
	isAlive(): boolean {
		return this.lives > 0
	}
	setPosition(posX: number, posY: number) {
		this.posX = posX;
		this.posY = posY
	}
	updateScore(bonus: number) {
		this.score += bonus
	}
	updateLives(lives: number) {
		this.lives += lives
	}
	newPosition(direction: string) {
		var newX: number = this.posX;
		var newY: number = this.posY;

		if(direction == 'up') {
			newX = this.posX;
			newY = this.posY - 1;
		}
		if(direction == 'down') {
			newX = this.posX + 1;
			newY = this.posY;
		}
		if(direction == 'left') {
			newX = this.posX;
			newY = this.posY - 1;
		}
 		if(direction == 'right') {
			newX = this.posX;
			newY = this.posY + 1;
		}
		return [newX, newY]
	}
	checkCellState(cell:any):string {
		return cell.state
	}
	move(direction: string, maze) {
		var position = this.newPosition(direction);
		var cell = maze.grid[position[0]][position[1]]
		if (this.checkCellState(cell) !== 'wall') cell.populate(this)
	}

}
