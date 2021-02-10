class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeimage = loadImage("sprites/smoke.png");
    this.path=[]
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
   
   for(var i =0;i<this.path.length;i++){
     image (this.smokeimage,this.path[i][0],this.path[i][1])
   }
   if(this.body.velocity.x>10&&this.body.position.x>200){
    var position=[this.body.position.x,this.body.position.y]
    this.path.push(position)
   }
 
    super.display();

  }
}
