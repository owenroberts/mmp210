// dom button
var r = 255, g = 255, b = 255;
var rot = 0;
var input, name;
function setup() {
    var canvas = createCanvas(640, 480);
    canvas.parent("container");
    
    var button = createButton("Add your name");
    button.mousePressed(addName);
    button.parent("sketch");
    button.position(24, 60);
    button.class("bluebutton");
    
    input = createInput();
    input.parent("sketch");
    input.position(24, 20);
}
function draw() {
    background('black');
    translate(width/2, height/2);
    rotate(rot);
    //rect(0, 0, 50, 50);
    fill("white");
    text(name, 0, 0);
}

function addName() {
    name = input.value();
}