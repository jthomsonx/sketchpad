// Setting initial default options for grid.
var gridSize = 48;
var option = "default";

// Create the default grid when document is ready.
//$(document).ready(function() {
//	createGrid(gridSize, option);
//});
document.addEventListener("DOMContentLoaded", function() {
	createGrid(gridSize, option);
});

// Clear the current sketch
//document.getElementById("clear").onclick = function() {
//};
$("#clear").click(function() {
	$(".cell").css({"background-color": "white", "opacity": "1"});
});

// Creates new grid with default option.
document.getElementById("default").onclick = function() {
	updateGrid("default");
};
// Creates new grid with gradient option.
document.getElementById("gradient").onclick = function() {
	updateGrid("gradient");
};
// Creates new grid with Multi-colour option.
document.getElementById("colour").onclick = function() {
	updateGrid("colour");
};

// Function to create grid and allow sketchpad operation.
function createGrid(number, option) {

	// Creates a specified grid of divs based on input number
	for (var i = 0; i < number; i++) {
		for (var j = 0; j < number; j++) {
			var cell = $("<div class='cell'></div>");
			cell.appendTo("#grid");
		};
	};

	// Resize cells to fit available grid area
	var width = ($("#grid").width()) / gridSize;
	$(".cell").css({"width": width, "height": width});

	// Call cell on mouseenter.
	$(".cell").mouseenter(function() {
		// Default option. Change cell colour to black.
		if (option === "default") {
			$(this).css("background-color", "black");
		};
		// Option for decreasing opacity to full black.
		if (option === "gradient") {
			$(this).css("opacity", $(this).css("opacity") * 0.75);
		};
		// Option for Multi-colour cells.
		if (option === "colour") {
			$(this).css("background-color", getColour());
		};
	});
};

// Function for updating grid
function updateGrid(option) {
	// Removes the current cell set up.
	$(".cell").remove();
	// Get new number of cells from user
	gridSize = parseInt(prompt("Enter number of cells per row (1 - 100): ",48),10);
	if (gridSize > 0 && gridSize <= 100) {
		createGrid(gridSize, option);
	}
	else {
		alert("Sorry, invalid input!");
	}
};

// Helper function for random colour generation.
function getColour() {
	var red = Math.floor((Math.random()*255)+1);
	var green = Math.floor((Math.random()*255)+1);
	var blue = Math.floor((Math.random()*255)+1);
	return "rgb(" + red + "," + green + "," + blue + ")";
};