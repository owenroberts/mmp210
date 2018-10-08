function setup() {
    createCanvas(640, 640);
    background("white");
    
    noStroke();
    rectMode(CENTER);
    
    var columns = 32;
    var rows = 32;
   
    var w = width/columns;
    var h = height/rows;
    

    for (var x = 0; x < width; x += w) {
        for (var y = 0; y < height; y += h) {
        
            var r = random(0,1);
            var g = random(0,1);
            var b = random(100,255);
            fill(r, g * x, b);
            
            var randomSize = 0;
            if (y < height/2) {
                randomSize = random(-10, 0);
            } else {
                randomSize = random(-20, 0);
            }
            

            rect(x, y, w + randomSize, h + randomSize);
        }
    }
}