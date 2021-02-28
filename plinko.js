class Plinko{
    constructor(x,y){

      var  Option ={
        isStatic: true,
        restitution:1,
         density:1.2,
        friction:0.5
      }

      this.r=7;
      this.body=Bodies.circle(x,y,this.r,Option);
      World.add(world,this.body);
      

      
    }

    display(){

        var pos= this.body.position;
        var angle= this.body.angle;
        
        push()
        translate(pos.x,pos.y);
        rotate(angle)
        
        fill("aqua")
        stroke("white")
        strokeWeight(4)
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r)
        pop ()
    

    }
}