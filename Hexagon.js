class Hexagon {
    constructor(x, y,height,width) {
      var options = {
          'restitution':0.8,
          'friction':5,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 20, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);

      this.image = loadImage("polygon.png")
    }
    display(){
      
      imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
      
    }
  }