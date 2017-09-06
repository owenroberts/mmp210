// logo
function setup() { 
    createCanvas(640, 480);
    background(200);
    
    // ts means text size
    var ts = 60;
    var lineNumber = 1;
    
    textSize(ts);
    textFont("Monaco");
    textAlign(CENTER);
    
    
    noStroke();
    //rect(320, 240, 70, 12);
    
    var y = 10;
    var x = 320;

    var greeting = "Hello world!";
    var greetingWidth = textWidth(greeting);
    rectMode(CENTER);
    
    rect(x, y + ts/2, greetingWidth, ts);
    text(greeting, x, y + ts*lineNumber);
    lineNumber = lineNumber + 1;
    
    fill("lightblue");
    strokeWeight(10);
    stroke("blue");
    
    textStyle(ITALIC);
    text("你好，世界", x, y + ts*lineNumber);
    textStyle(BOLD);
    
    fill("lightgreen");
    lineNumber += 1;
    text("© 2017", x, y + ts*lineNumber);
    textStyle(NORMAL);
    lineNumber++;
    text("Another line!", x, y + ts*lineNumber);
   
}