var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	
	ground = new Ground(400,370,800,20);
	//stroke("white");

	ball = new Ball();

	rectangle1=new RedRectangle(600,349,230,20);
	//stroke("red");
	rectangle2=new RedRectangle(500,319,30,40);
	//stroke("red");
	rectangle3=new RedRectangle(700,319,30,40);
	//stroke("red");
	
	//ball.isStatic  false

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);

     
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  ball.display();
  rectangle1.display();
  rectangle2.display();
  rectangle3.display();

//keyPressed();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:120,y:-105});
		
		
	}
}


