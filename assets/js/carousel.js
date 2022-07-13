"use strict"

/* ----------------- EXERCICE --------------- 

Faire une fonction "Create" qui rend un tableau de string et retourne un élément HTML
correspondant à la div container adjacente. Elle doit contenir autant de div item et de span
que d'élément dans le tableau
*/

// Ma version 

/* function create() {
    //Le tableau contenant les imagee
    //On crée le container qui va prendre tous les éléments
    const container = document.createElement('div')
    container.classList.add('carousel-container')
    let images = ["./img/fond1.jpg", "./img/fond2.jpg", "./img/fond3.jpg"]
    //La boucle crée les .items et les img
    for (let i = 0; i < 3; i++) {
        let item = document.createElement('div');
        item.classList.add('items', 'fade');
        let img = document.createElement('img');
        //attribue la source dans img
        img.setAttribute('src', images[i])
        console.log(img);
        item.appendChild(img);
    // je suis obligé de donner l'élément à container à l'intérieur de la boucle
    // car en dehors de la boucle les variables définies n'existent pas.
        container.append(item)
    }
    let dots = document.createElement('div')
    dots.classList.add('dots')

    //une autre boucle pour créer les span
    for (let i = 0; i < 3; i++) {
        let dot = document.createElement('span')
        dot.classList.add('dot')
        dot.dataset.id = i;
        dots.appendChild(dot)
        container.append(dots)
    }

    //On crée maintenant les boutons next et previous
    let next = document.createElement('a');
    let prev = document.createElement('a')
    next.classList.add('next')
    prev.classList.add('prev')
    next.innerHTML = '&#10095;'
    prev.innerHTML = '&#10094;'
    // On envoie les éléments qui existent en dehors des boucles
    container.append(next, prev)
    document.body.append(container)
};
create(); 
*/
// Les versions de Nolwenn

//Version 1
// let images = ["./img/fond1.jpg", "./img/fond2.jpg", "./img/fond3.jpg"]
// const carousel = create2(images)
// document.body.append(carousel)
// init();
export function create(imgs){
    //crée mon carousel
    const article = document.querySelector(".folio-container article:first-of-type")
    const container = document.createElement("div");
    container.classList.add("carousel-container");
    const dots = document.createElement("div");
    dots.classList.add("dots");
    imgs.forEach((img, i)=>{
        const div = document.createElement("div");
        div.classList.add("photo-folio:first-of-type", "fade:first-of-type");
        const image = document.createElement("img");
        image.src = img;
        div.append(image);
        const dot = document.createElement("span");
        dot.classList.add("dot");
        dot.dataset.id = i;
        dots.append(dot);
        container.append(div);
    })
    container.append(dots);
    const next = document.createElement("a");
    next.classList.add("before");
    next.innerHTML = "&#10095;";
    const prev = document.createElement("a");
    prev.classList.add("after");
    prev.innerHTML = "&#10094;";
    container.append(next, prev);
    article.append(container)
    return article;
} 

function select(){
    //sélectionne les éléments interactif de mon carousel.
    return{
        dots: document.querySelectorAll(".dot"),
        items : document.querySelectorAll(".photo-folio"),
        btns :document.querySelectorAll(".after, .before")
    }
}

function showItems(n) {
    //affiche un élément de mon carousel et cache les autres.
    const carousel = select();
    let index
    index =  n> carousel.items.length-1 ? 0: n<0?carousel.items.length-1: n
    //version non ternaire ?

/*     if(n>carousel.items.length-1){
        index = 0
    } else if (n<0){
        index = carousel.items.length-1
    }
    else{
        index = n;
    } */
    carousel.items.forEach((item,i)=>{
        item.style.display = "none";
        carousel.dots[i].classList.remove("active");
    })
    console.log(carousel.items);
    carousel.items[index].style.display = "block"
    carousel.dots[index].classList.add("active")
}

function currentItem(e) {
    let n = parseInt(e.target.dataset.id)
    showItems(n);
}

function changeItem(e){
    let n = document.querySelector(".dot.active").dataset.id;
    console.log(n);
    if(e.target.classList.contains("after")){
        showItems(++n)
    } else{
        showItems(--n)
    }
}

export default function init(){
    //Affiche la première image et ajoute les écouteurs d'évènement
    showItems(0)
    const carousel = select()
    carousel.dots.forEach(dot=>dot.addEventListener('pointerdown', currentItem))
    carousel.btns.forEach(btn=>btn.addEventListener('pointerdown', changeItem))
}

//Version 2
/* function create3(imgs){
    const container = document.createElement("div");
    container.classList.add("carousel-container");
    imgs.forEach(img=>{
        container.innerHTML += `<div class="items fade"><img src="${img}"></div>`;
    })
    container.innerHTML += "<div class='dots'>";
    for(let i = 0; i< imgs.length; i++){
        container.innerHTML += `<span class="dot active" data-id="${i}"></span>`
    }
    container.innerHTML += '</div><a class="next">&#10095;</a><a class="prev">&#10094;</a>';
    return container;
} */