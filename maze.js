// Define maze layout
var maze = [
	[1, 1, 1, 1, 1],
	[0, 0, 1, 0, 1],
	[1, 0, 1, 0, 0],
	[1, 0, 0, 1, 1],
	[1, 1, 1, 0, 1]
];

// Define player position and direction
var player = {
	x: 0,
	y: 0,
	dir: "right"
};

// Define item locations
var items = [
	{ x: 1, y: 4, type: "key" },
	{ x: 4, y: 2, type: "door" },
	{ x: 3, y: 4, type: "key" },
	{ x: 1, y: 1, type: "key" }
];

// Define timer
var timeLeft = 60;

// Draw maze
function drawMaze() {
	var mazeDiv = document.getElementById("maze");
	mazeDiv.innerHTML = "";

	for (var y = 0; y < maze.length; y++) {
		for (var x = 0; x < maze[y].length; x++) {
			var cellDiv = document.createElement("div");
			cellDiv.className = "cell";

			if (maze[y][x] === 1) {
				cellDiv.classList.add("wall");
			}

			mazeDiv.appendChild(cellDiv);
		}
	}
}

// Draw player
function drawPlayer() {
	var playerDiv = document.getElementById("player");
	playerDiv.style.top = player.y * 20 + "px";
	playerDiv.style.left = player.x * 20 + "px";
	playerDiv.className = "player " + player.dir;
}

// Draw items
function drawItems() {
	var itemsDiv = document.getElementById("items");
	itemsDiv.innerHTML = "";

	for (var i = 0; i < items.length; i++) {
		var itemDiv = document.createElement("div");
		itemDiv.className = "item " + items[i].type;
		itemDiv.style.top = items[i].y * 20 + "px";
		itemDiv.style.left = items[i].x * 20 +
