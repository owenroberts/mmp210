var numShips = 20;
var spaceships = [];

function setup() {
    createCanvas(640, 480);
    
    for (var i = 0; i < numShips; i++) {
        spaceships.push( new Spaceship() );
    }
   
}

function draw() {
    background("black");

    for (var i = 0; i < numShips; i++) {
        spaceships[i].draw();
        spaceships[i].update();
    }
}

function Spaceship() {
    
    this.x = random( 0, width/4 );
    this.y = random( 0, height );
    this.speed = random(1, 3);
    this.size = random(10, 40);
        
    this.shipColor = color(
        random(0, 255), 
        random(0, 255), 
        random(0, 255)
    );
    
    this.coneColor = color(
        random(100, 255), 
        random(100, 255), 
        random(100, 255)
    );
        
    this.fin = this.size/4;
    this.cone = this.size * 1.5;
    this.windowWidth = this.size/3.33;
    this.distance = this.size/2;
    
    this.draw = function() {
        fill(this.shipColor);
        stroke("white");
        rect(this.x, this.y, this.size * 2, this.size);
        triangle(this.x, this.y, this.x, this.y - this.fin, this.x + this.size, this.y);
        triangle(this.x, this.y + this.size, this.x, this.y + this.size + this.fin, this.x + this.size, this.y + this.size);
        
        fill(this.coneColor);
        arc(this.x + this.size*2, this.y + this.size/2, this.cone, this.size, PI + HALF_PI, HALF_PI);
        
        for (var h = 0; h < 3; h++ ) {
            ellipse( 
                this.x + this.distance + h * this.distance, 
                this.y + this.size/2, 
                this.windowWidth, 
                this.windowWidth );
        }
    }
    
    this.update = function() {
        if (this.x < width) this.x += this.speed ;
        else this.x = 0;
    }
}















