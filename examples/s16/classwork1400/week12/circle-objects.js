var img;
var circles = [];
function setup() {
    createCanvas(640, 480);
    img = loadImage("cat-small.jpg");
    noStroke();
}
function draw() {
    image(img, 0, 0);
    
    for (var i = 0; i < circles.length; i++) {
        circles[i].draw();
    }
}

function mouseDragged() {
    var x = mouseX + random(-10, 10);
    var y = mouseY + random(-10, 10);
    circles.push( new Circle(
        x,
        y,
        img.get(x, y)
    ) );
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