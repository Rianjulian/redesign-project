const hamburger = document.getElementById("hamburgerButton");
const menu = document.getElementById("menu");
const closeButton =  document.getElementById("closeButton");
const nav = document.querySelector("nav");
const project = document.getElementById('project');
const product = document.getElementById('product');
const subProject = document.getElementById('project-content');
const subProduct = document.getElementById('product-content');

product.classList.add('on-active');
product.addEventListener('click', () => {
    subProject.style.display = "none";
    subProduct.style.display = "grid";
    project.classList.remove('on-active');
    product.classList.add('on-active');
});
project.addEventListener('click', () => {
    subProject.style.display = "grid";
    subProduct.style.display = "none";
    project.classList.add('on-active');
    product.classList.remove('on-active');
});

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
            540: {
                items: 1,
                nav: false,
                dots: false,
                margin: 200,
                stagePadding: 150,
            },
            640: {
                items: 1,
                nav: false,
                dots: false,
                margin: 120,
                stagePadding: 80,
            },
            768: {
                items: 3,
                nav: false,
                margin: 120,
                stagePadding: 40,
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
                stagePadding: 10,
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
                stagePadding: 0,
                margin: 10,
            }
        }
    })