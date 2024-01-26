var clatter;
var randomInt=0;
var score=0;

var hI=0;
function putNum(){
    clatter="";
for(let i=0;i<=97;i++){
   randomInt=Math.floor(Math.random()*10);
   clatter+= `<div class="bubble">${randomInt}</div>`;
        
}
document.querySelector(".navBottom").innerHTML=clatter;

}

function hitInt(){
    hI=Math.floor(Math.random()*10);
    document.querySelector(".H").textContent=hI;
}

function increse(){
    
    score+=10;
    document.querySelector(".S").textContent=score;
}


document.querySelector(".navBottom").addEventListener("click",function(dets){
    if((Number(dets.target.textContent))===hI){
        putNum();
        increse();
        hitInt();
        
    }

});


function runTime(){
     let time=60;
   var timer= setInterval(function(){
        if(time>0){
        time--;
    document.querySelector(".T").textContent=time;

        }
    else{
        clearInterval(timer);
        document.querySelector(".navBottom").innerHTML= `<h1>GAME OVER 
       Your Score is:${score};
        
        </h1>`
        document.querySelector(".navBottom").cssText=""

    
 


    }

    },1000)
}


putNum();
hitInt();
runTime();




