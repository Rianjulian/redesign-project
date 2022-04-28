const hamburger = document.getElementById("hamburgerButton");
const menu = document.getElementById("menu");
const closeButton =  document.getElementById("closeButton");
const nav = document.querySelector("nav");

hamburger.addEventListener('click', function() {
    menu.classList.remove('hidden');
    // if (menu.classList === "hidden") {
    //     menu.classList.remove("grid");
    //   } else {
    //     menu.classList.add('hidden');
    //   }
    });

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
            768: {
                items: 3,
                nav: false,
                margin: 100,
                stagePadding: 50,
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
                stagePadding: 100,
                margin: 100,
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
                stagePadding: 20,
                margin: 120,
            }
        }
    })