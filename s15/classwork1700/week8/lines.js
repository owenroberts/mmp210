function setup() {
    createCanvas(640, 640);
    background("white");
    
    noFill();
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
            stroke(r, g * x, b);
        
            var randomNumber = Math.round(random(1, 4));
            
            
            
            if (randomNumber == 1) {
               line(x, y, x + w, y + h);
            } else if (randomNumber == 2) {
                line(x + w, y, x, y+h);
            } else if (randomNumber == 3) {
                line(x, y, x + w, y);
            } else {
               line(x + w, y, x + w, y + h);
            }
        }
    }
}