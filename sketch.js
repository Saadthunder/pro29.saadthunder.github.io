const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var base;
var bridge;
var jointPoint;
var stones=[];
var stone;
var stone2;
var stone3;
var stone4;
var stone5;
var stone6;
var stone7;
var stone8;

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
 
  wall1=new Base(5,440,200,100);
  wall2=new Base(width-25,440,200,100);
  bridge=new Bridge(32,{x:50,y:429});
  jointPoint=new Base(width-65,440,200,100);
  Matter.Composite.add(bridge.body,jointPoint);
  jointLink = new Link(bridge, jointPoint);
  for(var i=0; i<=8; i++) {
    var x = random(width/2-200,width/2+300);
    var y = random(-10,140);
    stone =new Stone(x,y,45);
    stones.push(stone)
  }
  
  for(var i=0; i<=8; i++) {
    var x = random(width/2-200,width/2+300);
    var y = random(-10,140);
    stone2 =new Stone(x,y,45);
    stones.push(stone2);
  }

  for(var i=0; i<=8; i++) {
    var x = random(width/2-200,width/2+300);
    var y = random(-10,140);
    stone3 =new Stone(x,y,45);
    stones.push(stone3)
  }
  
  for(var i=0; i<=8; i++) {
    var x = random(width/2-200,width/2+300);
    var y = random(-10,140);
    stone4 =new Stone(x,y,45);
    stones.push(stone4)
  }
  

  for(var i=0; i<=8; i++) {
    var x = random(width/2-200,width/2+300);
    var y = random(-10,140);
    stone5 =new Stone(x,y,45);
    stones.push(stone5)
  }
  
  for(var i=0; i<=8; i++) {
    var x = random(width/2-200,width/2+300);
    var y = random(-10,140);
    stone6 =new Stone(x,y,45);
    stones.push(stone6);
  }

  for(var i=0; i<=8; i++) {
    var x = random(width/2-200,width/2+300);
    var y = random(-10,140);
    stone7 =new Stone(x,y,45);
    stones.push(stone7)
  }
  
  for(var i=0; i<=8; i++) {
    var x = random(width/2-200,width/2+300);
    var y = random(-10,140);
    stone8 =new Stone(x,y,45);
    stones.push(stone8)
  }
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() {
  background(51);
  wall1.show();
  wall2.show();
  bridge.show();
  
  stone.show();
  stone2.show();
  stone3.show();
  stone4.show();
  stone5.show();
  stone6.show();
  stone7.show();
  stone8.show();
  Engine.update(engine);
}
