function setup() {
	createCanvas(640, 360);
	background(200);
	fill(255);
	noStroke();
	
//	var space = 100;
//	for (var x = 50; x < width; x += space) {
//		ellipse(x, height/2, 40);
//	}
	
	var faceSize = 100;
	var eyeSize = 20;
	var eyeOffset = 20;
	
	var columnSize = width/4;
	var rowSize = height/3;
	var count = 0;
	for (var x = 0; x <= width; x += columnSize) {
		// line(x, 0, x, height);
		//ellipse(x, y, 50);
		for (var y = 0; y <= height; y += rowSize) {
			//line(0, y, width, y);
			//fill(x, y, y-x);
			fill(255);
			/* face */
			ellipse(x, y, faceSize);
			/* eyes */
			fill(x, y, 255);
			ellipse(x + eyeOffset, y - eyeOffset, eyeSize);
			ellipse(x - eyeOffset, y - eyeOffset, eyeSize);
			
			/* mouth */
			rectMode(CENTER);
			rect(x, y + eyeOffset, faceSize/2, eyeSize, eyeSize/2);
			if (count == 6) {
				/* nose */
				triangle(x,y+eyeOffset/4,x+eyeOffset,y-eyeOffset/4,x-eyeOffset,y-eyeOffset/4);
			}
			
			count++;
			
			
		}
	}
	

}
