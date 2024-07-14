
let backgroundBox = document.querySelector(".backgroundBox")
let toggleBox = document.querySelector(".toggleBox")
let circle = document.querySelector(".circle")
let checkbox = document.getElementById("checkbox")


toggleBox.onclick = function(){
    if(checkbox.checked ){
        circle.style.left = "100px"
        circle.style.backgroundColor = "#000"
        toggleBox.style.backgroundColor = "#fff"
        backgroundBox.style.backgroundColor = "#000"
    }
    else{
        circle.style.left = "0px"
        circle.style.backgroundColor = "#fff"
        toggleBox.style.backgroundColor = "#000"
        backgroundBox.style.backgroundColor = "#fff"
    }
}