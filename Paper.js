class Paper extends BaseClass{
  constructor(x,y){
    super(x,y,15,15);
    this.image=loadImage('paper.png');
  }
  display(){
   super.display();
  }
}