const swiper = new Swiper(".image-slider", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
      //dynamicBullets: true,
    },
  });

let arrow = document.querySelector('.arrow');
let ddblock = document.querySelector('.ddmenu');
  
//arrow.addEventListener("click", () => {
 //   ddblock.classList.toggle("show");
//});