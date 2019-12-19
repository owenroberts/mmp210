/* 
    p5 + arduino skecth
    11.12.2019
*/

var serial;
var serialAvailable;
var portName = "COM5";
var sensorValue;

function setup() {
    createCanvas(640, 360);
    
    serial = new p5.SerialPort();
    serial.on('connected', serverConnected);
    serial.on('open', portOpen);
    serial.on('data', serialEvent);
    serial.on('close', portClose);
    serial.on('error', serialError);
    
    serial.open(portName);
}

function serverConnected() {
    console.log('connected');
}

function portOpen() {
    console.log('port open');
    serialAvailable = true;
}

function portClose() {
    console.log('port close');
    serialAvailable = false;
}

function serialError() {
    console.log('error');
    serialAvailable = false;
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
    var c;
    var y;
    if (serialAvailable) {
       c = map(sensorValue, 0, 1023, 0, 180);
        y = map(sensorValue, 0, 1023, height, 0);
    } else {
        c = map(mouseY, 0, height, 0, 180);
        y = map(mouseY, 0, height, height, 0);
    }
    
    var buttonOne;
    if (serialAvaile) {
        buttonOne = sensorValue;
    } else {
        if (keyIsDown('a')) {
            buttonOne = 1;
        } else {
            buttonOne = 0;
        }
    }
    
    if (buttonOne == 0) {
        // draw one thing
    } else {
        // draw another
    }

    // sky
    background(c, c, c + 85);
    
    
    fill('gold');
    noStroke();
    ellipse(500, y, 50);
}
















