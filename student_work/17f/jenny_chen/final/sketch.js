var score = 0;
var ball = {
	alive: true,
	gameover: false,
	x: 200,
	y: 0,
	size: 35,

	speedX: 20,
	speedY: 20,

	display: function () {
		//"Annoying Fly"//
		frameRate(60);
		// Wing
		stroke("cyan");
		strokeWeight(1);
		fill("#87CEFA");
		ellipse(this.x, this.y, 65, 5);

		// Body
		noStroke();
		fill("black");
		ellipse(this.x, this.y + 5, this.size);

		// Mouth
		fill("grey");
		strokeWeight();
		textFont("chalkboard");
		textSize(12);
		text("w", this.x - 3, this.y, 5, 20);

		// Leg
		fill("black");
		strokeWeight();
		text("^", this.x - 5, this.y + 20, 18, 18);
		text("^", this.x + 5, this.y + 20, 18, 18);

		// Eyes
		stroke("crimson");
		strokeWeight(1);
		fill("red");
		ellipse(this.x + 8, this.y - 5, 16, 16);
		ellipse(this.x - 8, this.y - 5, 16, 16);

		// Pupil
		strokeWeight();
		fill("black");
		ellipse(this.x + 6, this.y - 5, 8, 8);
		ellipse(this.x - 6, this.y - 5, 8, 8);
	},

	update: function () {

		// update code
		// replace "ball" with "this"
		if (this.x > width || this.x < 0) {
			this.speedX *= -1;
		}

		if (this.y > height || this.y < 0) {
			this.speedY *= -1;
		}
		this.x += this.speedX;
		this.y += this.speedY;

		if (this.alive) {
			//			music.loop();
		} else if (this.alive === false) {
			music.stop();
			smacksound.stop();
			slap.stop();
		}
	},

	clicked: function () {
		let d = dist(mouseX, mouseY, this.x, this.y);
		console.log('the distance is ' + d);
		if (d < this.size) {
			console.log('kill');
			this.alive = false;
			tada.play();
		}
	},

	isAlive: function () {
		if (!this.alive) {
			console.log('the fly is dead');
			this.display = function () {
				this.gameover = true;
				//winning display
				noStroke();
				fill("red");
				arc(width / 2, height / 2 + 50, 350, 350, 0, PI, CHORD);
				fill("white");
				strokeWeight();
				textFont("chalkboard");
				textSize(100);
				text(" 🎉 YOU WIN!!! 🎉", width / 6, 100);
				this.x = width / 2;
				this.y = 0;
			}
		} else {
			console.log('the fly is alive');
		}
	}
}

var face = {
	w: 500,
}
var music;
var smacksound;
var slap;
var tada;

function preload() {
	music = loadSound("background.mp3");
	smacksound = loadSound("smack.wav");
	slap = loadSound("jab.wav");
	tada = loadSound("tada.wav");

}

function drawEye(x, y, eyeSize, pupilSize) {
	// pupil
	var pupil = createVector(ball.x, ball.y);
	pupil.sub(x, y);
	pupil.limit((eyeSize - pupilSize) / 2);
	pupil.add(x, y);

	// eye and pupil
	stroke(1);
	fill(255);
	ellipse(x, y, eyeSize, eyeSize);
	fill(0)
	ellipse(pupil.x, pupil.y, pupilSize, pupilSize);
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	music.loop();
	face.x = width / 2;
	face.y = height / 2;
	face.display = function () {

		// Face
		fill("#FFFF00");
		stroke("yellow");
		strokeWeight(1);
		ellipse(face.x, face.y, face.w);
		// Right eye
		strokeWeight(3);
		drawEye(width / 2 + 100, height / 2 - 50, 125, 50);
		// Left eye
		drawEye(width / 2 - 100, height / 2 - 50, 125, 50);
		// Mouth
		strokeWeight(5);
		//		fill('green');
		//		ellipse(face.x - 100, face.y + 150, 20);
		//		fill('red');
		//		ellipse(face.x + 100, face.y + 90, 20);
		line(face.x - 100, face.y + 150, face.x + 100, face.y + 90);


	}
}

function draw() {
	//	score +=
	//		console.log(floor(frameCount / 60)) + 1;
	background("#4682B4");
	face.display();
	ball.display();
	ball.update();
}

function mousePressed() {

	smacksound.play();
	var d = dist(mouseX, mouseY, face.x, face.y);
	if (d < face.w / 2) {
		//	  ouch face
		//		frameRate(10);
		frameRate(1);
		console.log('ouch');


		background('fireBrick');
		fill("#FFFF00");
		rectMode(CENTER);
		//		rotate(PI/3.0);
		noStroke();
		ellipse(face.x, face.y, face.w);
		//				rect(width / 2, height / 2, 345, 380, 25);
		//				arc(width / 2, height / 2 + 50, 350, 350, 0, PI, CHORD);

		fill("black");
		strokeWeight();
		//		textFont();
		textSize(150);
		text("X", width / 2 + 60, height / 2 + 5);
		text("X", width / 2 - 150, height / 2 + 5);
		textSize(100);
		text("OUCH", width / 2 - 150, height / 2 + 150);

		console.log('hit');
		this.slap.play();
	}

	ball.clicked();
	ball.isAlive();

}
