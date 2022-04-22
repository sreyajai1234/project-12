var pathImg,path 
var boy,boyImg,left_boundary,right_boundary

function preload(){
  //pre-load images
  pathImage = loadImage("PRO-C10 images/path.png")
  boyImg= loadAnimation("PRO-C10 images/Jake1.png","PRO-C10 images/Jake2.png","PRO-C10 images/jake3.png","PRO-C10 images/jake4.PNG","PRO-C10 images/jake5.png")
  

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200)
  path.addImage(pathImage)
  path.scale=1.2
  path.velocityY=4;
  boy=createSprite(180,340,30,30)
  boy.addAnimation("boyrunning", boyImg)
  boy.scale=0.5
 
  left_boundary=createSprite(0,0,100,800)
  left_boundary.visible=false;

  right_boundary=createSprite(400,0,100,800)
  right_boundary.visible=false;

}
function draw() {
  background(0);

  if (path.y>400){
    path.y = height/2
    

    boy.x=World.mouseX

   edges=createEdgeSprites()
    boy.collide(right_boundary)
    boy.collide(left_boundary)
    boy.collide(edges[3]);
 }
  drawSprites();
}

