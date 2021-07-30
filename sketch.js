var ship,ship_moving;
var seaimg;

function preload(){
  ship_moving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaimg = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
 
sea = createSprite(200,201,100,10);
sea.addImage(seaimg);
sea.scale=0.2;
sea.velocityX=-7;
ship = createSprite(180,250,20,20);
ship.addAnimation("moving",ship_moving);
ship.scale = 0.2;
}

function draw() {
  background("white");
  
if (sea.x < 0) {
sea.x=400

}
  drawSprites()
}