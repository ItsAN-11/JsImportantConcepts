var setTimer = 60
var score = 0;
var hitRandomNum = 0;

function increaseScore(){
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}

function runTimer(){
    var timer = setInterval(function(){
        if(setTimer > 0 ){
            setTimer--;
            document.querySelector("#timerValue").textContent = setTimer;
        }
        else{
            clearInterval(timer)
            document.querySelector("#panelbottom").innerHTML = `<h1>Game Over!!!</h1>`
        }


    }, 1000);
}


function makeBubble(){
    var clutter = "";

for(var i=1; i<91; i++){
    var randomNum = Math.floor(Math.random() * 10)
    clutter += `<div class="bubble">${randomNum}</div>`
    
}

document.querySelector("#panelbottom").innerHTML = clutter
}

function getNewHit(){
    hitRandomNum = Math.floor(Math.random() * 10);
    document.querySelector("#hitVal").textContent = hitRandomNum
}

document.querySelector("#panelbottom").addEventListener("click", 
    function(details){
    console.log(Number(details.target.textContent))
    var clickedNum = Number(details.target.textContent)
    if(clickedNum === hitRandomNum ){
        console.log("Correct number")
        increaseScore();
        makeBubble();
        getNewHit();
    }
})

runTimer()
makeBubble();
getNewHit()




