const hamburgerMenu = document.querySelector('.hamburger');
const menuArea = document.querySelector('.menu-area')
const menuIsActive = () => {
    hamburgerMenu.classList.toggle('active');
    menuArea.classList.toggle('active')
}
hamburgerMenu.addEventListener('click', menuIsActive);

window.addEventListener("scroll", function () {
    let header = document.querySelector('.header-inner');
    header.classList.toggle('sticky', window.scrollY > 100);

})

var swiper = new Swiper(".mySwiper", {
    effect: "fade",
    /* navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }, */

    // Enable debugger
    debugger: true,

});

var swiper2 = new Swiper(".swiper.mySwiperServices", {
    navigation: {
        nextEl: '.modal-swiper-button-next',
        prevEl: '.modal-swiper-button-prev',
    },

    // Enable debugger
    debugger: true,

});


var slider3 = new Swiper('.swiper.mySwiperBlog', {
    navigation: {
        nextEl: '.modal-swiper-button-next2',
        prevEl: '.modal-swiper-button-prev2',
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
});

/* var swiper = new Swiper(".mySwiperBlog", {
    slidesPerView: 1,
    spaceBetween: 10,
    // Enable debugger
    debugger: true,

    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
});
 */
$(function () {

    $('#datetimepicker2').datetimepicker({
        format: 'DD-MM-YYYY'
    });

});
