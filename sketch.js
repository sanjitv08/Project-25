
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
    
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper1=new Paper(200,100,10);
	
	ground=new Ground(width/2,690,2000,20);
	//dustbinleft=new Dustbin(750,620,20,120);
	 //dustbinright=new Dustbin(930,620,20,120);
	dustbinbottom=new Dustbin(840,605,200,20);
	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background("LIGHTGREY");
  ground.display();
  
  //dustbinleft.display();
  //dustbinright.display();
  dustbinbottom.display();
  paper1.display();
  keyPressed();
  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW) {
		
		Matter.Body.setStatic(paper1.body,false);
		Matter.Body.setVelocity( paper1.body, {x: 5, y: -2});
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:0,y:-0.05});
		
	   if(paper1.body.position.x>=750){
		paper1.body.position.y=655;
		paper1.body.position.x=820;
	   Matter.Body.setStatic(paper1.body,true);
	   }
	}	
}



