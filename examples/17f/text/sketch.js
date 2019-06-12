function setup() {
	createCanvas(640, 460);

	background("white");
	
	var str1 = "Hello world.";
	var str2 = "你好，世界";
	var str3 = "Strings can also include numbers like 100, punctuation like !~+:) and special characters like π or © or ∆";
	
	textSize(64);
	fill("blue");
	noStroke();
	textFont("Comic Sans MS");
	text(str1, 400, 100, 20, 200);
	
	textStyle(ITALIC);
	stroke("green");
	strokeWeight(10);
	text(str2, 0, 100, 200, 10000);
	
	noFill();
	strokeWeight(0.5);
	textFont("Georgia");
	textSize(32);
	text(str3, 0, 300, 600, 300);
}