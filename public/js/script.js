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
        // margin: 10,
        responsive: {
            0: {
                items: 1,
                nav: true,
                autoplay: true,
                smartSpeed: 800,
                animateIn: 'linear',
                animateOut: 'linear',
                stagePadding: 60,
                margin: 100,
                nav: false,
                dots: false
            },
            400: {
                items: 1,
                stagePadding: 80,
                margin: 100,
                nav: false,
                dots: false,
                autoplay: true,
                smartSpeed: 800,
                animateIn: 'fadeIn',
                animateOut: 'fadeOut',
            },
            578: {
                items: 2,
                nav: false,
                margin: 100,
                stagePadding: 100,
            },
            700: {
                items: 2,
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
            900:{
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
            1200: {
                items: 2,
                nav: false,
                dots: false,
                loop: true,
                autoplay: true,
                smartSpeed: 800,
                animateIn: 'fadeIn',
                animateOut: 'fadeOut',
                stagePadding: 200,
                margin: 220
            }
        }
    })