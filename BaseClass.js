class BaseClass{
  constructor(x, y, width, height, angle) {
      var options = {
          'restitution':0.8,
          'friction':0.5,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.height, this.width);
      rotate(angle); 
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
    }
}