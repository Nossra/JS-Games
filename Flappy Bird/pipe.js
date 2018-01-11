class Pipe {
	constructor() {
		this.width = 60;
		this.height = 0;	
		this.x = canvas.width;
		this.topPart = 6;
	}	
}

class TopPipe extends Pipe {
	constructor(h) {
		super();
		this.height = h;
		console.log(this.height);
	} 

	draw() {
		ctx.beginPath();
		ctx.rect(this.x, 0, this.width, this.height);
		ctx.fillStyle = "black";
		ctx.fill();
		ctx.closePath();

		var pipeLid = 30;
		ctx.beginPath();
		ctx.rect(this.x-3, this.height - pipeLid, this.width+this.topPart, pipeLid);
		ctx.fillStyle = "black";
		ctx.fill();
		ctx.closePath();
	}
}

class BottomPipe extends Pipe {
	constructor(h) {
		super();
		this.height = h;
		console.log(this.height);
	}

	draw() {
		ctx.beginPath();
		ctx.rect(this.x, canvas.height - this.height, this.width, this.height);
		ctx.fillStyle ="black";
		ctx.fill();
		ctx.closePath();

		var pipelid = 30;
		ctx.beginPath();
		ctx.rect(this.x-3, canvas.height - this.height, this.width+this.topPart, pipelid);
		ctx.fillStyle = "black";
		ctx.fill();
		ctx.closePath();
	}
}
