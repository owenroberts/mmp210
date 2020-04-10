var w = 400;
var h = 400;
var c = 100;
var n = 0;

function setup() {
  createCanvas(w, h);
  noStroke();
  textSize(20);
  textFont("Monaco");
  ex();
  createButton("Loop").position(410, 0).mousePressed(() => {
    n++;
    ex();
  });
  createButton("Reset").position(410, 50).mousePressed(() => {
    n = 0;
    ex();
  });
}

function ex() {
  background(220);

  for (let i = 0; i < n; i++) {
    let x = floor(i / (h / c)) * c;
    let y = floor((i % (h / c))) * c;
    console.log(i, n, h / n, x, y);

    fill(255);
    ellipse(x + c/2, y + c/2, c);

    fill(0);
    ellipse(x + c/2, y + c/2, 5);

    text('x:' + x, x, y + 20);
    text('y:' + y, x, y + 40);

    // fill(220);
    // rect(width/2, height/2 - 30, 100, 100);
    // fill(0);
    // text('x' + x, width/2, height/2);
    // text('y' + y, width/2, height/2 + 30);
  }

  // text('for (let x = 0; x <= width; x += 100) {', 200, 30);
  // text('    for (let y = 0; y <= height; y += 100) {', 200, 60);
  // text('        ellipse(x + 50, y + 50, 100);', 200, 90);
  // text('    }', 200, 120);
  // text('}', 200, 150);
}