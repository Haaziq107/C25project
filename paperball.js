class Paperball {
    constructor(x, y, radius) {
      var options = {
      restitution:0.5,
      friction:0.5,   
      density:1
      }
      this.image = loadImage("paper.png");
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      //translate(pos.x,pos.y);
      //rotate(this.body.angle);
      imageMode(CENTER);
      image(this.image,pos.x,pos.y,40,40);
      pop();
    }
  };
