function setup() {
    createCanvas(640, 640);
    background("white");
    
    noStroke();
    rectMode(CENTER);
    fill("blue");
   
    var columns = 256;
    var rows = 256;
   
    var w = width/columns;
    var h = height/rows;

    translate(width/2, height/2);
    
    for (var x = 0; x < width; x += w) {
    	for (var y = 0; y < height; y += h) {
            rotate(1);
            
            var r = random(0,100);
            var g = random(0,2);
            var b = random(100,255);
            fill(r, g * x, b);
            ellipse(x, y, w*2, h*2);
        }
    }
}