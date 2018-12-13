/*
    Self Portrait
    v 3
    by Owen
    mmp 210 example week 4
    interactive
*/

function setup() {
    createCanvas(640, 360);
}

function draw() {
    background(220);
    
    var headPosition = frameCount ;
    var headWidth = mouseX;
    var eyesY = mouseY;
    
    var skinColor = 'plum';
    var hairColor = 'lightgreen';
    var eyeColor = 'yellow';
    
    // head
    fill(skinColor);
    noStroke();
    rect(headPosition, headPosition, headWidth, 250);
    
    // hair
    noFill();
    stroke(hairColor);
    strokeWeight(500);
    rect(150, 320, headWidth / 2, 25, 100);
    
    // eyes
    noFill();
    stroke(eyeColor);
    strokeWeight(10);
    ellipse(280, eyesY, 100);
    ellipse(120, eyesY, 100, 50);
   
    // body
    noStroke();
    fill(skinColor);
//    ellipse(200, 400, 300);
}