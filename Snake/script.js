var map = {
    width: 19,
    height: 16,
    mapGrid: [
    [['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W']],
    [['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], ['W']],
    [['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], ['W']],
    [['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], ['W']],
    [['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], ['F'], [' '], [' '], ['W']],
    [['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], ['W']],
    [['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], ['W']],
    [['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], ['W']],
    [['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], ['W']],
    [['W'], [' '], [' '], [' '], ['S'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], ['W']],
    [['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], ['W']],
    [['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], ['W']],
    [['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], ['W']],
    [['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], ['W']],
    [['W'], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], [' '], ['W']],
    [['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W'], ['W']]
    ]
};

var snek = {
	x: 0,
	y: 0,
	direction: "",
	tailArr: [],
	points: 0
}
 
function drawMap(map) {
	var main = document.createElement("div");
	for (var i = 0; i < map.width; i++) {
		var row = document.createElement("div");
		for (var j = 0; j < map.height; j++) {
			var col = document.createElement("div");
			if (map.mapGrid[j][i][0] == "W") {
				col.className = "wall";
			} else if (map.mapGrid[j][i][0] == " ") {
				col.className = "space";
			}
			else if (map.mapGrid[j][i][0] == "S") {
				col.className = "start";
				snek.x = j;
				snek.y = i;
			} else if (map.mapGrid[j][i][0] == "F") {
				col.className = "food";
			}

			row.appendChild(col);
			col.id = j + "," + i;

			row.style.float = "left";
		}
		main.appendChild(row);
	}
	document.body.appendChild(main);
}
var temp = 0;
document.onkeydown = function direction(e) {
	var kc = e.keyCode;

	switch (kc) { 
		case 37 : if (temp == 39 || temp == 37) { break; } else { snek.direction = "left"; } break;
		case 38 : if (temp == 40 || temp == 38) { break; } else { snek.direction = "up"; } break;
		case 39 : if (temp == 37 || temp == 39) { break; } else { snek.direction = "right"; } break;
		case 40 : if (temp == 38 || temp == 40) { break; } else { snek.direction = "down"; } break;
		default : break;
	}	
	temp = kc;
}

function moving() {
	setInterval(function(){ moveSnek(snek.direction); }, 100);
	setInterval(function(){ tail(snek.direction); }, 100);
}

function endingscreen() {
	var endingscreen = document.getElementById("wrapper");
	endingscreen.style.border = "1px solid black";
	document.getElementById("label").innerHTML = "DED SNEK";
	document.getElementById("points").innerHTML = "Points: " + snek.points;
}

function moveSnek(direction) {
	if (document.getElementById("label").innerHTML.indexOf("DED") == -1) {
		var x = snek.x;
		var y = snek.y;		

		switch (direction) {
			case "left" : y--; break;
			case "right" : y++; break;
			case "up" : x--; break;
			case "down" : x++; break;
			default : break;
		}
	
		var next = document.getElementById(x + "," + y)
		if (next.classList.contains("wall")) {
			endingscreen();
		} else if (next.classList.contains("player")) {
			endingscreen();
		} else if (next.classList.contains("food")) {
			nextFood();
			snek.points++;
		
			next.classList.add("player");
			next.classList.remove("food");		

			snek.tailArr.push(next);

			snek.x = x;
			snek.y = y;
		} else if (next.classList.contains("space")) {
			next.classList.add("player");
			next.classList.remove("space");
			
			snek.x = x;
			snek.y = y;
		}
		snek.tailArr.push(next); 	
	}
}

function tail(direction) {
	if (document.getElementById("label").innerHTML.indexOf("DED") == -1) {
		var x = snek.x;
		var y = snek.y;

		switch (direction) {
			case "left" : y++; break;
			case "right" : y--; break;
			case "up" : x++; break;
			case "down" : x--; break;
			default : break;
		}

		if(snek.tailArr.length > 1){
			snek.tailArr[0].classList.remove("player");
			snek.tailArr[0].classList.add("space");
			snek.tailArr.shift();
		}	
	}
}

function nextFood() {
	var foodX = Math.floor(Math.random() * (13 - 0 + 1)) + 1;
	var foodY = Math.floor(Math.random() * (16 - 0 + 1)) + 1;
	var f = document.getElementById(foodX + "," + foodY);
	console.log("food at: " + foodX + "," + foodY);

	while (f.classList.contains("player") || f.classList.contains("wall")) {
		foodX = Math.floor(Math.random() * (13 - 0 + 1)) + 1;
		foodY = Math.floor(Math.random() * (16 - 0 + 1)) + 1;
		f = document.getElementById(foodX + "," + foodY);
		console.log("landed in player or wall, new food at: " + foodX + "," + foodY);
	}
	f.classList.add("food");	
}