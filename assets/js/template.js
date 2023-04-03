// for tablet and phone
var menu = document.querySelector('#menu-btn');
var navbar = document.querySelector('.navbar');

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


