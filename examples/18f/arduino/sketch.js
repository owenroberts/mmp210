/*
    Arduino + p5 example
*/
var serial;
var portName = "/dev/cu.usbmodem179";
var sensorValue;

function setup() {
    createCanvas(640, 360);
    
    serial = new p5.SerialPort();
    serial.on('connected', serverConnected);
    serial.on('open', portOpen);
    serial.on('data', serialEvent);
    serial.on('error', serialError);
    serial.on('close', portClose);
    
    serial.open(portName);
}

function serverConnected() {
    console.log("connected");
}

function portOpen() {
    console.log("port open");
}

function portClose() {
    console.log("port close");
}

function serialError() {
    console.log("error");
}

function serialEvent() {
    var currentString = serial.readLine();
    trim(currentString);
    if (!currentString) {
        return;
    }
    sensorValue = currentString;
}

function draw() {
    var c = map(sensorValue, 0, 1023, 0, 200);
    
    // sky
    background(c, c, c + 55);
    
    var y = map(sensorValue, 0, 1023, height, 0);
    
    // sun
    noStroke();
    fill('gold');
    ellipse(320, y, 50);
    
}











