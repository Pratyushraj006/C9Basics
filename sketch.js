var box;

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,18,18);
}

function draw() 
{
  background(30);
  if(keyIsDown (RIGHT_ARROW))
  {
     box.x=box.x+10 ;
  }
  if(keyIsDown (LEFT_ARROW))
  {
     box.x=box.x-10 ;
  }
  if(keyIsDown (UP_ARROW))
  {
     box.y=box.y-10 ;
  }
  if(keyIsDown (DOWN_ARROW))
  {
     box.y=box.y+10 ;
  }
  drawSprites();
}




