/* 
    key board example
*/

var coin;
var chickens;
var music;

function preload() {
    coin = loadSound("coin.wav");
    chickens = loadSound("chickens.mp3");
    music = loadSound("music.mp3");
}

function setup() {
    createCanvas(640, 360);
    textSize(40);
}

function draw() {
    
    if (keyIsPressed) {
        if (key == "r") {
            background("red");
        } else if (key == 'g') {
            background('blue');
        } else if (keyCode == 32) {
            background('green');
        }
        
        else {
            background(0);
        }
    } else {
        background("pink");
    }
    
    fill(255);
    text(keyIsPressed, 50, 50);
    text(key, 50, 100);
    text(keyCode, 50, 150);
}

function keyPressed() {
    // 13 is enter
    if (keyCode == 13) {
        coin.play();    
    }
    
    // 65 is a
    if (keyCode == 65) {
        chickens.play();
    }
    
    // 32 is space
    if (keyCode == 32) {
        if (music.isPlaying()) {
            music.pause();
        } else {
            music.play();
        }
    }
}











