// for tablet and phone
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

//for window srcoll

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('header').classList.remove('active');
    }
}

window.onload = () => {
    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }
    else{
        document.querySelector('.header').classList.remove('active');
    }
}

//for home section
var swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
    effect: "fade",
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },   
}); 

//for feature section

var swiper = new Swiper(".feature-slider", {
    spaceBetween: 20,
    effect: "coverflow",
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9000,
        disableOnInteraction: false,
    },
    
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991:{
            slidesPerView: 3,
        },
    },
}); 
//for trainer
var swiper = new Swiper(".trainer-slider", {
    spaceBetween: 20,
    effect: "coverflow",
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9000,
        disableOnInteraction: false,
    },
    
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991:{
            slidesPerView: 3,
        },
    },
}); 

var swiper = new Swiper(".blogs-slider", {
    spaceBetween: 20,
    effect: "fada",
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9000,
        disableOnInteraction: false,
    },
    
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991:{
            slidesPerView: 3,
        },
        1200:{
            slidesPerView: 4,
        },
        1500:{
            slidesPerView: 5,
        },
        1800:{
            slidesPerView: 6,
        },
        2100:{
            slidesPerView: 7,
        },
        2500:{
            slidesPerView: 8,
        },
    },
}); 