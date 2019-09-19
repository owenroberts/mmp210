function setup() {
    createCanvas(640, 460);
}
function draw() {
    background("black");
    
    var str1 = "Angel";
	var str2 = "Noel";
	var str3 = "Rivera";
    
    var circle1 = "white";
    var circle2 = "black";
    var circlesize = 80;
    var circle1x = 60;
    var circle1x2 = 576;
    var circle1y2 = 385;
    var circle2x = 76;
    var circle2x2 = 560;
    var circle2x3 = 580;
    var circle2x4 = 45;
    var circle2x5 = 593;
    var circle2y = 70;
    var circle2y2 = 230;
    var circle2y3 = 375;
    var textsize = 120;
    var textx1 = 169;
    var textx2 = 195;
    var textx3 = 160;
    var texty1 = 8;
    var texty2 = 160;
    var texty3 = 310;
    var textz1 = 20;
    var textz2 = 200;
    var rectx = 0;
    var recty = 153.3;
    var rectw = 1000;
    var textfont = "Times New Roman";

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
    
    ellipse(circle1x, circle2y2, circlesize, circlesize);
    ellipse(circle2x3, circle2y2, circlesize, circlesize);
    
    ellipse(circle2x4, circle2y3, circlesize, circlesize);
    ellipse(circle2x5, circle2y3, circlesize, circlesize);
    
    
    
    
    
    
    
    
    

    
    
    
}