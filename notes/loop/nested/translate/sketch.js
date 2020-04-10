let _W = 500;
let _H = 400;
let _textSize = 20;
let _x, _y, _w, _h, _c, _r, _oX, _oY, _s;
let drags = [];
let dragging = false;

function setup() {
	createCanvas(_W, 700);
	noStroke();
	textSize(_textSize);
	textFont('Monaco');
	textAlign(LEFT, TOP);

	_x = new DragNumber(0, -100, _W, 155, 30);
	_y = new DragNumber(0, -100, _H, 205, 60);
	_w = new DragNumber(_W, 0, _W, 255, 30);
	_h = new DragNumber(_H, 0, _H, 304, 60);
	_c = new DragNumber(100, 1, _W, 370, 30); // 0 will stack overflow
	_r = new DragNumber(100, 1, _H, 420, 60);
	_oX = new DragNumber(0, 0, 50, 200, 150); // x offset
	_oY = new DragNumber(0, 0, 50, 250, 150); // y offset
	_s = new DragNumber(_c.n/2, 1, 200, 310, 150); // size
	drags = [_x, _y, _w, _h, _c, _r, _oX, _oY, _s];
}

function draw() {
	background(51);
	
	push();
	translate(0, 300);

	fill(51);
	rect(0, 0, width, _H);

	for (let x = _x.n; x <= _w.n; x += _c.n) {
		for (let y = _y.n; y <= _h.n; y += _r.n) {
			fill(255);
			push();
			translate(x, y);
			ellipse(_oX.n, _oY.n, _s.n);
			
			fill(0, 255, 0);
			ellipse(0, 0, 5);
			pop();
		}
	}

	pop();
	
	fill(220);
	rect(0, 0, width, 300);

	fill(0);
	text(`for (let x =   ; x <=   ; x +=    ) {`, 0, 30);
	text('    for (let y = 0 ; y <=   ; y +=    ) {', 0, 60);
	text('        push();', 0, 90);
	text('        translate(x, y);',0 , 120);
	text('        ellipse(   ,    ,    );', 0, 150);
	text('        pop();', 0, 180);
	text('    }', 0, 210);
	text('}', 0, 240);

	drags.forEach(drag => {
	  drag.display();
	  drag.update();
	});
}