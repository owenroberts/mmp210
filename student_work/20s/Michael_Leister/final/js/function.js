/*
Final Project + Sound Sampler
5.28.2020

							Works Cited

Amir027. "white hAND." Opengameart.org. Jan. 3, 2014. 
	https://opengameart.org/content/cursor . 
Andreyin. "hand_cursor0000.png." Opengameart.org. Oct. 21, 2018.
	https://opengameart.org/content/hand-cursor .  
Audible-edge. “Tornado siren in Streamwood IL.wav.” Freesound. 
	18 May 2019, https://freesound.org/people/audible-edge/sounds/72831/ .				
B66. "alien perc 17talien perc." Freesound. Oct. 27, 2011.
		https://freesound.org/people/Blackie666/sounds/132392/ .   
guamorims. “Desperate screams.” Freesound.
	5 May 2017, https://freesound.org/people/guamorims/sounds/391357/ .
middone. "Alien Breath.mp3." Freesound. Feb. 16, 2016. 
	https://freesound.org/people/middone/sounds/336695/ . 
n1ghthawk. "alien_alert-22.wav" Freesound. Dec. 20, 2012. 
	https://freesound.org/people/n1ghthawk/sounds/172129/.
Roberts, Owen. Sound sampler with functions. MMP210, BMCC: May 6, 2020: 
	https://www.youtube.com/watch?v=p72ZaJ9n0Ds .
Santoniche. "Nave.png." OpenGameArt. Jan. 22, 2019, 
    https://opengameart.org/content/alien-spaceship . 
Soundscape55. "Alien.wav." Freesound. July 19, 2018. 
	https://freesound.org/people/Soundscapes55/sounds/434973/ .
Westbeam. "SpaceBackground." Opengameart.org. April 14, 2013.
	https://opengameart.org/content/space-background-1. 


*/

var encounter, alert, alien, breath, soundscape,  hand, background;

function preload(){
		encounter = loadSound("sounds/encounter.mp3");
		alert = loadSound("sounds/alert.mp3");
		alien = loadSound("sounds/alien.mp3");
		breath = loadSound("sounds/breath.mp3");
		soundscape = loadSound("sounds/soundscape.mp3");
		hand = loadImage("images/hand2.png");
		background = loadImage("images/back.png");
		spaceship = loadImage("images/saucer.png");
}

function setup() {
	createCanvas(960, 600);
	noStroke();

}

function draw(){

image(background, 0, 0, 960, 600);
stroke('black');
strokeWeight(1);

push();
  	   var x = 150;
  	   var size = 5;
  	   var y = 80; 


//spaceship top lid
		fill('azure');
		ellipse(x, y+120,  size+49, size+ 20);

//spaceship middle part 1
		fill(255, 128, 195);
		ellipse(x, y+127, size+96,  size+25);


//spaceship middle part 2
		fill(199, 21, 133);
		ellipse(x, y+130, size+95,  size+20);

//spaceship bottom lid

		fill(115, 13, 77);
		ellipse(x, y+135, size+60, size+19);

//entrance
		//fill(26, 255, 178);
		fill(255, 199, 179);
		ellipse(x, y+140,  size+36,size+ 9);

pop();

push();
  	   var x = 300;
  	   var size = 60;
  	   var y = 200; 


//spaceship top lid
		fill('azure');
		ellipse(x, y+120,  size+49, size+ 20);

//spaceship middle part 1
		fill(255, 128, 195);
		ellipse(x, y+127, size+96,  size+25);


//spaceship middle part 2
		fill(199, 21, 133);
		ellipse(x, y+130, size+95,  size+20);

//spaceship bottom lid

		fill(115, 13, 77);
		ellipse(x, y+135, size+60, size+19);

//entrance
		//fill(26, 255, 178);
		fill(165, 188, 217);
		ellipse(x, y+140,  size+36,size+ 9);

pop();

push();
  	   var x = 475;
  	   var size = 25;
  	   var y = 50; 


//spaceship top lid
		fill('azure');
		ellipse(x, y+120,  size+49, size+ 20);

//spaceship middle part 1
		fill(255, 128, 195);
		ellipse(x, y+127, size+96,  size+25);


//spaceship middle part 2
		fill(199, 21, 133);
		ellipse(x, y+130, size+95,  size+20);

//spaceship bottom lid

		fill(115, 13, 77);
		ellipse(x, y+135, size+60, size+19);

//entrance
		//fill(26, 255, 178);
		fill(189, 184, 224);
		ellipse(x, y+140,  size+36,size+ 9);

pop();



push();
  	   var x = 550;
  	   var size = 150;
  	   var y = 350; 


//spaceship top lid
		fill('azure');
		ellipse(x, y+120,  size+49*1.8, size+ 20);

//spaceship middle part 1
		fill(255, 128, 195);
		ellipse(x, y+127, size+96*1.8,  size+25);


//spaceship middle part 2
		fill(199, 21, 133);
		ellipse(x, y+130, size+95*1.8,  size+20);

//spaceship bottom lid

		fill(115, 13, 77);
		ellipse(x, y+135, size+60*1.8, size+19);

//entrance
		//fill(26, 255, 178);
		fill(255, 199, 179);
		ellipse(x, y+140,  size+36*1.8,size+ 9);

pop();

push();
  	   var x = 800;
  	   var size = 90;
  	   var y = 200; 


//spaceship top lid
		fill('azure');
		ellipse(x, y+120,  size+49*1.5, size+ 20);

//spaceship middle part 1
		fill(255, 128, 195);
		ellipse(x, y+127, size+96*1.5,  size+25);


//spaceship middle part 2
		fill(199, 21, 133);
		ellipse(x, y+130, size+95*1.5,  size+20);

//spaceship bottom lid

		fill(115, 13, 77);
		ellipse(x, y+135, size+60*1.5, size+19);

//entrance
		//fill(26, 255, 178);
		fill(223, 179, 255);
		ellipse(x, y+140,  size+36*1.5,size+ 9);

pop();


//calling or invoking the function
	button(encounter, 800, 315, 250);
	button(alert, 550, 485, 330);
	button(alien, 150, 210, 120);
	button(breath, 300, 325, 200);
	button(soundscape, 475, 180, 150);


}
		

//function definition
function button(sound, x, y, s) {

	//detection if mouse is in button
	var d = dist(x, y, mouseX, mouseY)
	
	if (frameCount % 30 === 0) {
			r = random(0,100);
			g = random(0,255);
			b = random(0,255);
		}
	
	if (d < s/2){
		if (mouseIsPressed) {
			push();
			noStroke();
			textSize(40);
			textFont ("Impact");
			textStyle(ITALIC);
    		fill('lightgreen');
			text("Great!", 465, 80);
			pop();
			   
		noStroke();	
		fill(r, g, b, 80);
			if (!sound.isPlaying()) {
				sound.play();

			}	



			// shorter sounds
			/*
			if (sound.isPlaying()) {
				sound.pause();
			} else {
				sound.play();
			}
			*/

		}else{
			noStroke();
			noFill();
			noCursor();
			image(spaceship, mouseX, mouseY, 70, 30);
			
		}
	} else {
		noStroke();
		noFill();
		 push();
	 noStroke();
	 textSize(40);
	 textStyle(ITALIC);
	textFont ("Impact");
    fill('white');
	text("Click and hold on any UFO.", 20, 80);
	pop();

	}

	ellipse(x, y, s);
	
		noCursor();
	    image(hand, mouseX, mouseY, 20, 20);
	
	
}