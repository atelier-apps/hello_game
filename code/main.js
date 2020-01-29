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
    super(x*GAME.STEP_SIZE_PX,y*GAME.STEP_SIZE_PX);
  }
  draw(){
    GAME.ctx.fillStyle = "#1e90ff";
    GAME.ctx.fillRect(this.x, this.y, GAME.STEP_SIZE_PX, GAME.STEP_SIZE_PX);
  }
  move(dx,dy){
    super.move(GAME.STEP_SIZE_PX*dx,GAME.STEP_SIZE_PX*dy);
    /*横向きにゲーム画面内からはみ出さないようにする*/
    if(this.x<0){
      this.x=0;
    }else if(this.x>GAME.canvas.width-GAME.STEP_SIZE_PX){
      this.x=GAME.canvas.width-GAME.STEP_SIZE_PX;
    }
    /*縦向きにゲーム画面内からはみ出さないようにする*/
    if(this.y<0){
      this.y=0;
    }else if(this.y>GAME.canvas.height-GAME.STEP_SIZE_PX){
      this.y=GAME.canvas.height-GAME.STEP_SIZE_PX;
    }
  }
}

//----メインロジック----

let ball;

function start(){
  ball=new Player(2,1);
}

function main(){
  let dx1= GAME.keyStatus[GAME.KEY.RIGHT]==true ? 1 : 0;
  ball.move(dx1,0);
  let dx2= GAME.keyStatus[GAME.KEY.LEFT]==true ? 1 : 0;
  ball.move(-dx2,0);
  let dy1= GAME.keyStatus[GAME.KEY.UP]==true ? 1 : 0;
  ball.move(0,-dy1);
  let dy2= GAME.keyStatus[GAME.KEY.DOWN]==true ? 1 : 0;
  ball.move(0,dy2);
}
