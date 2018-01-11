class Pipe {
			constructor() {
				this.width = 60;
				this.height = 100;
				this.pipePos = canvas.width/2 + 100;
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
		ctx.rect(this.pipePos-5, this.height - pipeLid, this.width+10, pipeLid);
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
		ctx.rect(this.pipePos-5, canvas.height - this.height, this.width+10, pipelid);
		ctx.fillStyle = "black";
		ctx.fill();
		ctx.closePath();
	}
}
