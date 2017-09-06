// review
var r = 225, g = 200, b = 100;
function setup() {
    createCanvas(640, 480);
}

function draw() {
    background("white");
    textSize(25);
    textFont("Cursive");
    
    if (frameCount % 100 == 0) {
        r = random(0, 255);
        g = random(0, 255);
        b = random(0, 255);
    }
    fill(r, g, b);
    text("Welcome to the rite of spring.", 50, 50);
    
    
    
    pinwheel(200, 200);
    pinwheel(500, 300);
}

function pinwheel(x, y) {
    push();
    translate( x, y);
    var g = 100;
    noStroke();
    for (var i = 0; i < 13; i++) {
        rotate(0.5);
        fill(50, g, 100);
        g += 10;
        //triangle( 0, 0 , 0, -100, 50, -90 );
        var size = 20 + frameCount % 200;
        arc(0, 0, size, size, PI * 1.5, PI * 1.75); 
    }
    pop();
}
