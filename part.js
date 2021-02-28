class Particle{
    constructor(x,y,r){

      var  Option ={
      
        restitution:0.4,
        isStatic:false,
        friction:1
    
      }

      this.body=Bodies.circle(x,y,r,Option);
      this.color = color(random(0,250), random (0,250),random(0,255))
      World.add(world,this.body);
      this.r=r;

      
    }

    display(){

        var pos= this.body.position;
        var angle= this.body.angle;
        
        push()
        translate(pos.x,pos.y);
        rotate(angle)
        
        fill(this.color)
        noStroke()
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r)
        pop ()
    

    }
}