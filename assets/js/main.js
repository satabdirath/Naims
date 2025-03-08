// ---------------slider-scroll----------------------------
let slideIndex = 1;
showSlides(slideIndex);

function changeSlide(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
// --------------------------javascript for why choose us section------------------------------------
let ball = document.getElementById("ballID");

var myVar = setInterval(spostaDiv, 90);
var margin = 0;

let l = window.screen.width;
let w = 1300;

function spostaDiv() {
  console.log(w);
  if (margin == w) {
    margin = 0 + "px";
  } else {
    ball.style.marginLeft = margin + "px";
  }
  margin += 10;
}

// ---------------------------------sideBar ---------------------------------------------


document.getElementById('toggle-button').addEventListener('click', function () {
  const sidebar = document.getElementById('slide-2');
  const mainContent = document.getElementById('main-content');

  if (sidebar.style.left === '0px') {
    sidebar.style.left = '-250px'; // Hide sidebar
    // mainContent.style.marginLeft = '0'; // Adjust main content
  } else {
    sidebar.style.left = '0px'; // Show sidebar
    // mainContent.style.marginLeft = '250px'; // Adjust main content
  }
});


// --------------------------our Services-----------------------
const swiper = new Swiper('.services-slider', {

  "loop": true,
  "speed": 600,
  "autoplay": {
    "delay": 2000
  },
  grabCursor: true,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {

    0: {
      slidesPerView: 1
    },
    620: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});


// ----------------------------------------------interior section slider
const drag = new Swiper('.interior-section-slider', {

  "loop": false,
  grabCursor: true,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {

    0: {
      slidesPerView: 1
    },
    620: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});

// ------------------------------------------------------how naims work-------------------------------

const howwork = new Swiper('.howwork-section-slider', {

  "loop": false,
 
  keyword: true,
  mousewheel: true,
  grabCursor: true,
  spaceBetween: 30,
  centeredSlides: false,

    simulateTouch:false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      
      
    },
  

  breakpoints: {

    0: {
      slidesPerView: 1
    },
    620: {
      slidesPerView: 1
    },
    1024: {
      slidesPerView: 1
    }
  }
});