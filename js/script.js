// Sidebar init
const hamburger = document.getElementById('hamburgerButton');
const nav = document.querySelector('nav');
const menu = document.getElementById('menu');
const closeButton = document.getElementById('closeButton');
// Service init
const switchButton = document.querySelector(".switch-selection");
const project = document.getElementById('project');
const product = document.getElementById('product');
const subProject = document.getElementById('project-content');
const subProduct = document.getElementById('product-content');
// Contact Form init
const scriptURL = 'https://script.google.com/macros/s/AKfycbwpm8rKw0RfI2EXI9S-i4O9OTG-jOnKIV0smLoXBRw5QScajDhdpVYS9tA7_e7RR2DRFw/exec'
const form = document.forms['message-form-contact']
const submitBtn = document.querySelector(".submit");
const loadBtn = document.querySelector(".loading");
const closeAlert = document.querySelector(".close");
const alert = document.querySelector(".alert");
var linksWithHash = document.querySelectorAll('a[href*=\\#]:not([href=\\#])')

hamburger.addEventListener("click", function () {
    menu.classList.remove("translate-x-full");
    menu.classList.add("flex");
    menu.classList.add("translate-x-0");
    menu.classList.add("transition");
});

closeButton.addEventListener("click", function () {
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

project.addEventListener("click", function () {
    subProject.classList.remove('aos-animate');
    setTimeout(function () {
        subProject.classList.add('aos-animate');
    }, 400);
});

product.addEventListener("click", function () {
    subProduct.classList.remove('aos-animate');
    setTimeout(function () {
        subProduct.classList.add('aos-animate');
    }, 400);
});

form.addEventListener('submit', e => {
    e.preventDefault();
    // Show The Loading button
    loadBtn.classList.toggle("hidden");
    submitBtn.classList.toggle("hidden");
    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => {
            // Show The Submit button
            loadBtn.classList.toggle("hidden");
            submitBtn.classList.toggle("hidden");
            alert.classList.toggle("hidden");
            alert.classList.add("flex");
            form.reset()
            console.log('Success!', response)
        })
        .catch(error => console.error('Error!', error.message))
})

closeAlert.addEventListener("click", function () {
    alert.classList.add("hidden");
})

linksWithHash.forEach((link) => {
    link.addEventListener('click', autoscrollToHere);
});

function autoscrollToHere() {

    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

        event.preventDefault();

        gsap.to(window, {
            duration: 5.0,
            delay: 0,
            scrollTo: {
                y: this.hash,
                offsetY: -100
            },
        });

    }
}


$('.owl-carousel').owlCarousel({
    loop: true,
    navText: ["<span class='nav-btn prev-slide'><</span>", "<span class='nav-btn next-slide'>></span>"],
    responsiveClass: true,
    center: true,
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
        1280: {
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
            // center: true,
            autoplay: true,
            smartSpeed: 800,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            stagePadding: 0,
            margin: 150,
        },
    }
})