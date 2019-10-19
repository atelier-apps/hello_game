//----クラス----

class Character{
  constructor(x,y) {
    this.x=x;
    this.y=y;
    GAME.characters.push(this);
  }
  draw() {
    this.draw();
  }
  move(dx,dy){
    this.x+=dx;
    this.y+=dy;
  }
}

class Player extends Character{
  constructor(x,y){
    super(x,y);
  }
  draw(){
    GAME.ctx.fillStyle = "#1e90ff";
    GAME.ctx.fillRect(this.x, this.y, GAME.STEP_SIZE_PX, GAME.STEP_SIZE_PX);
  }
  move(dx,dy){
    super.move(GAME.STEP_SIZE_PX*dx,GAME.STEP_SIZE_PX*dy);
  }
}

//----メインロジック----

let ball;

function start(){
  ball=new Player(2,1);
}

function main(){
  let dx= GAME.keyStatus[GAME.KEY.RIGHT]==true ? 1 : 0;
  ball.move(dx,0);
}
