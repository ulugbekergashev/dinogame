var btn = document.querySelector("button")
var dino = document.querySelector(".dino")
var cactus = document.querySelector(".cactus")
var world = document.querySelector(".world")
var ground = document.querySelector(".ground")
var scorecount = document.querySelector(".score-value")
document.addEventListener("keydown",function(evt){
    cactus.classList.add("cactus-animation")
    ground.classList.add("ground-width")
    if(dino.classList !== "jump" ){
        if(evt.keyCode === 32||evt.keyCode ===13 || evt.keyCode ===38){
    dino.classList.add("jump")}
    }
    setTimeout(function(){
        dino.classList.remove("jump")},800
    )
    let intervalcount = setInterval(() => {
        scorecount.textContent = score++
        
    }, 200);
    
})

var score = 0   


var interval = setInterval(function(){
    var dinoStyle = parseInt(window.getComputedStyle(dino).getPropertyValue("top"))
    var cactusStyle = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))
    if(cactusStyle < 60 && cactusStyle > 20 && dinoStyle >= 125){
        alert("Game Over")
        score = 0
    }
},10)