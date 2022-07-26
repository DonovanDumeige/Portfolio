"use strict"

const menu = document.querySelector('.menu.fa-bars')
const closeMenu = document.querySelector('.menu.fa-xmark')
const navbar = document.querySelector('.navbar-js');
//event menu burger
function show() {
    if (navbar.style.display === "none") {
        navbar.style.display = "block"
    } else {
        navbar.style.display = "none"
    }
    
}

menu.addEventListener("click", show)
closeMenu.addEventListener("click", show)
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
 }; 


function init() {
    Typing();
    blink();
}
window.addEventListener("load", init) 


