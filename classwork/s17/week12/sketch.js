// collisions
var buttons = [];
function setup() { 
    createCanvas(720, 360);
    noStroke();
    var numButtons = random(12, 36);
    for (var i = 0; i < numButtons; i++) {
        buttons.push( new Button() );   
    }
}

function draw() {
    background('lightblue');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].display();   
    }
}

function mousePressed() {
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].collide(mouseX, mouseY);   
    } 
}

function Button() {
    this.x = random(0, width);
    this.y = random(0, height);
    this.size = random(10, 40);
    this.color = color("green");
    this.display = function() {
        fill(this.color);
        ellipse(this.x, this.y, this.size);
    }
    this.collide = function(otherX, otherY) {
        var d = dist(otherX, otherY, this.x, this.y);
        if (d < this.size) {
            this.color = color("white");
        }
    }
}

