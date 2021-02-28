const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



var engine,world;

var particles = [];
var plinkos = []
var divisions = []
var divisonHeight=300
var ground; 

function setup() {
  createCanvas(480,800);
  
  engine = Engine.create();
	world = engine.world;
   ground = new Ground(240,790,480,20)

// divisions
  for(var j=0; j<=width; j+=80) {
    divisions.push(new Divison(j,height-divisonHeight/2, 10, divisonHeight));
  }
// plinkos
  for(var i=30; i<=width; i+=60) {
    plinkos.push(new Plinko(i,80))
  }

  for(var i=0; i<=width; i+=60) {
    plinkos.push(new Plinko(i,160))
  }

  for(var i=30; i<=width; i+=60) {
    plinkos.push(new Plinko(i,240))
  }

  for(var i=0; i<=width; i+=60) {
    plinkos.push(new Plinko(i,320))
  }

}

function draw() {
  background(0);  

  Engine.update(engine);

ground.display()
// divisions
  for(var j=0; j < divisions.length; j++){
     divisions[j].display();
  }
// plinkos
  for(var i=0; i < plinkos.length; i++){
    plinkos[i].display();
 }

 for(var i=0; i < plinkos.length; i++){
  plinkos[i].display();
}

  for(var i=0; i < plinkos.length; i++){
    plinkos[i].display();
  }

  for(var i=0; i < plinkos.length; i++){
    plinkos[i].display();
  }

 if( frameCount % 60 ===0){
   particles.push(new Particle(random(width/2-50, width/2+50), 10,10))
 }
// particles 
 for(var r= 0; r < particles.length; r++){
  particles[r].display(); 
 }



  
}