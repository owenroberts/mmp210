// spaceship objects

var numSpaceships = 8;
var spaceships = [];
var displayShips = true;
 
function setup() { 
    createCanvas(720, 360);
    for (var i = 0; i < numSpaceships; i++) {
        spaceships.push( new Spaceship(
            random(0,width), 
            random(0,height) 
        ) );   
    }
}

function draw() {
    background('black');
    for (var i = 0; i < numSpaceships; i++) {
        if (spaceships[i].alive) {
            spaceships[i].display();
            spaceships[i].update();
        } else {
            spaceships[i].explode();
        }
    }
}

function mousePressed() {
    //displayShips = !displayShips;
    for (var i = 0; i < numSpaceships; i++) {
        spaceships[i].collide(mouseX, mouseY);
    }
}

function Spaceship(x, y) {
    this.color = color(random(0,255), random(0,255), random(0, 255));
    this.size = random(40, 100);
    this.speed = random(1,2);
    this.x = x;
    this.y = y;
    this.alive = true;
    this.display = function() {
        fill(this.color);
        ship(this.x, this.y, this.size);
        // collider
//        noFill();
//        stroke(0,255,0);
//        ellipse(this.x + this.size/2, this.y, this.size/2);
//        noStroke();
    }
    this.explode = function() {
        fill("red");
        ellipse(this.x + this.size/2, this.y, random(10, 50));
    }
    this.update = function() {
        if (this.x < width + this.size) {
            this.x += this.speed;
        } else {
            this.x = -this.size;
            this.y = random(0, height);
        }
    }
    this.collide = function(otherX, otherY) {
        var d = dist(otherX, otherY, this.x + this.size/2, this.y);
        if (d < this.size/2) {
            this.alive = false;
        }
    }
}


function ship(x, y, spaceshipWidth) {
    var spaceshipHeight = spaceshipWidth/4;
    var spaceshipWing = spaceshipWidth/3;
    var wingMargin = spaceshipWidth/10;
    var cockpitWidth = spaceshipWidth/3;
        
    // wing 1
    triangle(x, y - spaceshipWing, x, y + spaceshipHeight + spaceshipWing, x + spaceshipWidth, y + spaceshipHeight/2);
    
    // wing 2
    triangle(x + wingMargin, y - spaceshipWing + wingMargin/2, x + wingMargin, y + spaceshipHeight + spaceshipWing - wingMargin/2, x + spaceshipWidth, y + spaceshipHeight/2);
    
    // body
    rect(x, y, spaceshipWidth, spaceshipHeight);
    
    // cockpit
    triangle(x + spaceshipWidth, y, x + spaceshipWidth, y + spaceshipHeight, x + spaceshipWidth + cockpitWidth, y + spaceshipHeight/2);
    
    // window 
    ellipse(x + spaceshipWidth + cockpitWidth/4, y + spaceshipHeight/4, spaceshipHeight/2);
}