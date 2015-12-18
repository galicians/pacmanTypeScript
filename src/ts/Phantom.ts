interface IPhantomType {
	speed: number;
	type: string;
	posX: number;
	posY: number;
	inceptionPeriod: number;
	harmful: boolean; 
}

class PhantomType implements IPhantomType {
	speed: number;
	type: string;
	posX: number;
	posY: number;
	inceptionPeriod: number;
	harmful: boolean;

	constructor(inceptionPeriod: number = 3000) {
		this.speed = 1;
		this.harmful =  false;
		this.type = 'phantom'
		setTimeout( function() {
			this.harmful = true;
		}, inceptionPeriod)
	}
	
	setPosition(posX: number, posY: number) {
		this.posX = posX;
		this.posY = posY
	}


}