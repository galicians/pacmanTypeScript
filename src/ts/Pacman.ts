interface IPacmanType {
	name: string;
	points: number;
	isAlive(): boolean;
}

class PacmanType implements IPacmanType {
	name: string;
	points: number;
	constructor(nameArg: string, pointsArg: number) {
		this.name = nameArg;
		this.points = pointsArg;
	}
	isAlive(): boolean {
		return this.points > 0
	}

}
