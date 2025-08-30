
let gameseq=[];
let userseq=[];
let btns=["red","green","yellow","blue"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener('keypress',function(){
    if(started==false){
        console.log("game is started")  ;
        started =true;
        levelup();
     }
     });

     function gameflash(btn){
        btn.classList.add("gameflash");
        setTimeout(function(){
            btn.classList.remove("gameflash");
        },250);
        
     }
     function userflash(btn){
        btn.classList.add("userflash");
        setTimeout(function(){
            btn.classList.remove("userflash");
        },250);
        
     }
     function levelup(){
        userseq=[];
        level++;
        h2.innerText =`level ,${level}`;
      

        let randIdx = Math.floor(Math.random()*3);
        let randcolor = btns[randIdx];
        let randBtn = document.querySelector(`.${randcolor}`);
       gameseq.push(randcolor);
       console.log(gameseq);

        gameflash(randBtn);
     }

        function checkAns(idx){
            // console.log(" curr level :", level);

            //let idx = level - 1;
            if(userseq[idx] === gameseq[idx]){
                if(userseq.length == gameseq.length){
               setTimeout(levelup,1000);
                } 
            }
            else{
                h2.innerHTML=`Game over! your level  is - <b> ${level} </b> <br>press any key to start.`;
                //reset();
                document.querySelector('body').style.backgroundColor="red";
                setTimeout(function(){
                     document.querySelector('body').style.backgroundColor="white";
                },250)
                    reset();
            }
        }
     function btnpress(){ 
        console.log(this);
        let btn = this;
        userflash(btn);
        usercolor = btn.getAttribute("id");
        userseq.push(usercolor);
        checkAns(userseq.length-1);
         
     }
let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener("click", btnpress);
}
function reset(){
    started=false;
    gameseq = [];
    userseq = [];
    level = 0;
}
