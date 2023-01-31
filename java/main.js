let progress1 = document.getElementById("progresshtml");
let work = document.getElementById("work");
let progress2 = document.getElementById("progressjavas");
let progress3 = document.getElementById("progressphp");
let progress4 = document.getElementById("progresssjava");
let idbalken = document.getElementById("idbalken");
let slideContainer = document.querySelector("punt");
let slides = document.querySelectorAll(".slide");
let slideInterval;
let currentSlide = 0;

function nextSlide() {
  slides[currentSlide].classList.remove("active-slide");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active-slide");
}

window.onscroll = function () {
  if (window.scrollY >= progress1.offsetTop - 500) {
    progress1.style.width = "75%";
    progress2.style.width = "45%";
    progress3.style.width = "35%";
    progress4.style.width = "25%";
  }
}
