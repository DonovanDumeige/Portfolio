"use strict"

//event menu burger
function shows() {
    create();
    if (navbar.style.display === "block") {
        navbar.style.display = "none";
    } else {
        navbar.style.display = "block";
    }
}


//typing effects with animate.
let txt = "Je m'appelle Donovan et je suis développeur web junior"
let count = 0
let speed = 70;
const blinkBar = document.querySelector('.blink-bar');
console.log(blinkBar);
function Typing() {
    if (count < txt.length) {
        document.querySelector(".intro p").innerHTML += txt.charAt(count)
        count++;
        setTimeout(Typing, speed);
        
    }
}
function blink() { 
    
    const keyframes = [
        {opacity:1},
        {opacity:0},
        {opacity:1}
    ]

    const options = {
        duration:600,
        iterations : Infinity
    }
    blinkBar.animate(keyframes, options)
    //moveBar();
 }; 

/*  function moveBar(){
    const keyframes =[
        {left:0},
        {left:"96%"}
    ]
    const options = {
        duration : 3500,
        fill:"forwards"
    }
    blinkBar.animate(keyframes,options)
 } */

function init() {
    Typing();
    blink();
}
window.addEventListener("load", init) 


