// midterm - generative pattern

function setup() {
    createCanvas(640, 640);
    
    background(255);
    
   noStroke();
    
    var numberOfRectangles = 200;
    var columns = Math.sqrt(numberOfRectangles);
    var rows = Math.sqrt(numberOfRectangles);
    
//    var rows = 5;
//    var columns = numberOfRectangles / rows;
    
    var w = width / columns;
    var h = height / rows;

    for (var x = 0; x <= width; x += w) {
        for (var y = 0; y <= height; y += h) {
            
            var r, g, b;
            var tempX = x;
            var tempW = w;
            var tempH = h;
            
        
            if (y < height/4) {
               
               
            } else if (y > height * 3/4) {
                // random waterfall color
                r = random(0, 255);
                g = random(870, 300);
                b = random(340, 400);
                // random tree size
                w = h = random(10, 40);
            } else {
                // random blue river color
                r = random(0, 20);
                g = random(20, 185);
                b = random(255, 205);
            }
            
            // all of the color fills
            fill(r,g, b);            
            
            // Artic iceland
            if ( y > height * 4/4) {
                // Artic ice
                ellipse(x, y, w, h);
                //ice
                fill(
                    random(105, 10),
                    random(200, 500),
                    random(40, 275)
                );
                rect(x, y, w/8, h);
                //inside 
                fill(
                    random(90, 155),
                    random(0, 300),
                    random(20, 0)
                );
                ellipse(x, y, w/2, h/2);
            } else {
                
                rect(x, y, w, h);
            }
            
            
            x = tempX;
            w = tempW;
            h = tempH;
        }
    }
    textSize(30);
    text("The beauty of the thawing water", 120, 350);
}