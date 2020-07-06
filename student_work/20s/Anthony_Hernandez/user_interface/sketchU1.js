/*
	MMP210
	PatternV_1
	4.6.2020
*/

var numCircles = 10
var slider;
var hColor = 1
var hueSlider;

function setup() {
	createCanvas(640,360);
	frameRate(6);
	pattern();
	
	var button = createButton("Generate Pattern");
	button.position(10,500);
	button.mousePressed(pattern);

	var saveButton = createButton("Save Image");
	saveButton.position(180,500);
	saveButton.mousePressed(saveImage);

	var label = createElement("label", "Star Number and House Color:");
	label.position(10,560);

	//user Interface
	slider = createSlider(5, 200, numCircles);
	slider.position(270, 560);
	slider.input(StarNumber)

	/*
	hueSlider = createSlider(1,360, hColor);
	hueSlider.position(140, 600);
	hueSlider.input(StarNumber);
	*/
}

function saveImage() {
	save("pattern.png");
}

/*function updateHue() {
	hColor = hueSlider.value(); 
	pattern()
}*/

function StarNumber() {
	numCircles = slider.value(); 
	hColor = slider.value(); 
	pattern();
}

function pattern() {
	background('black');



	for (let i = 0; i < numCircles; i++){
		let x = i * width/numCircles + random(50); 
		/*	"Width/numCircles" allows be in middle on screen*/		 
		let y = random(height);
		let s = random(1, 10);

		//stars	
		fill('white');
		ellipse(x,y,s);

		//Moon
		fill('grey');
		ellipse(15, 40, 50);
		ellipse(25, 40, 7);
		ellipse(10, 50, 5);
		ellipse(7, 25, 5);

		//tree
		fill(92,56,19);
		rect(500, 200, 10, 300);
		//Tree Leaves
		fill('green');
		ellipse(480,200,50);
		ellipse(500,180,80);
		ellipse(520,170,60);
		ellipse(520,220,30);


		//house
		//0, 68%, 42%
		colorMode(HSB,360,100,100);
		fill(numCircles,68,42);

		rect(275,200, 20,30);//chimeny		
		triangle(180,240, 320,240,250,200);//roof
		rect(200, 240, 100,80);//house
		fill('white');
		rect(205,260, 10,10); //window
		rect(280,260, 10,10); //window
		fill(92,56,19);
		rect(250,280, 20,20); //door
		

	
		//grass
		fill('green');
		rect(0,300,width,360);
	}
}