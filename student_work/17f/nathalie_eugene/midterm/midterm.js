function setup() {
	createCanvas(1100, 500);
	
	design();

}

function design() {

	//BACKGROUND=======================================
    	var r = random(0, 100);
		var g = random(0, 40);
		var b = random(0, 80);

    background(r, g, b);
    var columnNum = 10;
	var columnSize = width/columnNum;


	for (var a = 0; a <= width; a += columnSize) {
	

		  var r = random(100, 170);
		  var g = random(0, 40);
		  var b = random(100, 170);

		  fill(r, g , b);
		  noStroke();

		  rect(a, 0, 50, height);
		
	}

	//SHAPES====================================

	var numb = 15;
    var columns = Math.sqrt(numb);
    var rows = columns;
	var sW = width/columns;
    var sH = height/rows;



    //GHOST======================================
    for(var x = 5; x < width; x += sW/2) {
        for (var y = 5; y < height; y += sH) {

        var choice = random(6);
        if(choice < 1) {
		  var r = random(50, 190);
		  var g = random(70, 200);
		  var b = random(180, 240);

		  fill(r, g , b);
		  noStroke();

	       arc(x+40, y+40, 80, 80, PI, 0);
	       rect(x,y+40, 80, 30);
	       triangle(x, y+70, x+20, y+70, x+10, y+90);
	       triangle(x+20, y+70, x+40, y+70, x+30, y+90);
	       triangle(x+40, y+70, x+60, y+70, x+50, y+90);
	       triangle(x+60, y+70, x+80, y+70, x+70, y+90);

	       //eyes
	       fill(0);
	       ellipse(x+20, y+35, 15, 15);
	       ellipse(x+60, y+35, 15, 15);

	       //mouth
	       arc(x+40, y+60, 10, 10, PI, 0);
	   } else if(choice < 2) {

	      //monster
	   	  var r = random(0, 100);
		  var g = random(120, 180);
		  var b = random(0, 50);

		  fill(r, g, b);
		  noStroke();

		  rect(x+5, y+5, 80, 60, 10);
		  rect(x+20, y+50, 50, 50, 10);

		  //hair
		    fill(0);
		  triangle(x+15, y+5, x+35, y+5, x+25, y+20);
		  triangle(x+35, y+5, x+55, y+5, x+45, y+20);
		  triangle(x+55, y+5, x+75, y+5, x+65, y+20);

		  //eyes
		 arc(x+25, y+30, 20, 20, 0, PI);
		 arc(x+65, y+30, 20, 20, 0, PI);

		  //nose
		  triangle(x+45, y+50, x+40, y+65, x+50, y+65);

		  //mouth
		  ellipse(x+30, y+85, 5, 10);
		  ellipse(x+40, y+85, 5, 10);
		  ellipse(x+50, y+85, 5, 10);
		  ellipse(x+60, y+85, 5, 10);
	

	   }

	      //PUMPKIN========================================

    	  else if(choice < 3) {
    		var r = random(180, 250);
		  	var g = random(70, 140);
		  	var b = random(0, 40);
    		fill(r, g, b);
    		noStroke();

    		ellipse(x+30, y+50, 50, 60);
    		ellipse(x+50, y+50, 80, 70);
    		ellipse(x+70, y+50, 50, 60);

    		fill(0);
    		//eyes
    		triangle(x+20, y+40, x+40, y+50, x+25, y+50);
    		triangle(x+60, y+50, x+80, y+40, x+75, y+50);

    		//mouth 
    		quad(x+20, y+65, x+30, y+60, x+40, y+65, x+30, y+70);
    		quad(x+40, y+65, x+50, y+60, x+60, y+65, x+50, y+70);
    		quad(x+60, y+65, x+70, y+60, x+80, y+65, x+70, y+70);

    	    } else if (choice < 4) {
    	    //PUMPKIN 2 ========================================

    	    var r = random(220, 255);
		  	var g = random(60, 90);
		  	var b = random(0, 30);
    		fill(r, g, b);
    		noStroke();

    		ellipse(x+30, y+50, 50, 60);
    		ellipse(x+50, y+50, 80, 70);
    		ellipse(x+70, y+50, 50, 60);

    		fill(0);
    	    //eyes
    	    ellipse(x+30, y+45, 20, 20);
    		ellipse(x+70, y+45, 20, 20);

    		//mouth 
    		arc(x+50, y+60, 15, 15, 0, PI);

    	    }else if (choice < 5) {

    	    	//SKULL ============================================
    	    	var r = random(150, 230);
		 		var g = random(100, 200);
		  		var b = random(100, 150);

		  		fill(r, g , b);
		  		noStroke();

    	    	ellipse(x+45, y+45, 80, 80);
    	    	rect(x+20, y+60, 50, 40, 10);

    	    	//eyes
    	    	fill(0);
    	    	arc(x+35, y+40, 40, 40, HALF_PI, PI);
		 		arc(x+55, y+40, 40, 40, 0, HALF_PI);

		 		//nose
		 		triangle(x+45, y+60, x+40, y+75, x+50, y+75);

    	    	//teeth
    	    	stroke(0);
    	    	strokeWeight(3);
    	    	line(x+30, y+85, x+30, y+100);
    	    	line(x+40, y+85, x+40, y+100);
    	    	line(x+50, y+85, x+50, y+100);
    	    	line(x+60, y+85, x+60, y+100);

    	    	
    	    } else {
    	    	//BAT ==============================================

    	    	var r = random(0, 20);
		  		var g = random(0, 0);
		  		var b = random(0, 30);

		  		fill(r, g , b);
		  		noStroke();
    	    	
    	    	triangle(x+40, y+20, x+80, y+20, x+60, y+100);
    	    	triangle(x+40, y+21, x+60, y+21, x+50, y+5);
    	    	triangle(x+60, y+21, x+80, y+21, x+70, y+5);
    	    	//wings
    	    	arc(x+30, y+60, 60, 60, PI, 0);
    	    	triangle(x, y+59, x+20, y+59, x, y+85);
    	    	triangle(x+20, y+59, x+40, y+59, x+20, y+85);
    	    	triangle(x+40, y+59, x+60, y+59, x+40, y+85);

    	    	arc(x+90, y+60, 60, 60, PI, 0);
    	    	triangle(x+60, y+59, x+80, y+59, x+80, y+85);
    	    	triangle(x+80, y+59, x+100, y+59, x+100, y+85);
    	    	triangle(x+100, y+59, x+120, y+59, x+120, y+85);
    	    }
            



    	//END================    
 
        }
    }


}

function mouseClicked() {
	design();
}