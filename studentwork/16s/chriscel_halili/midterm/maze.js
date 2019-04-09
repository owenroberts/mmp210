function setup() {
    createCanvas(600, 600);
    background("white");
    
    strokeWeight(14);
   
    var columns = 10;
    var rows = 10;
   
    var w = width/columns;
    var h = height/rows;

    for (var x = 0; x < width; x += w) {
        for (var y = 0; y < height; y += h) {
            
            var r = random(0, 190);
            var g = random(0, 0);
            var b = random(122, 150);
            stroke(r, g * r, b);
        
            var randomNumber = Math.round(random(1, 2));
                
           if (randomNumber == 1) {
               line(x, y, x + w, y + h);
            } else if (randomNumber == 4) {
                line(x, y, x + w, y + h);
            } else if (randomNumber == 8) {
                line(x, y, x + w, y);
            } else {
                line(x, y, x + w, y);
            }
        }
    }
}