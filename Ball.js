class Ball {
    constructor(x, y,radius) {
      var options = {
          
          'restitution':0.3,
          'friction':3.0,
          'density':2.5,
           'isStatic' : false
      }
      this.body = Bodies.circle(100,367, 20, options);
      this.radius = 20;
      //this.height = 50;

      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      //strokeWeight(4);
      stroke("purple");
      fill("purple");
      circle(0, 0, this.radius);
      pop();
      //circle(100,670, this.radius);
    }
  };
  