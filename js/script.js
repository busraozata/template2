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
});