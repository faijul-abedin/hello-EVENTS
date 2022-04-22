// this section is for image swiper Start

var swiper = new Swiper(".home-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 70,
      modifier: 3,
      slideShadows: true,
    },
    loop:true,
    autoplay:{
        delay: 3000,
        disableOnInteraction:false,
    }
  });
  var swiper = new Swiper(".review-slider", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    spaceBetween:10,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        700: {
            slidesPerView: 2,
        },
        1050: {
            slidesPerView: 3
        },
    },
    autoplay:{
        delay: 3000,
        disableOnInteraction:false,
    }
  });

//   image swiper section end 

// Navbar toggle section start

  const hamburger=document.querySelector(".hamburger");
  const navMenu = document.querySelector(".menu");

  hamburger.addEventListener("click", ()=>{
      hamburger.classList.toggle("active")
      navMenu.classList.toggle("active")
  })
document.querySelectorAll(".menu-item").forEach(n => n.addEventListener("click", ()=>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

// Navbar toggle section end