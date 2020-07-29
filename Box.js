class Box {
    constructor(x, y, width, height) {
      var options = {
      isStatic:true
      }
      
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.image = loadImage("Sprites/dustbingreen.png");
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      //translate(pos.x,pos.y);
      //rotate(this.body.angle)
      imageMode(CENTER);
      image(this.image,pos.x,pos.y,200,200);
      //fill("blue");
      //rect(0,0, this.width, this.height);
      pop();
    }
  };
