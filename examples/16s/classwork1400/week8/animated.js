var columns;
var rows;
var w;
var h;
function setup(){
    createCanvas(640, 640);
    
    noStroke();
    rectMode(CENTER);
    
    columns = 16;
    rows = 16;
    w = width/columns;
    h = height/rows;
    
    frameRate(24);
}

function draw() {
    
    background("white");
    
    for (var x = 0; x < width; x += w) {
         for (var y = 0; y < height; y += h) {
            
            var r = random(0,80);
            var g = random(200,250);
            var b = random(0,100);
             fill(r, g, b * x/200);

             rSize = random(-w/2, w/4);
            
            ellipse(x, y, w + rSize, h + rSize);
            
        }   
    
    }
}