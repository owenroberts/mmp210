// windows
function setup() { 
   createCanvas(640, 480);
    noStroke();
}

function draw() {
    background(220);
    
    var windowWidth = width/6; // window width
    var windowHeight = height/2; // window height
    var x = 10, y = 10;
    for (var i = 0; i < 4; i++) {
        for (var h = 0; h < 2; h++) {
            drawWindow(x + 150 * i, y + 150 * h, windowWidth, windowHeight);
        }
    }
    
}

function drawWindow(x, y, windowWidth, windowHeight) {
    fill(167, 82, 54);
    rect(x, y, windowWidth/2, windowHeight/2);
           
    fill("black");
    stroke(167, 82, 54);
           
    rect(x, y, windowWidth/4, windowHeight/8);
    rect(x, y + windowHeight/8, windowWidth/4, windowHeight/8);
    rect(x + windowWidth/4, y + windowHeight/8, windowWidth/4, windowHeight/8);
    rect(x + windowWidth/4, y + windowHeight/8 * 2, windowWidth/4, windowHeight/8);
    
    fill(50);
    noStroke();
    rect(x - windowWidth/16, y + windowHeight/2, windowWidth/2 + windowWidth/8, windowHeight/16);
}