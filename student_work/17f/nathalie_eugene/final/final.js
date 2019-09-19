	var clicked = false;
    var counter = 0;

	var cloudSpeed = [];
	var cloudNum = 10;
	var cloudSize = [];
	var cloudX = [];
	var cloudY = [];

    var rainSpeed = [];
    var rainNum = 200;
    var rainSize = [];
    var rainX = [];
    var rainY = [];

    var rainSound;
    var birdSound;

    function preload() {
    	rainSound = loadSound("rain-int.wav");
    	birdSound = loadSound("birds_forest.mp3");
    }

function setup() {
	createCanvas(600, 700);
	background(0);
	noStroke();


	for (var i = 0; i < cloudNum; i++) {
        
		var x = random(0,width);
		cloudX.push(x);
		var y = random(0, height);
		cloudY.push(y);
		var size = random(30, 100);
		cloudSize.push(size);
		cloudSpeed.push(random(1, 2));
        
       
	}


	for (var i = 0; i < rainNum; i++) {
        
		var x = random(0,width);
		rainX.push(x);
		var y = random(0, height);
		rainY.push(y);
		var size = random(20, 40);
		rainSize.push(size);
		rainSpeed.push(random(20, 30));
        
 
	}
}



function draw() {
	if (clicked) {
		roomNight();
        if (!rainSound.isPlaying()) {
            rainSound.play();
            birdSound.pause();
        }
		
	}
	else {

        roomDay();
          if (!birdSound.isPlaying()) {
            birdSound.play();
              rainSound.pause();
        }
	}

}



function roomDay() {
	//ROOM DAY--------------------------------------------------------

	var x = 0;
	var y = 0;
	var windowH = 500;
	var windowW = 450;
	background(100, 200, 255);

	for (var i = 0; i <cloudNum; i++) {
	
		clouds(cloudX[i], cloudY[i], cloudSize[i]);
		cloudX[i] += cloudSpeed[i];
		fill(255);
		if (cloudX[i] - cloudSize[i]/2 > width) {
			cloudX[i] = -cloudSize[i]/2;
		}
	}

    //forest
    fill(0, 30, 15);
    var TL = y+500;
    triangle(x+100, y+310, x+40, TL, x+160, TL);
    triangle(x+150, y+350, x+100, TL, x+200, TL);
    triangle(x+200, y+270, x+150, TL, x+250, TL);
    triangle(x+230, y+300, x+180, TL, x+280, TL);
    triangle(x+270, y+360, x+220, TL, x+320, TL);
    triangle(x+300, y+350, x+250, TL, x+350, TL);
    triangle(x+330, y+300, x+280, TL, x+380, TL);
    triangle(x+360, y+320, x+300, TL, x+420, TL);
    triangle(x+400, y+380, x+350, TL, x+450, TL);
    triangle(x+450, y+330, x+400, TL, x+500, TL);

	//wall
	fill(61, 70, 93);
	rect(x, y, width, 50);
	rect(x, y, 50, height);
	rect(x, 550, width, 150);
	rect(475, y, 125, height);
    
    //pane
    fill(150, 200, 250, 70);
    rect(50, 50, windowW, 300);

	//frame
	fill(255);
	rect(50, 50, windowW, 25);
	rect(50, 50, 25, windowH);
	rect(50, 500, windowW, 50);
	rect(475, 50, 25, windowH);

	stroke(255);
	strokeWeight(10);
	line(175, 55, 175, 505);
	line(275, 55, 275, 505);
	line(375, 55, 375, 505);

	strokeWeight(20);
	line(60, 150, 490, 150);
	line(60, 350, 490, 350);

	noStroke();
	//curtain
	fill(163, 204, 220, 100);
	rect(x, y+20, 130, height);
    rect(x, y+20, 90, height);
    rect(x, y+20, 40, height);
    
    rect(x+470, y+20, 150, height);
    rect(x+520, y+20, 100, height);
    rect(x+570, y+20, 30, height);
    
    fill(200, 220, 230);
    rect(x,y+10, width, 20);

	//flower
	stroke(52, 107, 29);
	strokeWeight(5);
	line(475, 325, 475, 450);

	fill(52, 107, 29);
	noStroke();
	triangle(440, 350, 450, 375, 475, 370);
	triangle(500, 330, 490, 350, 475, 345);

	fill(219, 26, 49);
	ellipse(455, 290, 40, 40);
    ellipse(475, 280, 40, 40);
    ellipse(495, 290, 40, 40);
    ellipse(495, 310, 40, 40);
    ellipse(475, 320, 40, 40);
    ellipse(455, 310, 40, 40);
    
    
	fill(180, 11, 30);
	ellipse(455, 290, 25, 25);
    ellipse(475, 280, 25, 25);
    ellipse(495, 290, 25, 25);
    ellipse(495, 310, 25, 25);
    ellipse(475, 320, 25, 25);
    ellipse(455, 310, 25, 25);
    
    
	fill(255, 207, 58);
	ellipse(475, 300, 20, 20);

	//vase
	noStroke();
	fill(240, 150, 168);
	ellipse(475, 500, 100, 200);
	triangle(460, 375, 490, 375, 475, 450);
    
    fill(220, 120, 140);
    triangle(475, 375, 490, 375, 475, 450);
    arc(475, 500, 100, 200, PI+HALF_PI, HALF_PI);
    fill(240, 150, 168);
    ellipse(470, 490, 60, 170);

	//dresser
	fill(129, 92, 69);
	rect(25, 575, 550, 25);
	rect(50, 600, 500, 100);

	//drawers
	noFill();
	stroke(56, 35, 22);
	strokeWeight(5);
	rect(75, 625, 200, 100, 5);
	rect(325, 625, 200, 100, 5);

	//knobs
	noStroke();
	fill(150);
	ellipse(175, 675, 30, 30);
	ellipse(425, 675, 30, 30);
    
    fill(120); 
    arc(175, 675, 30, 30, 0, PI);
    arc(425, 675, 30, 30, 0, PI);
    fill(150);
    ellipse(175, 675, 30, 10);
    ellipse(425, 675, 30, 10);


	//shadow
	fill(81, 42, 17, 80);
	rect(25, 590, 550, 10);
	rect(50, 600, 500, 40);
}

function roomNight() {
	//ROOM NIGHT ---------------------------------------------------------------

	background(0);

	var x = 0;
	var y = 0;
	var windowH = 500;
	var windowW = 450;
    
    //forest
    fill(0, 20, 5);
    var TL = y+500;
    triangle(x+100, y+310, x+40, TL, x+160, TL);
    triangle(x+150, y+350, x+100, TL, x+200, TL);
    triangle(x+200, y+270, x+150, TL, x+250, TL);
    triangle(x+230, y+300, x+180, TL, x+280, TL);
    triangle(x+270, y+360, x+220, TL, x+320, TL);
    triangle(x+300, y+350, x+250, TL, x+350, TL);
    triangle(x+330, y+300, x+280, TL, x+380, TL);
    triangle(x+360, y+320, x+300, TL, x+420, TL);
    triangle(x+400, y+380, x+350, TL, x+450, TL);
    triangle(x+450, y+330, x+400, TL, x+500, TL); 
    
	for (var i = 0; i <rainNum; i++) {
	
		raindrops(rainX[i], rainY[i], rainSize[i]);
		rainY[i] += rainSpeed[i];
        
		if (rainY[i] - rainSize[i]/2 > height) {
			rainY[i] = -rainSize[i]/2;
		}
	}
    
noStroke();

	//wall
	fill(55, 62, 78);
	rect(x, y, width, 50);
	rect(x, y, 50, height);
	rect(x, 550, width, 150);
	rect(475, y, 125, height);
    
     //pane
    fill(150, 200, 250, 40);
    rect(50, 50, windowW, windowH);

	//frame
	fill(163, 162, 166);
	rect(50, 50, windowW, 25);
	rect(50, 50, 25, windowH);
	rect(50, 500, windowW, 50);
	rect(475, 50, 25, windowH);

	stroke(163, 162, 166);
	strokeWeight(10);
	line(175, 55, 175, 505);
	line(275, 55, 275, 505);
	line(375, 55, 375, 505);

	strokeWeight(20);
	line(60, 150, 490, 150);
	
   
    
	noStroke();
	//curtain
	fill(121, 147, 202, 90);
	
	rect(x, y+20, 130, height);
    rect(x, y+20, 90, height);
    rect(x, y+20, 40, height);
    
    rect(x+470, y+20, 150, height);
    rect(x+520, y+20, 100, height);
    rect(x+570, y+20, 30, height);
    
    fill(120, 130, 140);
    rect(x,y+10, width, 20);

	//cat
	fill(0);
	ellipse(375, 525, 75, 75);
	ellipse(450, 560, 120, 100);
	ellipse(385, 575, 70, 50);
	ellipse(490, 570, 70, 50);
	triangle(330, 480, 340, 525, 375, 500);
	triangle(400, 470, 340, 525, 407, 510);
    
    fill(0);
    ellipse(355, 515, 12, 12);
    ellipse(390, 511, 12, 12);
    
    counter+=1;
    
    if (counter < 290) {
    fill(255, 203, 65);
    ellipse(355, 515, 12, 12);
    ellipse(390, 511, 12, 12);
    }
    
    if (counter > 310) {
        counter = 0;
    }

	//dresser
	fill(121, 92, 81);
	rect(25, 575, 550, 25);
	rect(50, 600, 500, 100);

	//drawers
	noFill();
	stroke(56, 35, 22);
	strokeWeight(5);
	rect(75, 625, 200, 100, 5);
	rect(325, 625, 200, 100, 5);

	//knobs
	noStroke();
	fill(130);
	ellipse(175, 675, 30, 30);
	ellipse(425, 675, 30, 30);
    
    fill(100); 
    arc(175, 675, 30, 30, 0, PI);
    arc(425, 675, 30, 30, 0, PI);
    fill(130);
    ellipse(175, 675, 30, 10);
    ellipse(425, 675, 30, 10);


	//shadow
	fill(81, 42, 17, 80);
	rect(25, 590, 550, 10);
	rect(50, 600, 500, 40);
}

function mouseClicked() {
	clicked = !clicked;
}

function clouds(x,y,size) {

	fill(255);
	ellipse(x+size, y+size, size*1.5, size/2);
	ellipse(x+size/2, y+size/1.5, size/2, size/2);
	ellipse(x+size, y+size/1.5, size, size/1.5);
	ellipse(x+size*1.4, y+size, size*0.8, size*0.8);
	ellipse(x+size*1.5, y+size*1.2, size*1.3, size/2);
}

function raindrops(x, y, size) {
    stroke(255);
    strokeWeight(2);
    line(x+size, y+size, x+size, y+size*2);
}