var serial;
var portName = '/dev/cu.usbmodem1421';
var buttonState;
var potValue;
var outByte;
var inData;
var paddleWidth = 80;

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
        if (y > this.y - this.h / 2 && y < this.y + this.h / 2
           && this.x > potValue && this.x + this.w < potValue + paddleWidth) {
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
    inData = serial.readLine().split(',');
    if (inData[0])
        buttonState = Number(inData[0]);
    if (inData[1])
        potValue = map(Number(inData[1]), 0, 1023, 0, width - paddleWidth);

}   

function serialError(error) {
    console.log('Something went wrong', +error);
}

function draw() {
    background(0);

    stroke('white');
    if (buttonState) {
        stroke('red');
        for (var i = 0; i < bubbles.length; i++) {
            bubbles[i].hit(height / 2);
        }
    }
    line(potValue, height / 2, potValue + paddleWidth, height / 2);

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
