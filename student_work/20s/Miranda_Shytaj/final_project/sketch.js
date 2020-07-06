/* 
	final project 
*/


var currentSlide = 0;
var numberOfSlides = 6;

var nextSlideX = 300;
var nextSlideY = 200;
var nextSlideW = 400;
var nextSlideH = 420;

// use these as global xy values, size determined by button function
var firstOptionX = 280;
var firstOptionY = 220;

var secondOptionX = 650;
var secondOptionY = 220;

var choice = 'none'; // set to 'first' or 'second' in draw loop

var nightSound;
var vibesSound;
var catImage;

function preload () {
  nightSound = loadSound('night_sound.wav');
  vibesSound = loadSound('vibes_sound.mp3');
  catImage = loadImage('cat.png');
}


function setup() {
  createCanvas(960, 720);
  frameRate(3);
}

function draw() {

  background("black");

  var instruction = ''; // set to empty string to avoid errors
  var conversation = '';

  // start assuming use hasn't chosen either
  var firstChoice = false;
  var secondChoice = false;

  // night sky
  stroke(149, 50, 168);
  strokeWeight(90);
  line(0, 720, 960, 720);

  stroke(117, 50, 168);
  strokeWeight(90);
  line(0, 630, 960, 630);

  stroke(81, 50, 168);
  strokeWeight(180);
  line(0, 540, 960, 540);

  stroke(58, 50, 168);
  strokeWeight(180);
  line(0, 360, 960, 360);

  stroke(29, 22, 122);
  strokeWeight(540);
  line(0, 0, 960, 0);


  if (currentSlide == 0) {


    instruction = 'Awake the kid by clicking on him';

    
    var x = 320;
    var y = 180;
    
    // kid function, if there's no kid in a slide just don't use it
    kid(x, y);

    // sleeping kid
    push();
    translate(width / 13, height / 2.8);
    scale(1.3);

    fill(255, 250, 98);
    noStroke();
    ellipse(x - 30, y - 20, 35); // cover eye
    stroke('red');
    strokeWeight(4);
    arc(x - 30, y - 20, 35, 35, 0, -PI); //left eye
    pop();

  } else if (currentSlide == 1) {


    conversation = " Oh hi, I didn't see you there. How are you?";

    // buttons
    // if user is clicking assign the choice
    firstChoice = button("I'm fine", firstOptionX, firstOptionY);
    secondChoice = button("Could be better", secondOptionX, secondOptionY);

    var x = 320;
    var y = 180;
    kid(x, y);


  } else if (currentSlide == 2) {
    

    conversation = "Wanna vibe with me?";

    firstChoice = button("Yes", firstOptionX, firstOptionY);
    secondChoice = button("No", secondOptionX, secondOptionY);

    var x = 320;
    var y = 180;
    kid(x, y);


  } else if (currentSlide == 3) {
  
      firstChoice = button('This is nice!', firstOptionX, firstOptionY);
      secondChoice = button("I don't really like it...", secondOptionX, secondOptionY);


  for (let x = 100; x <= width; x += 140) {
    arrow(x, random(0, 720), 1);
    arrow(x - 50, random(0, 720), -1);
  }
}
 else if (currentSlide == 4) {


    conversation = 'Wanna see something cute?';
    
    firstChoice = button('Sure', firstOptionX, firstOptionY),
    secondChoice = button('Maybe next time', secondOptionX, secondOptionY);

    var x = 320;
    var y = 180;
    kid(x, y);


  } else  if (currentSlide == 5) {

    //picture

    firstChoice = button('That is adorable!', firstOptionX, firstOptionY);
    secondChoice = button('Not my thing...', secondOptionX, secondOptionY);

    image(catImage, 0,0);

  } else if (currentSlide == 6) {

    conversation = "Thank you for keeping me company. I'm kinda tired. I'll go to sleep"

    firstChoice = button('Sleep tight', firstOptionX, firstOptionY);
    secondChoice = button('See you!', secondOptionX, secondOptionY);

    var x = 320;
    var y = 180;
    kid(x, y);

  } else {
    background('black');
  }

  if (currentSlide == 0) {
      if (!nightSound.isPlaying()) nightSound.play();
      vibesSound.stop();
    } else if (currentSlide == 3) {
      if (!vibesSound.isPlaying()) vibesSound.play();
      nightSound.stop();
    } else {
      nightSound.stop();
      vibesSound.stop();
    }

  // set the global choice variable
  if (firstChoice) {
    choice = 'first';
  } else if (secondChoice) {
    choice = 'second';
  }

  push();
  translate(width / 13, height / 2.8);
  scale(1.3);
  rectMode(CENTER);

  textSize(30);
  fill("white");
  noStroke();
  textAlign(CENTER, TOP);
  textFont('Share Tech Mono');
  text(conversation, 320, 100, 500, 500);

  textSize(40);
  textAlign(CENTER);
  text(instruction, 320, 100, 500, 500);
  pop();
}

// displays button text and determines if user clicked
function button(textString, _x, _y) {

  // display text
  // width based on text (needs a little buffer + 10)
  var w = textWidth(textString) + 10;
  var h = 30;

  // set x after getting width
  var x = _x - w / 2;
  var y = _y; // y is just y

  textAlign(LEFT, TOP);
  textSize(h);
  fill("white");
  noStroke();
  textFont('Share Tech Mono');
  text(textString, x, y, w + 10, h);

  // underline 
  if (mouseX > x & mouseX < x + w &&
    mouseY > y && mouseY < y + h) {
    strokeWeight(4);
    stroke("white");
    line(x - 5, y + h, x - 5 + w, y + h);

    // return true or false if clicking
    if (mouseIsPressed) {
      return true;
    } else {
      return false;
    }
  } else {
    // return false if user isnt over button
    return false;
  }
}

// draw the kid at xy
function kid(x, y) {

  push();
  translate(width / 13, height / 2.8);
  scale(1.3);

  fill(255, 250, 98);
  stroke('red');
  strokeWeight(4);
  ellipse(x, y, 200); // face

  fill("white");
  ellipse(x - 30, y - 20, 30);

  noFill();
  arc(x - 35, y - 15, 35, 35, HALF_PI, PI); //left eyebag

  noFill();
  arc(x + 30, y - 20, 35, 35, 0, -PI); // right eye

  strokeWeight(4)
  fill(255, 250, 98)
  arc(x - 96, y, 25, 40, HALF_PI, -HALF_PI) //left ear


  fill(255, 250, 98)
  arc(x + 96, y, 25, 40, -HALF_PI, HALF_PI) // right ear

  rectMode(CENTER);
  line(x - 8, y + 25, x + 12, y + 25) //mouth
  strokeWeight(5)
  line(270, 140, 305, 140) //left eyebrown
  line(333, 140, 368, 140) //right eyebrown


  //arrow 
  stroke('red');
  strokeWeight(4);
  line(x + 30, 50, x + 30, 230);

  line(x, y - 130, x + 30, y - 100); //first from down line on the left
  line(x, y - 140, x + 30, y - 110); //second
  line(x, y - 150, x + 30, y - 120); //third
  line(x + 20, y + 35, x + 30, y + 50) // line on the tip

  line(x + 60, y - 130, x + 30, y - 100); //first from down line on the right
  line(x + 60, y - 140, x + 30, y - 110); //second
  line(x + 60, y - 150, x + 30, y - 120); //third
  line(x + 40, y + 35, x + 30, y + 50) //line on the tip

  //body
  fill('red');
  triangle(x, y + 101, x - 120, y + 180, x + 120, y + 180);
  pop();
}

function arrow(x, y, dir) {

  // styling
  strokeWeight(4);
  stroke('white');

  var h = 300 * dir; // height
  
  // difference between height in up and down
  var diff = 0; 
  if (dir < 0) {
    diff = -40;
  }
  
  // body 
  line(x, y + diff, x, y + h); // the pointing up one is upside down ... 

  line(x, y + h, x + 10, y + h - 15 * dir) //tip right
  line(x, y + h, x - 10, y + h - 15 * dir); //tip left

  // feathers
  let featherSize = 30 * dir;
  let offset = 20 * dir;
  for (let i = 0; i < 3; i++) {
    line(x, y + featherSize + offset, x + featherSize, y + offset); // left
    line(x, y + featherSize + offset, x - featherSize, y + offset); // right
    offset += 10 * dir; // move up/down
  }

}




// mouse released waits until after click is over
function mouseReleased() {

  if (currentSlide == 0) {

    if (mouseX > nextSlideX && mouseX < nextSlideX + nextSlideW &&
      mouseY > nextSlideY && mouseY < nextSlideY + nextSlideH) {
      currentSlide = 1;
    } else {
      currentSlide = 0;
    }
  }

  if (choice == 'first') {
    if (currentSlide == 1) {
      currentSlide =2;
    } else if (currentSlide == 2) {
      currentSlide = 3;
    } else if (currentSlide == 3) {
      currentSlide = 4;
    } else if (currentSlide == 4) {
      currentSlide = 5;
    } else if (currentSlide == 5) {
      currentSlide = 6;
    } else if (currentSlide == 6) {
      currentSlide = 0;
    }
  } else if (choice == 'second') {
    if (currentSlide == 1) {
      currentSlide = 2;
    } else if (currentSlide == 2) {
      currentSlide = 4;
    } else if (currentSlide == 3) {
      currentSlide = 4;
    } else if (currentSlide == 4) {
      currentSlide = 6;
    } else if (currentSlide == 5) {
      currentSlide = 6;
    } else if (currentSlide == 6) {
      currentSlide = 0;
    }
  }

choice = 'none'

}