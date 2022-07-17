"use strict"

const menu = document.querySelector('#menu');

/* Création des éléments nécessaire */
const navbar = document.createElement('nav')
console.log(menu, navbar);

menu.addEventListener("click",shows)
function shows() {
    if(navbar.style.display === "block"){
        navbar.style.display = "none";
    } else{
        navbar.style.display = "block";
    }
}
