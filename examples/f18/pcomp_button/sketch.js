var serial;
var portName = '/dev/cu.usbmodem1421';
var inData;
var outByte;

class Bubble {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.speed = random(1, 2);
        this.alive = true;
    }
    display() {
        noStroke();
        if (this.alive) fill('pink');
        else fill('darkblue');
        ellipse(this.x, this.y, this.w, this.h);
    }
    update() {
        this.y += this.speed;
    }
    hit(y) {
        if (y > this.y - this.h / 2 && y < this.y + this.h / 2) {
            this.alive = false;
        }
    }
}
var bubbles = [];

function setup() {
    createCanvas(400, 300);
    serial = new p5.SerialPort();
    serial.on('data', serialEvent);
    serial.on('error', serialError);
    serial.open(portName);

    serial.on('connect', () => {
        console.log('serial connected');
    });

    serial.on('close', () => {
        console.log('serial closed');
    });

    for (var i = 0; i < 20; i++) {
        bubbles.push(new Bubble(
            random(0, width),
            random(0, -2 * height),
            random(10, 50),
            random(20, 40)
        ));
    }
}

function serialEvent() {
    var inByte = Number(serial.read());
    inData = inByte;
    // console.log('in', inData);
}

function serialError(error) {
    console.log('Something went wrong', +error);
}

function draw() {
    background(0);

    if (inData) {
        stroke('red');
        line(0, height / 2, width, height / 2);
        for (var i = 0; i < bubbles.length; i++) {
            bubbles[i].hit(height / 2);
        }
    } else {
        stroke('white');
        line(0, height / 2, width, height / 2);
    }

    for (var i = 0; i < bubbles.length; i++) {
        bubbles[i].display();
        bubbles[i].update();
    }

    fill(255);
    text('value ' + inData, 30, 30);


}

function mouseDragged() {
    outByte = int(map(mouseY, 0, height, 0, 255));
    serial.write(outByte + '\n');
}

function keyPressed() {
    if (key === 'H' || key === 'L') {
        serial.write(key);
    }
}
