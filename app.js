let gameSeq = [];
let userSeq = [];
let highScore = 0;
let start = false;
let level = 0;
let head2 = document.querySelector("h2");
function startAgain(){
    start = false;
    gameSeq = []; 
    userSeq = [];
    level = 0;
}
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
};
function userFlash(btn){
    btn.classList.add("userFlash");
    // console.log("btn")
    setTimeout(function(){
        btn.classList.remove("userFlash");
    }, 250);
};

function checkAns(idx){
    if(userSeq[idx] ==gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,2000);        }
    }
    else{
        if(highScore < level){
            highScore=level;
        }
        head2.innerHTML = `Game over! <b>Your score is ${level}</b> Press any key to start again`;
        document.querySelector("body").style.backgroundColor ="red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor ="white";
        }, 150);
        setTimeout(startAgain,2000);
        
    }
};
let btns = ["yellow", "red", "green", "purple"];
document.addEventListener("click",function(){
    if(start == false){
        console.log("Game started")
        start = true;

        levelUp();
    }        
})     


function levelUp(){
    userSeq = [];
    level++;
    head2.innerText = `Level ${level}`;
    let randIndex = Math.floor(Math.random()*3);
    // console.log(randIndex);
    let randColor = btns[randIndex]; 
    // console.log(randColor);
    gameSeq.push(randColor);
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randColor);
    gameFlash(randBtn);
    console.log(gameSeq);
}    

function pressBtn(){

    // console.log(this);
    let btn = this; 
    userFlash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll('.btn');

for(let btn of allBtns){
    btn.addEventListener('click',pressBtn);
}

