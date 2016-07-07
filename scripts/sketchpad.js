
$(document).ready(
	createGrid
	);

// Function to create a 16 x 16 grid of divs
	function createGrid() {
		var gridSize = 16;
		for (var i = 0; i < gridSize; i++) {
			for (var j = 0; j < gridSize; j++) {
				var cell = $("<div class='cell'></div>");
				cell.appendTo("#container");
			};
		};	
	};

// Function to change colour when mouse enters div box.
//function mouEnt () {
//	$(".cell").mouseenter(function() {
//		$(this).addClass("enter");
//	};
//};


