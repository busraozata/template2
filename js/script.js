$(".twentytwenty-container").twentytwenty({default_offset_pct: 0.5});


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
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    // Enable debugger
    debugger: true,

});

var swiper2 = new Swiper(".swiper.mySwiperServices", {
    navigation: {
        nextEl: '.modal-swiper-button-next',
        prevEl: '.modal-swiper-button-prev',
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    // Enable debugger
    debugger: true,

});


var slider3 = new Swiper('.swiper.mySwiperBlog', {
    navigation: {
        nextEl: '.modal-swiper-button-next2',
        prevEl: '.modal-swiper-button-prev2',
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 50,
        },

    },
});



var swiper = new Swiper(".mySwiperComments", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

});

var swiper = new Swiper(".mySwiperDoctors", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
});

/* $(function () {

    $('#datetimepicker2').datetimepicker({
        format: 'DD-MM-YYYY'
    });

});
 */
const acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        const panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            panel.classList.remove("open");
            this.setAttribute('aria-expanded', "false")
        } else {
            let active = document.querySelectorAll(".accordion.active");
            for (let j = 0; j < active.length; j++) {
                active[j].classList.remove("active");
                active[j].setAttribute('aria-expanded', "false")
                active[j].nextElementSibling.style.maxHeight = null;
                active[j].nextElementSibling.classList.remove("open");
            }
            panel.style.maxHeight = panel.scrollHeight + "px";
            panel.classList.add("open");
            this.setAttribute('aria-expanded', "true")
        }
        this.classList.toggle("active");

    });
}

$(this).load(function () {
    $("#before_after").twentytwenty();
});
$(this).load(function () {
    $("#before_after2").twentytwenty();
});
$(this).load(function () {
    $("#before_after3").twentytwenty();
});

// Fancybox Config
$('[data-fancybox="gallery"]').fancybox({
    buttons: [
        "slideShow",
        "thumbs",
        "zoom",
        "fullScreen",
        "share",
        "close"
    ],
    loop: false,
    protect: true
});


$(".twentytwenty-container").twentytwenty({default_offset_pct: 0.5});


