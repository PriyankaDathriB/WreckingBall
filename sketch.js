const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball, rope, crane, ground, backgroundImg;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16, box17, box18, box19, box20;
var box21, box22, box23, box24, box25, box26, box27, box28, box29, box30, box31, box32;

function preload() {

  crane = loadImage("crane.png");
  backgroundImg = loadImage("port.png");

}

function setup() {

  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(600, 800, 2800, 20);

  box1 = new Box(900, 760, 70, 70);
  box2 = new Box(900, 690, 70, 70);
  box3 = new Box(900, 620, 70, 70);
  box4 = new Box(900, 550, 70, 70);
  box5 = new Box(900, 480, 70, 70);
  box6 = new Box(900, 410, 70, 70);

  box7 = new Box(800, 760, 70, 70);
  box8 = new Box(800, 690, 70, 70);
  box9 = new Box(800, 620, 70, 70);
  box10 = new Box(800, 550, 70, 70);
  box11 = new Box(800, 480, 70, 70);
  box12 = new Box(800, 410, 70, 70);

  box13 = new Box(700, 760, 70, 70);
  box14 = new Box(700, 690, 70, 70);
  box15 = new Box(700, 620, 70, 70);
  box16 = new Box(700, 550, 70, 70);
  box17 = new Box(700, 480, 70, 70);
  box18 = new Box(700, 410, 70, 70);
  box19 = new Box(700, 340, 70, 70);
  box20 = new Box(700, 270, 70, 70);


  box21 = new Box(1100, 760, 70, 70);
  box22 = new Box(1100, 690, 70, 70);
  box23 = new Box(1100, 620, 70, 70);
  box24 = new Box(1100, 550, 70, 70);
  box25 = new Box(1100, 480, 70, 70);
 

  box27 = new Box(960, 760, 70, 70);
  box28 = new Box(960, 690, 70, 70);
  box29 = new Box(960, 620, 70, 70);
  box30 = new Box(960, 550, 70, 70);
  box31 = new Box(960, 480, 70, 70);
  box32 = new Box(960, 410, 70, 70);

  ball = new Ball(200, 200, 80, 80);
  rope = new Rope(ball.body, { x: 500, y: 170 });

}

function draw() {

  background(backgroundImg);
  image(crane,300,100);
  
  Engine.update(engine);

  ground.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  //box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();
  box31.display();
  box32.display();
  
  ball.display();
  rope.display();

}

function mouseDragged() {

  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });

}


