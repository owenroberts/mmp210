function setup() {
    var canvas = createCanvas(640, 460);
    
    canvas.parent('sketch-holder');
}


function draw() {

    background('white');

/* Body */
    
    fill('black');
    ellipse(320, 380, 120, 300);

/* Face, Mouth */

    fill('#FFEFC6');
    ellipse(320, 140, 240, 270);
    
    fill('black');
    arc(310, 210, 50, 40, 6, PI + QUARTER_PI, CHORD);
    
/* Hair */
    
    fill("black");
    arc(200, 20, 60, 500, 0, PI + QUARTER_PI, OPEN);
    arc(440, 45, 60, 450, 200, PI + QUARTER_PI, OPEN);
    ellipse(240, 0, 140, 140);
    ellipse(380, 0, 180, 140);

/* Eyes */

    fill('white');
    ellipse(260, 120, 50, 50);
    ellipse(380, 120, 50, 50);
    
    fill('black');
    ellipse(255, 130, 25, 25);
    ellipse(375, 130, 25, 25);
     
/* Hand, Arm */

    fill('#FFEFC6');
    ellipse(150, 290, 30, 30);

    stroke("black");
	line(160, 300, 300, 400);

/* Book */

    fill('#FEFEFE');
    rect(65, 170, 80, 120, 4);

    stroke('black');
    ellipse(100, 225, 65, 100);

    textSize(12);
    fill('black');
    text("The", 80, 200);
    text("Flowers", 80, 215);
    text("of", 80, 230);
    text("Evil", 80, 245);

    textSize(8);
    fill('black');
    text("Volume 1", 80, 262);
    text("Shuzo Oshimi", 87, 287);
}