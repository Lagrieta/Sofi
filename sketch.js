const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var spiderman, roofObject;
var web1,web2,web3, web4,web5;
var world;
var ground;
var step;
var edificio1, edificio1img;
var edificio2, edificio2img;
var torredegwen, torredegwenimg;

function preload(){
  edificio1img=loadImage("edifio2.png");
  edificio2img=loadImage("edificio1.png");
  torredegwenimg=loadImage("torredegwen.png");
}

function setup() {
	createCanvas(1800,1600);
	rectMode(CENTER);

    edificio1=createSprite(230,960,50,50);
    edificio1.addImage(edificio1img);
    edificio1.scale = 2;
  
    edificio2=createSprite(500,1100,50,50);
    edificio2.addImage(edificio2img);
    edificio2.scale=2.5;
  
    torredegwen=createSprite(1700,900,50,50);
    torredegwen.addImage(torredegwenimg);


	engine = Engine.create();
	world = engine.world;

	roofObject=new roof(230,750,200,20);
    roofObject2=new roof(430,760,440,20);
	roofObject3=new roof(800,780,230,20);
	roofObject4=new roof(1000,740,400,20);
	roofObject5=new roof(1200,730,400,20);
	spiderman1 = new Spiderman(600,850,40);
  
	spiderman2 = new Spiderman(660,1050,40);
	
  spiderman3 = new Spiderman(800,1020,40);
	spiderman4 = new Spiderman(600,820,40);
	spiderman5 = new Spiderman(1000,1020,40);
	gwen = new Spiderman(1660,200,30);
    ground = new Ground(width/2,height-20,width,20);
	step = new Ground(100,1380,200,300);
	step1 = new Ground(1700,900,200,700);
	
	web1=new Web(spiderman1.body,roofObject.body,-80, 0)
	web2=new Web(spiderman2.body,roofObject2.body,-50, 0)
	web3=new Web(spiderman3.body,roofObject4.body,0, 0)
	web4=new Web(spiderman4.body,roofObject3.body,40, 0)
	web5=new Web(spiderman5.body,roofObject5.body,80, 0)
 
	
	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background(230);
  
  drawSprites();
  
  //roofObject.display();
  //roofObject2.display();
  roofObject3.display();
  roofObject4.display();
  roofObject5.display();
  web1.display();
  web2.display();
  web3.display();
  web4.display();
  web5.display();

  spiderman1.display();
  spiderman2.display();
  spiderman3.display();
  spiderman4.display();
  spiderman5.display();
  gwen.display();
  //ground.show();
  step.show();
  //step1.show();
 kP();
  collision1();

}

function kP() {
	if (keyIsPressed === true) {
Matter.Body.applyForce(spiderman1.body,spiderman1.body.position,
							{x:50,y:-45});
	
		 }
	}

function collision1 () {
  
    if (spiderman2 && spiderman1) {
      var collision = Matter.SAT.collides(spiderman2.body, spiderman1.body);

      if (collision.collided) {
	      web1.destroy();
      }
    }
}


