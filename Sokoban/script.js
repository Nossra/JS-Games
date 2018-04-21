function renderMap(map) {
	var main = document.createElement("div");
	for (var i = 0; i < map.width; i++) {
		var row = document.createElement("div");
		for (var j = 0; j < map.height; j++) {
			var col = document.createElement("div");
			if (map.mapGrid[j][i][0] === "W") {
				col.className = tiles.wall;
			} else if (map.mapGrid[j][i][0] === "G") {
				col.className = tiles.goal;
			} else if (map.mapGrid[j][i][0] === " ") {
				col.className = tiles.space;
			} else if (map.mapGrid[j][i][0] === "P") {
				col.className = entities.character;
				player.positionX = j;
				player.positionY = i;
			} else if (map.mapGrid[j][i][0] === "B") {
				col.className = entities.block;
			} 

			col.id = j + "," + i;

			row.style.float ="left";

			row.appendChild(col);
		}
		main.appendChild(row);
	}
	document.getElementById("wrapper").appendChild(main);
}

var player = {
	positionX: 0,
	positionY: 0
}

var playing = true; 


document.onkeydown = function myKeyPress(e){
	var kc = e.keyCode;
	switch (kc) {
		case 37 : move("left"); break;
		case 38 : move("up"); break;
		case 39 : move("right"); break;
		case 40 : move("down"); break;
		default : break;
	}
}

function move(direction) {
	
	var x = player.positionX;
	var y = player.positionY;
	var xNext = player.positionX;
	var yNext = player.positionY;

	switch (direction) {
		case "left" : y--; yNext -= 2; break;
		case "right" : y++;  yNext += 2; break;
		case "up" : x--; xNext -= 2; break;
		case "down" : x++; xNext += 2; break;
		default : break;
	}

	var next = document.getElementById(x +"," + y);
	var nextNext = document.getElementById(xNext + "," + yNext);
	var previousPos = document.getElementById(player.positionX + "," + player.positionY);
	
	if (next.classList.contains("wall")) {
	console.log("wall in the way");
	} else if (next.classList.contains("block") && nextNext.classList.contains("block")) {
		console.log("can't move brah");
	} else if (next.classList.contains("block") && nextNext.classList.contains("wall")) {
		console.log("can't move brah, wall there");
	} else if (next.classList.contains("block") && nextNext.classList.contains("goal")) {
		nextNext.classList.add("win");
		nextNext.classList.add("block");
		
		next.classList.remove("block");
		next.classList.add("player");
		next.classList.remove("win");

		previousPos.classList.remove("player");
		previousPos.classList.add("space");
		previousPos.classList.remove("win");

		player.positionX = x;
		player.positionY = y;
	} else if (next.classList.contains("block")) {
		nextNext.classList.add("block");
		nextNext.classList.remove("space");

		next.classList.remove("block");
		next.classList.add("player");
		next.classList.remove("win");

		previousPos.classList.remove("player");
		previousPos.classList.add("space");
		previousPos.classList.remove("win");

		player.positionX = x;
		player.positionY = y;
	} else {
		next.classList.remove("space");
		next.classList.add("player");
		next.classList.remove("win");

		previousPos.classList.remove("player");
		previousPos.classList.add("space");

		player.positionX = x;
		player.positionY = y;
	}	

	win();
}

function win() {
	
	var counter = 0;
	for (var i = 9; i < 12; i++) {
		for (var j = 16; j < 18; j++) {
			var goal = document.getElementById(i+","+j);
			if (goal.classList.contains("win")) {
				counter++;
			}	
		}
	}

	if (counter == 6) {
		document.getElementById("winlabel").innerHTML = "YOU WON";
		
	}
}

