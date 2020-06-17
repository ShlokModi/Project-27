var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,Bob1,Bob2,Bob3,Bob4,Bob5,Ground1,Roof1,rope1,rope2,rope3,rope4,rope5;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	var bobDiameter = 40;
	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);
	Bob1 = new Bob (400,650);
	Bob2 = new Bob (440,650);
	Bob3 = new Bob (480,650);
	Bob4 = new Bob (360,650);
	Bob5 = new Bob (320,650);
	Ground1 = new Roof(400,690,800,20);
	Roof1 = new Roof(400,415,200,30);
	rope1=new Rope(Bob5.body,{x:400,y:415},-bobDiameter*2,0);
	rope2=new Rope(Bob4.body,{x:400,y:415},-bobDiameter*1,0);
	rope3=new Rope(Bob1.body,{x:400,y:415},0,0);
	rope4=new Rope(Bob2.body,{x:400,y:415},bobDiameter*1,0);
	rope5=new Rope(Bob3.body,{x:400,y:415},bobDiameter*2,0);
}


function draw() {
  rectMode(CENTER);
  background(255,0,0);
  Roof1.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  Bob1.display();
  Bob2.display();
  Bob3.display();
  Bob4.display();
  Bob5.display();
  //Ground1.display();
  //console.log(Bob5.body.position);
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW /*&& /*Bob5.body.position.x > 320 && Bob5.body.position.y > 649*/){
		Matter.Body.applyForce(Bob5.body,Bob5.body.position,{x:-10,y:-10});
	}
	/*if(keyCode === UP_ARROW && Bob3.body.position.x < 479 && Bob3.body.position.y > 649){
		Matter.Body.applyForce(Bob5.body,Bob5.body.position,{x:-10,y:-10});
	}*/
}