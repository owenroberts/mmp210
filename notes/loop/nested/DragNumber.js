class DragNumber {
	constructor(n, min, max, x, y) {
		this.n = n;
		this.min = min;
		this.max = max;
		this.x = x;
		this.y = y;
		this.h = _textSize;
		this.active = false;
		this.c = color(255);
	}
	display() {
		fill(51);
		rect(this.x, this.y, textWidth(this.n), this.h);
		fill(this.c);
		text(this.n, this.x, this.y);
	}
	update() {
		if (mouseIsPressed) {
			if (this.active) {
				this.n = constrain(this.n + (pmouseY - mouseY), this.min, this.max);
				if (pmouseY - mouseY != 0) 
					this.c = pmouseY - mouseY > 0 ? color(255, 255, 0) : color(0, 255, 255);
				return;
			}

			if (mouseX > this.x && mouseX < this.x + textWidth(this.n) &&
				mouseY > this.y && mouseY < this.y + this.h &&
				!dragging) {
				this.active = true;
				dragging = true;
			}
		} else {
			this.active = false;
			dragging = false;
			this.c = color(255);
		}
	}
}