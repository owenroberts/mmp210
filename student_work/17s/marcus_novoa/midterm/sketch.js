// Midterm - Generative Pattern

function setup() {
  createCanvas(640, 480);
  noStroke();
  
  var sky = color(52, 152, 219); // Blue Sky Color
  var buildingHeight = 0; // Building Height set to 0, will change later

  background(sky); // "Sky" Blue Background
  
  // Loop for drawing clouds
  for(var i = 0; i < 3; i++){
    var x = random(0, width);
    var y = random(30, 40);
    drawClouds(x, y);
  }

  // Loop for drawing red buildings
  for(var i = 0; i < 5; i++){
    var x = random(0, width);
    var y = height - buildingHeight;
    drawBuilding2(x, y, buildingHeight);
    buildingHeight = random(100, 400);
  }
  
  // Loop for drawing gray buildings
  for(var i = 0; i < 10; i++){
    var x = random(0, width);
    var y = height - buildingHeight;
    drawBuilding(x, y, buildingHeight);
    buildingHeight = random(100, 400);
  }
}

function drawClouds(x, y) { // Cloud Function
  fill(240);
  var cloudWidth = random(50, 100);
  var cloudHeight = random(20, 30);
  ellipse(x, y, cloudWidth, cloudHeight);
  ellipse(x + 20, y, cloudWidth * 1.5, cloudHeight * 2);
}

function drawBuilding(x, y, buildingHeight) { // Gray Building Function
  var randomGray = random(130, 180);
  fill(randomGray);
  var buildingWidth = random(100, 140);
  rect(x, y, buildingWidth, buildingHeight);
}

function drawBuilding2(x, y, buildingHeight) { // Red Building Function
  var r = random(100, 140);
  var g = 50;
  var b = 50;
  fill(r, g, b);
  var buildingWidth = random(100, 140);
  rect(x, y, buildingWidth, buildingHeight);
}