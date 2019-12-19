/*
    making a custom function
    11.21.2019
*/

function setup() {
    createCanvas(640, 360);
}

function draw() {
    background(220);
    
    button(100, 200, 100, "blue"); // blue
    button(300, 300, 300, "red"); // red
    button(400, 100, 5, "green"); // green
    button(300, 100, 100, "yellow"); // yellow
    button(540, 100, 200, "purple"); // purple
    
}

function button(x, y, s, c) {
    var d = dist(x, y, mouseX, mouseY);
    if (d < s/2) {
        fill(c); // hover over
    } else {
        fill('plum');
    }
    ellipse(x, y, s);
}






