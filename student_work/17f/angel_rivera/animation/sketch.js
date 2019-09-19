    //Bunch of unorganized variables from a long time ago
    var str1 = "Angel";
	var str2 = "Noel";
	var str3 = "Rivera";
    
    var circle1 = "white";
    var circle2 = "black";
    var circlesize = 80;
    var circlesize2 = 80;
    var circle1x = 60;
    var circle1x2 = 576;
    var circle1y2 = 385;
    var circle2x = -15;
    var circle2x2 = 500;
    var circle2x3 = 580;
    var circle2x4 = 135;
    var circle2x5 = 650;
    var circle2y = 78;
    var circle2y2 = 230;
    var circle2y3 = 384;
    var textsize = 100;
    var textx1 = 199;
    var textx2 = 225;
    var textx3 = 190;
    var texty1 = 10;
    var texty2 = 170;
    var texty3 = 320;
    var textz1 = 20;
    var textz2 = 200;
    var rectx = 0;
    var recty = 153.3;
    var rectw = 1000;
    var xSpeed = 2
    var textfont = "Times New Roman";

function setup() {
    createCanvas(640, 460);
    frameRate(30);
}
function draw() {
    background("black");
    
   
    fill(circle1);
    rect( rectx, recty, rectw, recty);
	
	textSize(textsize);
	fill(circle1);
	noStroke();
	textFont(textfont);
	text(str1, textx1, texty1, textz1, textz2);
    
    textSize(textsize);
	fill(circle2);
	noStroke();
	textFont(textfont);
	text(str2, textx2, texty2, textz1, textz2);
	
    textSize(textsize);
	fill(circle1);
	noStroke();
	textFont(textfont);
	text(str3, textx3, texty3, textz1, textz2);
    
    fill(circle1);
    ellipse(circle1x, circlesize, circlesize, circlesize);
    ellipse(circle1x2, circlesize, circlesize, circlesize);
    
    ellipse(circle1x, circle1y2, circlesize, circlesize);
    ellipse(circle1x2, circle1y2, circlesize, circlesize);
    
    
    fill(circle2);
    ellipse(circle2x, circle2y, circlesize, circlesize);
    ellipse(circle2x2, circle2y, circlesize, circlesize);
    
    ellipse(circle1x, circle2y2, circlesize2, circlesize2);
    ellipse(circle2x3, circle2y2, circlesize2, circlesize2);
    
    ellipse(circle2x4, circle2y3, circlesize, circlesize);
    ellipse(circle2x5, circle2y3, circlesize, circlesize);
    
    //actual animation
    circle2x++;
    circle2x2++;
    circle2x4 --;
    circle2x5 --;
    circlesize2 --;
    
    if (circle2x >= 140, circle2x2 >= 660, circle2x4 <= -20, circle2x5 <= 500, circlesize2 <= -80) {
    circle2x = -15;
    circle2x2 = 500;
    circle2x4 = 135;
    circle2x5 = 650;
    circlesize2 = 80;
}
    
    
    
    
    
    

    
    
    
}