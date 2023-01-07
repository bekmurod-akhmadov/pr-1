
let searchBtn = document.querySelector('#search-btn');
let formContainer = document.querySelector('.form-container');
let loginBtn = document.querySelector('#login-btn');
let loginFormCntainer = document.querySelector('.login-form-container');
let closeBtn = document.querySelector('#form-close');
let menuBarbtn = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let navbarLink = document.querySelectorAll('header .navbar a');
let vidBtn = document.querySelectorAll('.vid-btn');


searchBtn.addEventListener('click', function () {
    searchBtn.classList.toggle('fa-times');
    formContainer.classList.toggle('active');

})
window.onscroll = function () {
    searchBtn.classList.remove('fa-times');
    formContainer.classList.remove('active');
    menuBarbtn.classList.remove('fa-times');
    navbar.classList.remove('active');
}
loginBtn.addEventListener('click', function () {
    loginFormCntainer.classList.toggle('active');
})
closeBtn.addEventListener('click', function () {
    loginFormCntainer.classList.remove('active');
})

menuBarbtn.addEventListener('click', () => {
    menuBarbtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
})

navbarLink.forEach(itemLink => {
    itemLink.addEventListener('click', function () {
        menuBarbtn.classList.remove('fa-times');
        navbar.classList.remove('active');
    })
    console.log(itemLink);
})

vidBtn.forEach(btn => {
    btn.addEventListener('click', function () {
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;

    })
})

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});
