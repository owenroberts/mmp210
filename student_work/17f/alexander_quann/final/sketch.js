var circles = [];
var squars = [];
var triangles= [];
var backgroundfiles = ["sounds/sound1.mp3","sounds/sound2.mp3","sounds/sound3.mp3","sounds/sound4.mp3","sounds/sound5.mp3"];
var backgroundsounds = [];
var circleSounds = [];
var circleSoundFiles = ["sounds/circle1.wav", "sounds/circle2.wav", "sounds/circle3.wav", "sounds/circle4.wav", "sounds/circle5.wav", "sounds/circle6.wav", "sounds/circle7.wav", "sounds/circle8.wav", "sounds/circle9.wav"];
var sqSounds = [];
var sqSoundFiles = ["sounds/sq1.wav","sounds/sq2.wav","sounds/sq3.wav",
"sounds/sq4.wav","sounds/sq5.wav","sounds/sq6.wav","sounds/sq7.wav","sounds/sq8.wav","sounds/sq9.wav"];
var triangleSounds = [];
var triangleFiles = ["sounds/tri1.wav","sounds/tri2.wav","sounds/tri3.wav","sounds/tri4.wav","sounds/tri5.wav","sounds/tri6.wav","sounds/tri7.wav","sounds/tri8.wav","sounds/tri9.wav"];

function preload() {
	for (let i = 0; i < circleSoundFiles.length; i++) {
		const s = loadSound(circleSoundFiles[i]);
		circleSounds.push(s);
	}
    
    for (let i = 0; i < sqSoundFiles.length; i++) {
		var s = loadSound(sqSoundFiles[i]);
		sqSounds.push(s);
	}
    
    for (let i = 0; i < triangleFiles.length; i++) {
		const s = loadSound(triangleFiles[i]);
		triangleSounds.push(s);
	}
    
    for (let i = 0; i < backgroundfiles.length; i++) {
		const s = loadSound(backgroundfiles[i]);
		backgroundsounds.push(s);
	}
}

var sqH = 50;
function setup() {
	createCanvas(800, 800);
    
   //backgroundsounds[0].loop();
    
    var circle1 = new Circle(100, 200, circleSounds[0]);
	circles.push(circle1);
    
    var circle2 = new Circle(280, 195, circleSounds[1]);
	circles.push(circle2);
    
    var circle3 = new Circle(30, 300, circleSounds[2]);
	circles.push(circle3);
    
    var circle4 = new Circle(50, 425, circleSounds[3]);
	circles.push(circle4);
    
    var circle5 = new Circle(120, 540, circleSounds[4]);
	circles.push(circle5);
    
    var circle6 = new Circle(300, 630, circleSounds[5]);
	circles.push(circle6);
    
    var circle7 = new Circle(400, 670, circleSounds[6]);
	circles.push(circle7);
    
    var circle8 = new Circle(700, 400, circleSounds[7]);
	circles.push(circle8);
    
    var circle9 = new Circle(500, 700, circleSounds[8]);
	circles.push(circle9);
    
    var sq1 = new Square(50, 100, sqSounds[0]);
	circles.push(sq1);
    
    var sq2 = new Square(200, 100, sqSounds[1]);
	circles.push(sq2);
    
    var sq3 = new Square(90, 340, sqSounds[2]);
	circles.push(sq3);
    
    var sq4 = new Square(180, 485, sqSounds[3]);
	circles.push(sq4);
    
    var sq5 = new Square(600, 370, sqSounds[4]);
	circles.push(sq5);
    
    var sq6 = new Square(700, 670, sqSounds[5]);
	circles.push(sq6);
    
    var sq7 = new Square(40, 630, sqSounds[6]);
	circles.push(sq7);
    
    var sq8 = new Square(340, 550, sqSounds[7]);
	circles.push(sq8);
    
    var sq9 = new Square(500, 500, sqSounds[8]);
	circles.push(sq9);
    
    var triangle1 = new Triangle(30, 60, triangleSounds[0]);
	circles.push(triangle1);
    
    
    var triangle2 = new Triangle(200, 60, triangleSounds[1]);
	circles.push(triangle2);    
    
    
    var triangle3 = new Triangle(130, 320, triangleSounds[2]);
    circles.push(triangle3);
    
    
    var triangle4 = new Triangle(470, 460, triangleSounds[3]);
	circles.push(triangle4);
    
    
    var triangle5 = new Triangle(180, 630, triangleSounds[4]);
	circles.push(triangle5);
    
    
    var triangle6 = new Triangle(650, 700, triangleSounds[5]);
	circles.push(triangle6);
    
    
    var triangle7 = new Triangle(770, 300, triangleSounds[6]);
	circles.push(triangle7);
    
    
    var triangle8 = new Triangle(230, 370, triangleSounds[7]);
	circles.push(triangle8);
    
    
    var triangle9 = new Triangle(700, 500, triangleSounds[8]);
	circles.push(triangle9);
    
    
    var rect1 = new BigRect(350, 80, backgroundsounds[0]);
	circles.push(rect1);    

    var rect2 = new BigRect(350, 300, backgroundsounds[1]);
	circles.push(rect2);    

    var rect3 = new BigRect(80, 430, backgroundsounds[2]);
	circles.push(rect3);   
    
    var rect4 = new BigRect(400, 560, backgroundsounds[3]);
	circles.push(rect4);    
    
     var rect5 = new BigRect(80, 700, backgroundsounds[4]);
	circles.push(rect5); 
    
}

function draw(){    
    //THIS IS SAMPLE SET
    
    //Instructions
    text("This is the sample set", 250, 20);
    textSize(20);
    text("Each shape is a sound", 530, 30);
    text("Rectangles are background music", 450, 150);
    
    //Line border for sampler and actual orcestra
    rect(0, 230, 800, 5);
    
    //orchestra
    fill("black");
    text("The Orchestra", 350, 250, 400, 100);
    
    for (var i = 0; i < circles.length; i++) {
		circles[i].display();
        
	}
}

function Shape(x, y, s) {
	this.x = x;
	this.y = y;
	this.c = color( random(255), random(255), random(255));
	this.size = 50;
	// this.sound = random(sounds);
	this.sound = s;
	this.click = function() {
		var d = dist(mouseX, mouseY, this.x, this.y);
		if ( d < this.size) {
			this.c = color( random(255), random(255), random(255));
            //
			this.sound.play();
		}
	}
}
function Circle(x, y, s) {
    Shape.call(this, x, y, s);  
	this.display = function() {
		fill(this.c);
		ellipse(this.x, this.y, this.size);
	}
}

function Square(x, y, s) {
    Shape.call(this, x, y, s);  
	this.display = function() {
		fill(this.c);
		rect(this.x, this.y, this.size, this.size);
	}
}

function BigRect(x, y, s) {
    Shape.call(this, x, y, s);
    this.click = function() {
		if ( mouseX > this.x && mouseX < this.x + this.size*7 && mouseY > this.y && mouseY < this.y + this.size) {
            backgroundsounds.map((s)=>{s.stop();});
			this.c = color( random(255), random(255), random(255));
			this.sound.play();
		}
    }
    
	this.display = function() {
		fill(this.c);
		rect(this.x, this.y, this.size*7, this.size);
	}
}

function Triangle(x, y, s) {
    Shape.call(this, x, y, s);
	this.display = function() {
		fill(this.c);
        triangle(this.x, this.y, this.x + 30, this.y - 40, this.x + 60, this.y);
	}
}

function mousePressed() {
	for (var i = 0; i < circles.length; i++) {
		circles[i].click();
	}
}
