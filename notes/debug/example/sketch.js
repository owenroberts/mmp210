function setup() {
    myFunction();
    createcanvas(640, 480);
    backGround(50);
    noStoke;
    fill("lightblue");
    var size = "one hundred" / 5;
    ellipse(350, 320, size);

    fill(0, 0, 0);
    ellipse (450, 250, 50);
    ellipse(x, y, 50);
    ellipse(x, y, 100, 50);

    fill(white);
    elipse(150, 100, 200, 150);
    triangle(200, 200, 150, 175, 175, 150);

    fill("black");
    textSize(28);
    textFont(Monaco);
    text("Nice work!", 65, 110);
}