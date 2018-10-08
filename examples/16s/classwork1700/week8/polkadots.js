function setup() {
    createCanvas(640, 640);
    background("white");
    
    noStroke();
    
   
    var columns = 12;
    var rows = 12;
   
    var w = width/columns;
    var h = height/rows;


    for (var x = 0; x < width; x += w) {
        for (var y = 0; y < height; y += h) {
        
            var r = random(0,50);
            var g = random(0,1);
            var b = random(0,255);
            
            if (x > w*3 && x < w*7 && y > h*3 && y < h*7) {
                fill(r * 10, g * x, b * 10);
            } else {
                fill(r, g * x, b);
            }
            
            var rs = random(-5, 10);
            

            ellipse(x + w/2, y + h/2, w/2 + rs, h/2 + rs);
        }
    }
}