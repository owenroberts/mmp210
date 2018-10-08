// spaceships and arrays

var numSpaceships = 8;
var xPositions = [];
var yPositions = [];
var spaceshipSize = [];
var spaceshipSpeed = [];
var spaceshipColor = [];
 
function setup() { 
    createCanvas(720, 360);
    
    for (var i = 0; i < numSpaceships; i++) {
        xPositions[i] = random(0, width);
        yPositions[i] = random(0, height);
        spaceshipSize[i] = random(20, 100);
        spaceshipSpeed[i] = random(0.1, 20);
        spaceshipColor[i] = color(
            random(0,255), 
            random(0,255), 
            random(0,255)
        );
    }
    var index =  floor(random(0, spaceshipColor.length));
    console.log(index);
    spaceshipColor[index]  = color("white");
}

function draw() {
    background('black');
    
   // ship(mouseX, mouseY, 200);
 
    for (var i = 0; i < numSpaceships; i++) {
        fill(spaceshipColor[i]);
        ship(xPositions[i], yPositions[i], spaceshipSize[i]);
        xPositions[i] += spaceshipSpeed[i];
        if (xPositions[i] > width + spaceshipSize[i]/2) {
            xPositions[i] = -spaceshipSize[i]/2;
            yPositions[i] = random(0, height);
        }
    }
}

function ship(x, y, spaceshipWidth) {
    var spaceshipHeight = spaceshipWidth/4;
    var spaceshipWing = spaceshipWidth/3;
    var wingMargin = spaceshipWidth/10;
    var cockpitWidth = spaceshipWidth/3;
    
    
    
    // wing 1
    triangle(x, y - spaceshipWing, x, y + spaceshipHeight + spaceshipWing, x + spaceshipWidth, y + spaceshipHeight/2);
    
    // wing 2
    triangle(x + wingMargin, y - spaceshipWing + wingMargin/2, x + wingMargin, y + spaceshipHeight + spaceshipWing - wingMargin/2, x + spaceshipWidth, y + spaceshipHeight/2);
    
    // body
    rect(x, y, spaceshipWidth, spaceshipHeight);
    
    // cockpit
    triangle(x + spaceshipWidth, y, x + spaceshipWidth, y + spaceshipHeight, x + spaceshipWidth + cockpitWidth, y + spaceshipHeight/2);
    
    // window 
    ellipse(x + spaceshipWidth + cockpitWidth/4, y + spaceshipHeight/4, spaceshipHeight/2);
}