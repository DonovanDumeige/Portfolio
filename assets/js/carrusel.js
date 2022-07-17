"use strict"

let slides = document.querySelectorAll('.exp-box'),
    slideIndex = 0,
    lastIndex = 0;  
const before=document.querySelector('.before'),
    after=document.querySelector('.after');

// Pour cacher les images sauf la première
function hide() {
    for (let i = 1; i < slides.length; i++) {
        let slide = slides[i];
        console.log(slide);
        slide.style.display = "none";
    }
}
hide();


function letSlide(i){
    // console.log();
    // je commence par stocker l'index précédent
    lastIndex = slideIndex;
    // je gère ma position actuelle avec l'évènement.
    if(i.target.closest("div").classList.contains("after")){
        slideIndex = slideIndex===slides.length-1 ? 0: slideIndex+1;
    }else{
        slideIndex = slideIndex===0 ? slides.length-1: slideIndex-1;
    }
    slides[lastIndex].style.display = "none";
    slides[slideIndex].style.display = "grid";
}

before.addEventListener("click",letSlide)
after.addEventListener("click",letSlide)
