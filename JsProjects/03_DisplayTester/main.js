const body =  document.getElementsByTagName("body")[0];



function setColor(name){
    body.style.backgroundColor = name;
}

function randomColor(){
    let colorCode = '#'

    for(let i = 0; colorCode.length < 7; i++){
        const random = Math.floor(Math.random() * 10)
        colorCode += random
    }
    return colorCode
    
}
function setRandomColor(){
    let hexCode = randomColor()
    body.style.backgroundColor = hexCode
    let randomBtn = document.getElementById("random")
    randomBtn.style.backgroundColor = hexCode;
}
setRandomColor()
