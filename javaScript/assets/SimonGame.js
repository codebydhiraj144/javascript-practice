let gameSeq =[];
let userSeq =[];

let btns= ["yellow","red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started==false){
  console.log("game  is started");
  started= true;
  levelup();
    }
  
});

function userflash(btn){
btn.classList.add("userFlash");
setTimeout (function(){
    btn.classList.remove("userFlash");
}, 250);
}

function levelup(){
    level++;
    h2.innerText = 'level ${level}';

    let randIdx = Math.floor(Math.random()*3);
    let randcolor = btns[randIdx];
    let randbtn = document.querySelector('.${randcolor}');
    console.log(randIdx);
    console.log(randcolor);
    console.log(randbtn);
    gameFlash(randBtn);
}

function btnpress (){
    console.log(this);
    let btn = this;
    btnFlash(btn);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click",btnpress);

    }
