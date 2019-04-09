// midterm - generative pattern

function setup() {
    createCanvas(640, 640);
    background(255);
    
    
    noStroke();
//number of rectangles
    var numberOfRectangles = 300;
    var columns = Math.sqrt(numberOfRectangles);
    var rows = Math.sqrt(numberOfRectangles);
    
    var w = width / columns;
    var h = height / rows;
    
    for (var x = 0; x <= width; x += w) {
        for (var y = 0; y <= height; y += h) {
            
            var r, g, b;
            var tempX = x;
            var tempW = w;
            var tempH = h;
//sky level
            if (y < height/2.4) {
                
//sky color random
                r = random(229, 236);
                g = random(121, 59);
                b = random(27, 59);
//
                x += random(-50, 10);
                w = random(100, 200);
//sand level
            } else if (y > height * 3/4.5) {
                r = random(206, 210);
                g = random(139, 165);
                b = random(84, 109);
                
                
//sand size 
                w = h = random(1, 10);
								for (var i = 0; i < 600; i++) {
									ellipse(x + random(0,w*25), y + random(0,h*15), 2);
								}
                
            } else {

                r = random(0, 50);
                g = random(150, 255);
                b = random(200, 255);
                ellipse(x,y,h,w);
            }
            

            fill(r,g, b);            
            
//sand level
            if ( y > height * 3/4.2) {

//sand color random
                fill(
                    random(206, 210),
                    random(139, 165),
                    random(84, 109)
                
                );
                ellipse(x, y, w, h);
            } else{
                rect(x, y, w, h);
            }
            
            x = tempX;
            w = tempW;
            h = tempH;
        }
    }
    
//sun color random
    fill(r,g,b)
    fill(
        random(226,255),
        random(130,223),
        random(17,52)
    );
    ellipse(200,100,150);
    
// bird
    fill('black')
    noStroke;

    triangle (10,20,50,30,90,30);
}