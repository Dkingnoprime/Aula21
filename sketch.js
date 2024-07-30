const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  btn1=createImg("up.png");
  btn1.position(50,30);
  btn1.size(30,30);
  btn1.mouseClicked(forcev);

  btn2=createImg("right.png");
  btn2.position(300,30);
  btn2.size(30,30);
  btn2.mouseClicked(forceh);

  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);

  ballOptions = {
    restitution:0.95
  }
  ball = Bodies.circle (200,200,25,ballOptions)
  World.add(world,ball)
  
  rectMode(CENTER);
  ellipseMode(RADIUS);

}

function draw() 
{
  background(51);
  Engine.update(engine);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  ellipse(ball.position.x,ball.position.y,25)
}

function forcev(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
}

function forceh(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}

