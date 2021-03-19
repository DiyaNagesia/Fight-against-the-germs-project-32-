const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img,germs_img;
function preload(){
  polygon_img=loadImage("superHero.jpg");
  germs_img = loadImage("virus.jpg")
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  germ1 = new Block(375,275,160,140);
  germ2 = new Block(700,75,160,140);
  
  //ball holder with slings
  ball = Bodies.rectangle(50,200,170,100);
  World.add(world,ball);

  slingShot = new Slingshot(this.ball,{x:100,y:200});

}
function draw() {
  background(255); 
 
  //Engine.update(engine);
  //text(mouseX + ',' + mouseY, 10, 15);
  textSize(20);
  fill("Blue");
  text("Drag the SuperHero and Release it, to launch him towards the germs/enemy",100,30);

  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  germ1.display();
  germ2.display();
 
  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,170,100);

  slingShot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  slingShot.fly();
}


