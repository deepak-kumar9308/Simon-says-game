let gameSeq=[];
let userSeq=[];
let highScore=0;
let btns=["yellow","red","purple","green"];
let started=false;
let level=0;

let h2=document.querySelector("h2");
document.addEventListener("keypress",()=>{
    if(started==false)
        {
            console.log("game stated.");
            started=true;
            levelup();
        }
});

function btnFlash(btn){
   btn.classList.add("flash");
   setTimeout(() => {
    btn.classList.remove("flash");
   }, 250);
}

    function levelup(){
        userSeq=[];
        level++;
    h2.innerText=`Level ${level}`;

   let randIdx=Math.floor(Math.random()*3);
   let randcolor=btns[randIdx];
   let randBtn=document.querySelector(`.${randcolor}`);
   gameSeq.push(randcolor);
    btnFlash(randBtn);

    }

    function checkAns(idx){
        if(userSeq[idx]==gameSeq[idx])
            {if(userSeq.length==gameSeq.length)
                {
                    setTimeout(levelup,1000);
                }
            
            }else{
                if(highScore<level)
                    {
                        highScore=level;
                    }
                h2.innerHTML=`Game over! Your score was <b>${level}</b> & Highscore==${highScore}<br> press any key to start`;
                document.querySelector("body").style.backgroundColor="red";
                setTimeout(function(){
                    document.querySelector("body").style.backgroundColor="white";
                },150)
                reset();
            }
    }

    function btnPress(){

       let btn= this;
       btnFlash(btn);

       let userColor=btn.getAttribute("id");
       userSeq.push(userColor);
       checkAns(userSeq.length-1)

    }

    let allBtn=document.querySelectorAll(".btn");
    for(btn of allBtn)
        {
            btn.addEventListener("click", btnPress);
        }

        function reset(){
            started=false;
            gameSeq=[];
            userSeq=[];
            level=0;
        }