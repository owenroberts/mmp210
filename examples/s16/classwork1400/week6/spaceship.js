var x = 10;
var speed = 1;
function setup() {
    createCanvas(640, 480);
    
}
function draw(){
    background("white");
    spaceship(x, 140, 120);  
    spaceship(x + 10, 240, 120); 
    spaceship(x + 10, 40, x); 
    x += speed;
    speed += random(0, 0.1);
    if (x > width) {
        x = 0;
        speed = 1;
    }
}

var spaceship = function(x, y, size) {
    var fin = size/12;
    fill(x, 0,y);
    triangle(x,y - fin,x,y + size/2 + fin,x + size, y + size/4);
    rect(x, y, size, size/2);
    arc(x + size, y + size/4, size, size/2, PI + HALF_PI, HALF_PI);
    for (var i = 1; i < 4; i++) {
        ellipse(x + i*size/3 , y + size/4, fin, fin);
    }
}
