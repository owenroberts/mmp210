/*keyboard*/

var cookingSound, pianoSound;

function preload() {
	cookingSound = loadSound("cooking.wav"); //used J key
	pianoSound = loadSound("piano.wav");  // used G key
}

function setup() {
	createCanvas(640, 360);
	noStroke();
	pattern();
}

function keyPressed(){ // to add sound

	if (keyCode == 74) {  //key J
		cookingSound.play();
	}

	if (keyCode == 71) {  //key G
		pianoSound.play();
	}

}

function mousePressed() {    // to change the eggs pattern
		pattern();
}


function pattern() {
	background('green');


	for (let x = 100; x <= width; x += 150) {
		let s = random(40, 80); // to change the size
		let y = random(s/2, height - s/2); // to change the height

// fried eggs

		fill(255); // for egg white

		for (let i = 0; i<6; i++) {
			ellipse(x + random(-45, 45), y + random(-45, 45), s + random(50));
		}

		fill('yellow'); // yolk
		ellipse(x,y,s);
		
	}
}
// for oil
function draw() {
 
 	if (cookingSound.isPlaying()) {

    fill(255, 255, 255, 127);
    ellipse(random(width), random(height), random(5, 20));

  }

}