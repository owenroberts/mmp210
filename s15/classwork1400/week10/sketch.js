var numSpaceships = 20;
var spaceships = [];

function setup() {
    createCanvas(640, 480);
    for (var i = 0; i < numSpaceships; i++) {
        spaceships[i] = new Spaceship();
    }
    console.log(spaceships);
}

function draw(){
    background("white");
    for (var i = 0; i < numSpaceships; i++) {
        
        spaceships[i].draw();
        spaceships[i].update();
        
        
    }
}

function Spaceship() {
    this.x = random(0, width/2);
    this.y = random(0, height);
    this.speed = random(1, 4);
    this.size = random(10, 100);
    this.fin = this.size/12;
    console.log(this.fin);  
    this.shipColor = color(
        random(0, 255), 
        random(0, 255), 
        random(0, 255)
    );
    
    this.draw = function() {
        fill(this.shipColor);
        triangle(this.x, this.y - this.fin, this.x, this.y + this.size/2 + this.fin, this.x + this.size, this.y + this.size/4);
        rect(this.x, this.y, this.size, this.size/2);
        arc(this.x + this.size, this.y + this.size/4, this.size, this.size/2, PI + HALF_PI, HALF_PI);
        for (var j = 1; j < 4; j++) {
            ellipse(this.x + j * this.size/3 , this.y + this.size/4, this.fin, this.fin);
        }
    }
    
    this.update = function() {
        this.x += this.speed;
        if (this.x >= width) this.x = 0;
    }
}


