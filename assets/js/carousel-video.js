"use strict"
export default class Carousel {
    btns = [];
    items = [];
    dots = [];
    constructor(videos){
        // Crée mon carousel.
        console.log(this);
        const container = document.createElement("div");
        container.classList.add('photo-folio')
        const dots = document.createElement("div");
        dots.classList.add("dots");
        videos.forEach((video, i) => {
            const div = document.createElement("div");
            div.classList.add("items", "fade");
            const vid = document.createElement("video");
            vid.src = video;
            vid.setAttribute("controls",true)
            div.append(vid);
            const dot = document.createElement("span");
            dot.classList.add("dot");
            dot.dataset.id = i;
            dots.append(dot);
            container.append(div);
            this.dots.push(dot);
            this.items.push(div);
        })
        container.append(dots);
        const next = document.createElement("a");
        next.classList.add("next");
        next.innerHTML = "&#10095;";
        const prev = document.createElement("a");
        prev.classList.add("prev");
        prev.innerHTML = "&#10094;";
        container.append(next, prev);
        this.btns.push(next, prev);
        this.container=container;
    }

    showItems(n) {
        // Affiche un élément de mon carousel et cache les autres.
        this.index = n > this.items.length - 1 ? 0 : n < 0 ? this.items.length - 1 : n;
        this.items.forEach((item, i) => {
            item.style.display = "none";
            this.dots[i].classList.remove("active");
        })
        this.items[this.index].style.display = "block";
        this.dots[this.index].classList.add("active");
    }

    currentItem(e) {
        // Affiche l'image qui correspond au point.
        let n = parseInt(e.target.dataset.id);
        this.showItems(n);
    }

    changeItem(e){
        if(e.target.classList.contains("next")){
            this.showItems(++this.index);
        }else{
            this.showItems(--this.index);
        }
    }

    init(){
        // Affiche la première image et ajoute les écouteurs d'évènment.
        this.showItems(0);
        this.dots.forEach(dot=>dot.addEventListener("pointerdown", this.currentItem.bind(this)));
        this.btns.forEach(btn=>btn.addEventListener("pointerdown", this.changeItem.bind(this)));
    }


}