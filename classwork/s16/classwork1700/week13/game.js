var player;
var speed = 10;
var jump = 20;
var jumping = false;

var player_walk_sprites,
	player_walk,
	player_stand_sprites,
	player_stand;

var gravity = 1;
var platform, ground;
var obstacle, fire;

function preload() {
	player_walk_sprites = loadSpriteSheet("player.png", 64, 64, 8);
	player_walk = loadAnimation(player_walk_sprites);
	
	player_stand_sprites = loadSpriteSheet("player.png", 64, 64, 1);
	player_stand = loadAnimation(player_stand_sprites);
	
	fire = loadImage("fire.png");
	ground = loadImage("ground.png");
}

function setup() {
	createCanvas(720, 360);
	
	player = createSprite(100, 0);
	player.addAnimation("walk", player_walk);
	player.addAnimation("stand", player_stand);
	player.setCollider("circle", 0, 0, 32, 32);
	//player.debug = true;
	
	platform = createSprite(width/2, height, width, 20);
	platform.addImage(ground);
	platform.setCollider("rectangle", 0, 0, width, 10);
	//platform.debug = true;
	
	obstacle = createSprite(300, height, 60, 40);
	obstacle.addImage(fire);
	obstacle.setCollider("circle", 0, 0, 32, 32);
	//obstacle.debug = true;
}

function draw() {
	background("black");
	
	if ( keyDown("space") && !jumping) {
		player.velocity.y -= jump;
		jumping = true;
	}
	
	if ( keyDown("d") ) {
		obstacle.position.x -= speed;
		platform.position.x -= speed;
		player.changeAnimation("walk");
	} else {
		player.changeAnimation("stand");	
	}
	
	if (platform.position.x < 0) platform.position.x = width/2;
	if (obstacle.position.x < -obstacle.width) obstacle.position.x = random(width, width*2);
	
	player.velocity.y += gravity;
	if ( player.collide(platform) ) {
		player.velocity.y = 0;
		if (jumping) jumping = false;
	}
	
	if ( player.collide(obstacle) ) {
		player.remove();
	}
	
	drawSprites();
}