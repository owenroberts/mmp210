function setup(){
    createCanvas(640, 640);
  
    background("white");
    noStroke();
    
    var size = 40;    
    for (var x = 0; x <= width; x += size) {
        for (var y = 0; y < height; y += size ) {
            var r = random(0,100);
            var g = random(0,100);
            var b = random(0,255);
            stroke(r, g, b);
            
            var rShape = random(0, 4);
            
            if (rShape < 1) {
                arc(x, y,  size*2, size*2, 0, PI/2);
            } else if (rShape < 2) {
                arc(x + size, y, size*2, size*2, PI/2, PI);
            } else if (rShape < 3) {
                arc(x + size, y + size, size*2, size*2, PI, 3*PI/2);
            } else {
                arc(x, y + size, size*2, size*2, 3*PI/2, 0);
            }
        }
    }
}