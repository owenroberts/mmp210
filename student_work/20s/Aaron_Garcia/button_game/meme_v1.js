var r, g, b;
var x, y;
var score = 0;
var time = 0;
var endtime = 600;
var music;
var endmusic;
var gameOver = false; 
function preload() {
  music = loadSound('ding.mp3');
  endmusic = loadSound('buzzer.wav');
  }
function update() {
  music.play();
 r = random(0, 255);
    g = random(0, 255);
    b = random(0, 255);
    x = random(0,width);
    y = random(0,height);

}
function setup() {
  createCanvas(600, 600);
 update();
}

function draw() {
background(r,g,b);
stroke(r,g,b);
ellipse(x,y,50);

if (time>=endtime) {
  textSize(30);
  text("Score: "+ score, 10,100);
   text("Press the ENTER key to try again!", 10, 60); 
   if (!gameOver) {
  endmusic.play();
}
gameOver = true;
} else{
time ++;
}
textSize(20);
 text("Time: "+ time+"/"+endtime, 10,30);
}

function reset() {
  gameOver = false;
  time = 0;
  score = 0;
  update();
}

function keyPressed() {
  if (keyCode == 13) { // Enter key
    reset();
  }
}

function mousePressed() {
  var d = dist(mouseX, mouseY, x, y);
  if (d < 25) {
     if (time < endtime) {
      update();
      score ++;
    } else {
      reset();
    }    
  }
}


