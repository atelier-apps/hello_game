//名前空間
let GAME={};

//定数
GAME.STEP_SIZE_PX=40;
GAME.H_STEPS=25;
GAME.V_STEPS=15;
GAME.MS_PER_FRAME=40;

//キーコード
GAME.KEY={}
GAME.KEY.RIGHT=39;

// 大域変数
GAME.canvas;
GAME.ctx;
GAME.keyStatus={};
GAME.characters=[];

//起点
window.onload=function(){

  let init=function(){
    GAME.canvas = document.getElementById("canvas");
    GAME.canvas.width=GAME.STEP_SIZE_PX*GAME.H_STEPS;
    GAME.canvas.height=GAME.STEP_SIZE_PX*GAME.V_STEPS;
    GAME.ctx = GAME.canvas.getContext("2d");
    window.addEventListener('keydown',function(){
      GAME.keyStatus[event.keyCode]=true;
    });
    window.addEventListener('keyup',function(){
      GAME.keyStatus[event.keyCode]=false;
    });
  };

  let render=function(){
    GAME.ctx.clearRect(0, 0, GAME.canvas.width, GAME.canvas.height);
    for(let i=GAME.characters.length-1;i>=0;i--){
      GAME.characters[i].draw();
    }
  };

  let cycle=function(){
    main();
    render();
    setTimeout(function(){
      cycle();
    },GAME.MS_PER_FRAME);
  };

  init();
  start();
  cycle();

};
