
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var dustbin1, paperObject,groundObject;
var world;var sling;

function preload()
{
  boy=loadImage("boy.png");
  tree=loadImage("tree.png")
}

function setup() {
	createCanvas(1250, 650);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	
	groundObject=new Ground(width/2,620,width,20);
	
	
    mango1=new Mango(850,200,30);
    mango2=new Mango(950,200,30);
    mango3=new Mango(750,300,30);
    mango4=new Mango(900,300,30);
    mango5=new Mango(1050,300,30);
    mango6=new Mango(825,375,30);
    mango7=new Mango(975,375,30);
    stone1=new Stone(1000,500,20);

    sling=new Slingshot(stone1.body,{x:140,y:510})

	Engine.run(engine);

	  
  
}


function draw() {

  background(230);

  textSize(25);
  text("PRESS SPACE TO GET A CHANCE TO PLAY !!",50,50)

  rectMode(CENTER);
  
 
  image(boy,100,460,200,200);
  image(tree,650,130,500,500)
 
  groundObject.display();
 
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone1.display();
  mango6.display();
  mango7.display();
  sling.display();

  detectollision(stone1,mango1);
  detectollision(stone1,mango2);
  detectollision(stone1,mango3);
  detectollision(stone1,mango4); 
  detectollision(stone1,mango5);
  detectollision(stone1,mango6);
  detectollision(stone1,mango7);
}

function mouseDragged(){

    Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){

sling.fly()

}

function keyPressed(){

  if (keyCode == 32){
   Matter.Body.setPosition(stone1.body,{x:140,y:510})
   sling.attach(stone1.body)

  }

}

function detectollision(lstone,lmango){

  mangoBodyPosition = lmango.body.position
  stoneBodyPosition = lstone.body.position

  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)

  if(distance<=lmango.r+lstone.r){
    Matter.Body.setStatic(lmango.body,false);
  }


}


