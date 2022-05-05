// @ts-nocheck
const hamburger = document.getElementById('hamburgerButton');
const nav = document.querySelector('nav');
const switchButton = document.querySelector(".switch-selection");
const menu = document.getElementById('menu');
const closeButton =  document.getElementById('closeButton');
const project = document.getElementById('project');
const product = document.getElementById('product');
const subProject = document.getElementById('project-content');
const subProduct = document.getElementById('product-content');

hamburger.addEventListener("click", function () {
    // menu.classList.remove("hidden");
    menu.classList.remove("translate-x-full");
    menu.classList.add("flex");
    menu.classList.add("translate-x-0");
    menu.classList.add("transition");
});

closeButton.addEventListener("click", function(){
    menu.classList.remove("translate-x-0");
    menu.classList.add("translate-x-full");
    menu.classList.add("transition");
})

product.classList.add('on-active');
product.addEventListener('click', () => {
    subProject.style.display = "none";
    subProduct.style.display = "grid";
    product.classList.add('on-active');
    project.classList.remove('on-active');
    switchButton.classList.add("transition", "ease-linear");
    switchButton.classList.add("translate-x-1");
    switchButton.classList.remove("translate-x-28");
});
project.addEventListener('click', () => {
    subProject.style.display = "grid";
    subProduct.style.display = "none";
    project.classList.add('on-active');
    project.classList.add("transition");
    product.classList.remove('on-active');
    switchButton.classList.add("translate-x-28");
    switchButton.classList.remove("translate-x-1");
});

  AOS.init();

  project.addEventListener("click", function() {
    subProject.classList.remove('aos-animate');
    setTimeout(function() {
        subProject.classList.add('aos-animate');
    }, 400);
});

  product.addEventListener("click", function() {
    subProduct.classList.remove('aos-animate');
    setTimeout(function() {
        subProduct.classList.add('aos-animate');
    }, 400);
});

// hamburger.addEventListener('click', function() {
//     menu.classList.remove('hidden');
//     if (menu.classList.contains === "hidden") {
//         menu.classList.remove("grid");
//       } else {
//         menu.classList.add('hidden');
//       }
//     });

    $('.owl-carousel').owlCarousel({
        loop: true,
        navText: ["<span class='nav-btn prev-slide'><</span>", "<span class='nav-btn next-slide'>></span>"],
        responsiveClass:true,
        center:true,
        responsive: {
            0: {
                items: 1,
                nav: true,
                autoplay: true,
                smartSpeed: 800,
                animateIn: 'linear',
                animateOut: 'linear',
                stagePadding: 80,
                margin: 100,
                nav: false,
                dots: false
            },
            320: {
                items: 1,
                nav: false,
                dots: false,
                autoplay: true,
                smartSpeed: 800,
                animateIn: 'linear',
                animateOut: 'linear',
                margin: 100,
                stagePadding: 40,
            },
            375: {
                items: 1,
                nav: false,
                dots: false,
                autoplay: true,
                smartSpeed: 800,
                animateIn: 'linear',
                animateOut: 'linear',
                margin: 100,
                stagePadding: 60,
            },
            425: {
                items: 1,
                nav: false,
                dots: false,
                autoplay: true,
                smartSpeed: 800,
                animateIn: 'linear',
                animateOut: 'linear',
                margin: 200,
                stagePadding: 100,
            },
            540: {
                items: 1,
                nav: false,
                dots: false,
                autoplay: true,
                smartSpeed: 800,
                animateIn: 'linear',
                animateOut: 'linear',
                margin: 200,
                stagePadding: 150,
            },
            640: {
                items: 1,
                nav: false,
                dots: false,
                autoplay: true,
                smartSpeed: 800,
                animateIn: 'linear',
                animateOut: 'linear',
                margin: 250,
                stagePadding: 200,
            },
            768: {
                items: 3,
                nav: false,
                autoplay: true,
                smartSpeed: 800,
                animateIn: 'linear',
                animateOut: 'linear',
                margin: 100,
                stagePadding: 60,
            },
            1024: {
                items: 3,
                nav: false,
                dots: false,
                loop: true,
                stagePadding: 20,
                margin: 80,
                autoplay: true,
                smartSpeed: 500,
                animateIn: 'fadeIn',
                animateOut: 'fadeOut',
            },
            1280:{
                items: 3,
                nav: false,
                dots: false,
                loop: true,
                stagePadding: 1,
                margin: 80,
                autoplay: true,
                smartSpeed: 500,
                animateIn: 'fadeIn',
                animateOut: 'fadeOut',
            },
            1440: {
                items: 3,
                nav: false,
                dots: false,
                loop: true,
                center: true,
                autoplay: true,
                smartSpeed: 800,
                animateIn: 'fadeIn',
                animateOut: 'fadeOut',
                stagePadding: 0,
                margin: 100,
            }
        }
    })