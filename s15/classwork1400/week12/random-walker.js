var img;
var circles = [];
var x, y;
function setup() {
    createCanvas(640, 480);
    img = loadImage("cat-small.jpg");
    noStroke();
    x = random(0, width);
    y = random(0, height);
}
function draw() {
    //image(img, 0, 0);
    
    for (var i = 0; i < circles.length; i++) {
        circles[i].draw();
    }
    
    circles.push( new Circle(
        x,
        y,
        img.get(x, y)
    ) );
    
    x += random(-10, 10);
    y += random(-10, 10);
    
    if (x > width || x < 0) x = random(0, width);
    if (y > height || y < 0) y = random(0, height);
}


function Circle(x, y, c) {
    this.x = x;
    this.y = y;
    this.w = random(10, 40);
    this.c = c;
    this.draw = function() {
        fill(this.c);
        rect(this.x, this.y, this.w, this.w);
    }
}