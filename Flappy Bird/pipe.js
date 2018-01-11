class Pipe {
	constructor() {
		this.width = 60;
		this.height = 100;
		this.pipePos = canvas.width;
		this.topPart = 6;
	}	
}

class TopPipe extends Pipe {
	constructor() {
		super();
	}

	draw() {
		ctx.beginPath();
		ctx.rect(this.pipePos, 0, this.width, this.height);
		ctx.fillStyle = "black";
		ctx.fill();
		ctx.closePath();

		var pipeLid = 30;
		ctx.beginPath();
		ctx.rect(this.pipePos-3, this.height - pipeLid, this.width+this.topPart, pipeLid);
		ctx.fillStyle = "black";
		ctx.fill();
		ctx.closePath();
	}
}

class BottomPipe extends Pipe {
	constructor() {
		super();
	}

	draw() {
		ctx.beginPath();
		ctx.rect(this.pipePos, canvas.height - this.height, this.width, this.height);
		ctx.fillStyle ="black";
		ctx.fill();
		ctx.closePath();

		var pipelid = 30;
		ctx.beginPath();
		ctx.rect(this.pipePos-3, canvas.height - this.height, this.width+this.topPart, pipelid);
		ctx.fillStyle = "black";
		ctx.fill();
		ctx.closePath();
	}
}
