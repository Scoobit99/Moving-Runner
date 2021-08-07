var Runner,Track;
var TrackImg,RunnerImg;
var boundry1,boundry2;

function preload(){
  //pre-load images
TrackImg=loadImage("path.png");
RunnerImg=loadAnimation("Runner-1.png,Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  background("black");
  Track=createSprite(200,200);
  Track.addImage(TrackImg);
  Track.velocityY = 4;
  Track.scale=1.2;
  //create boy running
  Runner=createSprite(200,340,40,60)
  Runner.addAnimation("Movingrunner",RunnerImg)
  Runner.scale=0.2
}

function draw() {
  background(0);
 Runner.x = World.mouseX
 drawSprites();
}
