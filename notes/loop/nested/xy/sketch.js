let _W = 500;
let _H = 400;
let _textSize = 20;
let _x, _y, _w, _h, _c, _r, _oX, _oY, _s;
let drags = [];
let dragging = false;

function setup() {
	createCanvas(_W, 620);
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
	_oX = new DragNumber(0, 0, 50, 240, 90); // x offset
	_oY = new DragNumber(0, 0, 50, 330, 90); // y offset
	_s = new DragNumber(_c.n/2, 1, 200, 380, 90); // size
	drags = [_x, _y, _w, _h, _c, _r, _oX, _oY, _s];
}

function draw() {
	background(220);

	push();
	translate(0, 220);

	fill(51);
	rect(0, 0, width, _H);
	
	for (let x = _x.n; x <= _w.n; x += _c.n) {
		for (let y = _y.n; y <= _h.n; y += _r.n) {
			fill(255);
			ellipse(x + _oX.n, y + _oY.n, _s.n);
			
			fill(0, 255, 0);
			ellipse(x, y, 5);
		}
	}

	pop();

	fill(220);
	rect(0, 0, width, 220);

	fill(0);
	// text(`for (let x = ${_x.n}; x <= ${_w.n}; x += 100) {`, _W, 30);
	text(`for (let x =   ; x <=   ; x +=    ) {`, 0, 30);
	text('    for (let y = 0 ; y <=   ; y +=    ) {', 0, 60);
	text('        ellipse(x +   , y +   ,    );', 0, 90);
	text('    }', 0, 120);
	text('}', 0, 150);

	drags.forEach(drag => {
		drag.display();
		drag.update();
	});

	
}