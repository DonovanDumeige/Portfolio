"use strict"

const menu = document.querySelector('#menu');

/* Création des éléments nécessaire */

function create() {
    const navbar = document.createElement('nav')
}
const navbar = document.createElement('nav')
console.log(menu, navbar);

menu.addEventListener("click", shows)

function shows() {
    create();
    if (navbar.style.display === "block") {
        navbar.style.display = "none";
    } else {
        navbar.style.display = "block";
    }
}


//Typing effects

let txt = "Je m'appelle Donovan et je suis développeur web junior"
let i = 0
let speed = 70;
function Typing() {
    if (i < txt.length) {
        document.querySelector(".intro").innerHTML += txt.charAt(i)
        i++;
        setTimeout(Typing, speed);
        intro.append(p)
    }

}
window.addEventListener("load", Typing)