function setup(){
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
            
            var r = random(0,80);
            var g = random(200,250);
            var b = random(0,100);
             
            var rSize;
            if (y < height/2) {
                rSize = random(-w/2, w);
            } else {
                rSize = random(-w, w/4);
            }
            
            var rShape = random(0, 10);
            if (x > w*12 && x < w*18 && y > h*12 && y < h*18) {
                fill(r*5, g/20, b * x/50);
            } else {
                fill(r, g, b * x/200);
            }
             
            
            
             
            if (rShape < 9) {
                rect(x, y, w + rSize, h + rSize); 
            } else {
                ellipse(x, y, w + rSize, h + rSize);
            }
        }   
    
    }
}