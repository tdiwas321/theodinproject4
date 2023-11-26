let color = "black";
let click = false;
document.addEventListener('DOMContentLoaded',function(){
    document.querySelector(".container").addEventListener('click', function(e) {
        if (e.target.tagName !== "BUTTON") {
            click = !click;
        }
    });
    createDiv(16);

    let sizebutton = document.querySelector(".selectButton");
    sizebutton.addEventListener("click",function(){
        let size = takeInput();
        createDiv(size);
    })
    
})

function createDiv(size){
    let board = document.querySelector(".container");
    board.style.gridTemplateColumns = `repeat(${size},1fr)`;
    board.style.gridTemplateRows = `repeat(${size},1fr)`;
    divSize = size*size;

    for(i=0;i<divSize;i++){
        let div = document.createElement("div");
        div.addEventListener('mouseover',colorChange)
        div.classList.add("coloredDivs")
        div.style.backgroundColor = "white";
        div.style.transition = "0.2s";
        board.insertAdjacentElement('beforeend',div);
    }
}

function colorChange(){
    if(click){
        if(color == "black"){
            this.style.backgroundColor = "black";
        }else if(color =="random"){
            this.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)`
        }
    }
}

function setColor(colorChoice){
    color = colorChoice;
}

function takeInput(){
    let message = document.querySelector(".message");
    let size = prompt("please provide number between 1 to 100");
    if(size===""){
        message.innerHTML =  "Please enter a number between 1 to 100";
    }else if(size<0||size>100){
        message.innerHTML = "Please enter a valid number";
    }else{
        message.innerHTML = "You can now paint";
        return size;
    }
}

function reset(){
    let Divs = document.querySelectorAll(".coloredDivs");
    Divs.forEach((div)=>{div.style.backgroundColor = "white"});
}