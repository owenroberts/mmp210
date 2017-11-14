function setup() {
	createCanvas(640, 480);
	background("white");

    var y = 0;
    var lineHeight = 50;
    
    var str1 = "Hello world";
    var str2 = "你好，世界";
    var str3 = "Strings can also include numbers like 100, punctuation like !~+:) and special characters like π or © or ∆";
    
    textSize(40);
    textStyle(BOLD);
    
    fill("blue");
    strokeWeight(4);
    stroke("red");
    y += lineHeight;
    text(str1, 20, y);
    y += lineHeight;
    text(str2, 20, y);
    
    textSize(30);
    textStyle(ITALIC);
    textFont("monaco");
    textLeading(30);
    textAlign(RIGHT, CENTER);
    y += lineHeight;
    text(str3, 20, y, 500, 300);
    
    console.log(str1.length);
    console.log(str1.charAt(0));
    console.log(str1.charAt(str1.length - 1));
    console.log(str1[0]);
    console.log(str1[str1.length - 1]);
    console.log(str1.replace("world", ""));
    
}