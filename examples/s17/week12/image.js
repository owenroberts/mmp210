// image and object
var cat;
var circles = [];
function preload() {
    cat = loadImage("../imgs/cat.png");
   
}
function setup() { 
    createCanvas(720, 360);
     noStroke();
}

function draw() {
    background('lightblue');
    image(cat, 0, 0);
    for (var i = 0; i < circles.length; i ++) {
        circles[i].display();   
    }
}
function mouseDragged() {
    var c = cat.get(mouseX, mouseY);
    circles.push( new Circle(mouseX, mouseY, c) );
    console.log(circles.length);
}

function Circle(x, y, c) {
    this.x = x;
    this.y = y;
    this.color = c;
    this.size = random(20, 40);
    this.display = function() {
        fill(this.color);
        ellipse(this.x, this.y, this.size);
    }
}



