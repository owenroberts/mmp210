/*
sound sample 
5.4.2020
*/

//global sound variables
var powerupSound, laserSound, pickSound, deadSound;
var music;
var volumeSlider;

function preload() {
	powerupSound = loadSound('powerup.wav');
	music = loadSound('song.wav');
	laserSound = loadSound('laser.wav');
	pickSound = loadSound('picksound.wav');
	deadSound = loadSound('deadsound.wav');

	//images
	pizza = loadImage('pizza.jpg');
	laser = loadImage('laser.png');
	power = loadImage('potion.png');
	dead = loadImage('dead.jpg');

}

function setup() {
	createCanvas(640, 360);
	//powerSound.playMode('restart');

	createP('Move your mouse left to right if you want to hear more sound effects')
}

function draw() {
	if (music.isPlaying()) {
		background('#5A5766');
	} else {
	    background('#A8AEFF');
    }

    if (pickSound.isPlaying()) {
    	fill('#EBD14E');
    	background(pizza)
    	noStroke();
    	rect(0, 0, 100, height);
    }

    if (laserSound.isPlaying()) {
    	fill('#90FFA0');
    	background(laser);
    	noStroke();
    	rect(550, 0, 100, height);
    }

    if (powerupSound.isPlaying()) {
    	fill('#C691EE');
    	background(power);
    	noStroke();
    	rect(0, 0, 100, height);
    }

    if (deadSound.isPlaying()) {
    	fill('#FF7A56');
    	background(dead);
    	noStroke();
    	rect(600, 0, 100, height);
    }

    var volume = map(mouseY, 0, height, 1, 0);
    music.setVolume(volume);

   

    var pan = map(mouseX, 0, width, -1, 1);
    music.pan(pan);
    
    
    fill('black');
    textSize(25);
    text('Press space (for the music), then Q, W, E, R', 70, 50);



    

   
}

function keyPressed() {

	//play music
	if (keyCode == 32) {
		if (music.isPlaying()){
			music.pause();
		} else {
		music.play();
	    }
	}

	//play sound effects
	if (keyCode == 81) {
		pickSound.play();
	}

	if (keyCode == 87) {
		laserSound.play();
	}

	if (keyCode == 69) {
		powerupSound.play();
	}

	if (keyCode == 82) {
		deadSound.play();
	}
	
}
