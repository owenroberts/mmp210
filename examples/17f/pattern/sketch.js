
function setup() {
	createCanvas(640, 640);
	background("white");
	fill(255);
	stroke(0);
	noStroke();
	var numberOfRectangles = 128;
	var columns = Math.sqrt(numberOfRectangles);
	var rows = columns;
	var rectWidth = width/columns;
	var rectHeight = height/rows;
	
	for (var x = 0; x < width; x += rectWidth) {
		for (var y = 0; y < height; y += rectHeight) {
			
			if (y > height * 3/4) {
				/* grass */
				
				var grassWidth = rectWidth/20;
				for (var i = 0; i < rectWidth; i += grassWidth) {
					var c = color(
						random(0, 50), // red
						random(150,255), // green
						random(50, 150)
					);
					fill(c);
					var grassHeight = random(rectHeight/2, rectHeight);
					rect(
						x + i, 
						y + grassHeight, 
						grassWidth, 
						rectHeight - grassHeight
					);
				}
				var flowerWidth = random(rectWidth/4, rectWidth/2);
				for (var i = 0; i < 5; i++) {
					var f = color(
						random(150,255),
						random(0, 50),
						random(100, 255)
						);
					fill(f);
					ellipse(
						x + random(rectWidth/4, rectWidth*3/4), 
						y + random(rectHeight/4, rectHeight/2), 
						flowerWidth
					);
					flowerWidth -= 8;
				}
			} else {
				var c = color(
					random(0,50), // red
					random(50, 100), // green
					random(180, 255)
				);
				fill(c);
				rect(x,y,rectWidth,rectHeight);
			}
			
			
			
			
			
			

		}
	}
	
	
}

function draw() {
	
}