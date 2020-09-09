function setup() {
  createCanvas(800,400);
 fix= createSprite(400, 200, 50, 50);
 moving=createSprite(200,200,50,50);
 object1=createSprite(200,300,50,50);
 object2=createSprite(200,50,50,50);
 fix.velocityX=-2;
 moving.velocityX=2;
 object1.velocityY=-2;
 object2.velocityY=2;
}

function draw() {
  background(0,0,0);
  /*moving.y=World.mouseY;
  moving.x=World.mouseX;
  object1.y=World.mouseY;
  object1.x=World.mouseX;
  isTouching(moving,fix);
  isTouching(object1,object2);
  if((isTouching(moving,fix))===true){
    moving.shapeColor="blue";
    fix.shapeColor="red";
  }
  else{
    moving.shapeColor="gray";
    fix.shapeColor="yellow";
  }
  if((isTouching(object1,object2))===true){
    object1.shapeColor="green";
    object2.shapeColor="black";
  }
  else{
    object1.shapeColor="orange";
    object2.shapeColor="purple";
  }*/
  drawSprites();
  bounceOff(moving,fix);
  bounceOff(object1,object2);
}
