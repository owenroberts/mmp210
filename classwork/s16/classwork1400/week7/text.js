function setup() {
    createCanvas(640, 480);
    background("white");

    var lineSize = 70;

    textSize(lineSize);
    
    var y = lineSize;
    
    var str1 = "Hello world.";
    var str2 = "你好，世界";
    var str3 = "Strings can also include numbers like 100, punctuation like !~+:) and special characters like π or © or ∆";
    
    fill("blue");
    textFont("Karla");
    stroke("green");
    
    str1 = str1.replace("Hello", "");
    str1 = "Goodbye" + str1;
    text(str1, 20, y);
    
    y += lineSize;
    text(str2[str2.length - 1], 20, y);
    
    textFont("Karla");
    
    textStyle(ITALIC);
    textAlign(RIGHT);
   
    y += lineSize;
    textSize(30);
    textLeading(50);
    text(str3, 20, y, width - 50, 200);
}




