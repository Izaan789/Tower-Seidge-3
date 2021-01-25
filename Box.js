class Box {
    constructor(x, y,height,width) {
      var options = {
        'restitution':0.8,
        'friction':5,
        'density':1.0 
      }
      this.body = Bodies.rectangle(x, y, 20, height,width, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);

      this.visibility = 5;
    }
    display(){
      if(this.body.speed<7){
        rectMode(CENTER);
        rect( this.body.position.x,this.body.position.y, this.width, this.height);
      }
      else{
        World.remove(world,this.body)
        this.visibility = this.visibility-5
      }
        
      
      
    }
    score(){
      if(this.visibility<0 && this.visibility>-105){
        score=score+1
      }
    }
  }