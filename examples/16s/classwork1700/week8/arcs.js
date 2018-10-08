function setup() {
    createCanvas(640, 640);
    background("white");
    
    noFill();
    rectMode(CENTER);
    
   
    var columns = 12;
    var rows = 12;
   
    var w = width/columns;
    var h = height/rows;


    for (var x = 0; x < width; x += w) {
        for (var y = 0; y < height; y += h) {
        
            var randomNumber = Math.round(random(1, 4));
            
            stroke("blue");
            if (randomNumber == 1) {
                arc(x, y, w*2, h*2, 0, HALF_PI );
            } else if (randomNumber == 2) {
                arc(x + w, y, w*2, h*2, HALF_PI, PI );
            } else if (randomNumber == 3) {
                arc(x + w, y + h, w*2, h*2, PI, PI + HALF_PI );
            } else {
                arc(x, y + h, w*2, h*2, PI + HALF_PI, 0 );
            }
        }
    }
}