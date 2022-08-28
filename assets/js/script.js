"use strict"

const menu = document.querySelector('.menu.fa-bars');
const closeMenu = document.querySelector('.menu.fa-xmark');
const navbar = document.querySelector('.navbar-js');

//event menu burger
function show() {
    if (navbar.style.display === "none") {
        navbar.style.display = "block";
        menu.classList.remove('fa-bars');
        menu.classList.add('fa-xmark');
        navbar.style.transform = "translateX(0)";
    } else {
        navbar.style.display = "none";
        menu.classList.remove('fa-xmark');
        menu.classList.add('fa-bars');
        navbar.style.transform = "translateX(-100%)";
    }
}

menu.addEventListener("click", show)

// cliquer sur body fait disparaitre la navbar
// J'ai travaillé sur une fonction à part pour éviter l'ouverture de la nav au clic du body.


// remplacer hover par un click sur span
const overlay = document.querySelectorAll('.folio-overlay');

// se déclenche sur chaque folio.overlay
overlay.forEach(o => {
    o.addEventListener("click", remplaceHover)
});

function remplaceHover() {
    const overSymbol = this.querySelector('h4 .symbol')
    const overSpan = this.querySelector('h4 .more')
    //e.stopPropagation(); // permet de ne déclencher que l'event de la cible et pas celui des parents.
    if (this.style.height === "15%") {
        this.style.height = "100%"
        overSymbol.innerHTML = "&#128899;"
        overSpan.textContent = "voir moins"
    } else {
        this.style.height = "15%";
        overSymbol.innerHTML = "&#128897;"
        overSpan.textContent = "voir plus"
    }
}


//typing effects with animate.
let txt = "Je suis Donovan"
let count = 0
let speed = 70;
const blinkBar = document.querySelector('.blink-bar');

//gère l'effet de typing
function Typing() {
    if (count < txt.length) {
        document.querySelector(".intro p").innerHTML += txt.charAt(count)
        count++;
        setTimeout(Typing, speed);

    }
}

// pour la blinkbar
function blink() {

    const keyframes = [{
            opacity: 1
        },
        {
            opacity: 0
        },
        {
            opacity: 1
        }
    ]

    const options = {
        duration: 600,
        iterations: Infinity
    }
    blinkBar.animate(keyframes, options)
};

// je démarre à partir d'une fonction init pour plus de simplicité.
function init() {
    Typing();
    blink();
}
window.addEventListener("load", init)

// Second carousel
import c from "./carousel-2.js";
const test = document.querySelector('#cbr')
const carousel = new c(["./assets/folio/CBR-cover.png", "./assets/folio/CBR-inner1.png", "./assets/folio/CBR-inner2.png"]);
test.prepend(carousel.container);
carousel.init();

const happyFloor = document.querySelector("#happy-floor");
const carousel2 = new c(["./assets/folio/HF-cover.png", "./assets/folio/HF-inner.png",]);
happyFloor.prepend(carousel2.container);
carousel2.init();


