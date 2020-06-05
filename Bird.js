class Hero extends BaseClass {
  constructor(x,y){
    super(x,y,80,80);
    this.image = loadImage("sprites/hero1.jpg");
    this.smoke = loadImage("sprites/smoke.png");
    this.trajectory = []
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display()
    if(this.body.position.x>200 && this.body.velocity.x>10){
      var position = [this.body.position.x,this.body.position.y]
      this.trajectory.push(position)
    }
   for(var i = 0; i<this.trajectory.length; i ++){
      image(this.smoke,this.trajectory[i][0],this.trajectory[i][1])
    }
  }
}
