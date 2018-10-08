var x = 10;
var y = 100;
var r;
var g;
var b;

function setup() {
    createCanvas(640, 480);
    r = random(0, 255);
    g = random(0, 255);
    b = random(0, 255);
}

function draw() {
    background("white");
    
    if (frameCount % 30 == 0) {
        r = random(0, 255);
        g = random(0, 255);
        b = random(0, 255);
    }
    
    fill(r, g, b);
    
    rocket(x, y, 40);
    rocket(x + 10, y + 40, 40);
    rocket(x + 50, y + 80, 40);
    //ellipse(x, y, 40, 40);
    
    
    x += 1;
   
    
    if (x > width) {
        x = 0;
    }
    
    /*var r = random(-5, 5);*/
        
    if (x < width/2) {
         y ++;
    } else {
        y --;
    }
    fill("blue");
    text(r, 20, 20);
}



var rocket = function(x, y, size) {
        
    var fin = size/4;
    var cone = size * 1.5;
    var windowWidth = size/3.33;
    var distance = size/2;
        
    rect(x, y, size * 2, size);
    triangle(x, y, x, y - fin, x + size, y);
    triangle(x, y + size, x, y + size + fin, x + size, y + size);
    
    
    arc(x + size*2, y + size/2, cone, size, PI + HALF_PI, HALF_PI);
    
    for (var i = 0; i < 3; i++ ) {
        ellipse( 
            x + distance + i*distance, 
            y + size/2, 
            windowWidth, 
            windowWidth );
    }
}















