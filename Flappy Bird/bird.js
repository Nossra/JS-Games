class Bird {

	constructor() {
		this.Width = 20;
		this.Height = 20;
		this.x = canvas.width/5;
		this.y = canvas.height/2;
		this.jump = 60;
		this.isAlive = true;	
		this.score = 0;
	};

	draw() {
		ctx.beginPath();
		ctx.rect(this.x, this.y, this.Width, this.Height);
		ctx.fillStyle = "black";
		ctx.fill();
		ctx.closePath();	
	}

	gravity() {
		var gravity = 2.3;
		bird.y += gravity
		if (bird.y >= canvas.height-bird.Height/2) {
			bird.isAlive = false;
		}	
	}
}
