function setup() {
	createCanvas(960, 640);
	
	var baseColor = color(200,220,225),
		sakura = color(255,230,235),
		sakuraCenter = color(200, 20, 50),
		sakuraPollen = color(220,220,0);
	
	background(baseColor);
	noStroke();
	noFill();

	var columns = 36;
	var rows = 24;
	var w = width/columns;
	var h = height/rows;
	
	for (var x = 0; x < width; x += w) {
		for (var y = 0; y < height; y += h) {
			
			if (x >= w && x < w*(columns-2)) {
				
				if (y >= h && y < h*(rows/2)) {
					
					push();
					translate(x+w/2, y+h/2);

					var shape = Math.floor(random(0, 6));

					if (shape == 0 || shape == 1) {
	//				sakura w center
						noStroke();
						fill(sakuraCenter);
						ellipse(0, 0, w/4);
						push();
                        var r = random(0,5);
						for (var i = 0; i < r; i++) {
							noStroke();
							fill(sakura);
							ellipse(0, w/4, w/4, h/3);
							noStroke();
							fill(sakuraPollen);
							ellipse(0, w/6, w/12, h/12);
							rotate(PI/2.5);
						}
						pop();
					}
					else if (shape == 2 || shape == 3) {
	//				sakura w invert center
						noStroke();
						fill(sakuraPollen);
						ellipse(0, 0, w/4);
						push();
						for (var i = 0; i < r; i++) {
							noStroke();
							fill(sakura);
							ellipse(0, w/4, w/4, h/3);
							noStroke();
							fill(sakuraCenter);
							ellipse(0, w/6, w/12, h/12);
							rotate(PI/2.5);
						}
						pop();
					}
					else if (shape == 4) {
	//				sakura petal rotate right
						noStroke();
						fill(sakura);
						rotate(PI/3);
						ellipse(0, 0, w/4, h/3);
						fill(baseColor);
						arc(0, -1, w, h, PI*11/8, PI*13/8);
					}
					else if (shape == 5) {
	//				sakura petal rotate left
						noStroke();
						fill(sakura);
						rotate(-PI/3);
						ellipse(0, 0, w/4, h/3);
						fill(baseColor);
						arc(0, -1, w, h, PI*11/8, PI*13/8);
					}
					pop();
				}//end top sakura design
				
				else if (y >= h*(rows/2) && y < h*(rows-1)) {

					push();
					translate(x+w/2, y+h/2);

					var shape = Math.floor(random(0, 3));

					if (shape == 0) {
	//				sakura petal rotate right
						noStroke();
						fill(sakura);
						rotate(PI/3);
						ellipse(0, 0, w/4, h/3);
						fill(baseColor);
						arc(0, -1, w, h, PI*11/8, PI*13/8);
					}
					else if (shape == 1) {
	//				sakura petal rotate left
						noStroke();
						fill(sakura);
						rotate(-PI/3);
						ellipse(0, 0, w/4, h/3);
						fill(baseColor);
						arc(0, -1, w, h, PI*11/8, PI*13/8);
					}
					else if (shape == 2) {
	//				sakura mochi
						noStroke();
						fill(250,200,210);
						ellipse(0, 0, w*4/5, h*4/5);
						fill(100,130,80);
						arc(0, 0+h/5, w*1.2, h*1.2, PI*10/8, PI*14/8);
					}
					pop();
				}//end bottom petal and mochi design
				
				else {
					border(x, y, w, h);
				}//end top and bottom border design
			}//end design btw side borders
		
			else {
				border(x, y, w, h);
			}//end design for side borders
		}//end forLoop y
	}//end forLoop x
}//end setup

function border(x, y, w, h){

	var shape = Math.floor(random(0, 2));
		
	if (shape == 0) {
//		kanji

		var kx1 = x+w/16, //kanji x1
			ky1 = y+h/16; //kanji y1 (LOL)
		
		var kw = w*7/8, //kanji max width
			kh = h*7/8; //kanji max height

		var kx2 = kx1+kw, //kanji x2
			ky2 = ky1+kh; //kanji y2

		var kxChange = w/16,
			kyChange = h/16;
		
		var c = ['red', 'pink', 'white', 'black'];
  
        stroke(c[floor(random(0, c.length))]);
		strokeWeight(2.2);
		strokeCap(SQUARE);
		noFill();

		line(kx1+kxChange, ky1+kyChange, kx2-kxChange, ky1+kyChange);
		line(kx1+w/12, ky1+kyChange*3, kx2-w/12, ky1+kyChange*3);
		//longest h. stroke
		line(kx1, ky1+kyChange*5, kx2, ky1+kyChange*5);

		curve(x+w/5, y-1.5*h,
			kx1+kw/2, ky1, kx1, ky1+kyChange*10,
			x-w/2, y+h*4/8);
		curve(kx1+kw/2, ky1,
			kx1+kw*9/16, ky1+kyChange*5, kx2, ky1+kyChange*10,
			x+w, y+h*4/8);

		line(kx1+kxChange*3, ky1+kyChange*8, kx2-kxChange*3, ky1+kyChange*8);
		line(kx1+kxChange*3, ky1+kyChange*11, kx2-kxChange*3, ky1+kyChange*11);
		line(kx1+kxChange*3, ky1+kyChange*14, kx2-kxChange*3, ky1+kyChange*14);

		//longest v. strokes
		line(kx1+kxChange*3, ky1+kyChange*8, kx1+kxChange*3, ky1+kyChange*15);
		line(kx2-kxChange*3, ky1+kyChange*8, kx2-kxChange*3, ky1+kyChange*15);
	} else if(shape == 1) {
		noStroke();
		fill(255,255,255);
		rect(x, y+h/8, w, h*3/4);
		fill(255,0,0);
		ellipseMode(CENTER);
		ellipse(x+w/2, y+h/2, w/3, h/3);
	}
}//end border design