"use strict";
window.addEventListener("load", function () {
  document.querySelector("body").classList.add("loaded");
});
const slides = document.querySelectorAll(".slide");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const curNum = document.querySelector("#cur-num");
const line = document.querySelector(".top-line");
const lengthDom = document.querySelector("#length");
const auto = true; // Auto scroll
const intervalTime = 10000;
let slideInterval;
lengthDom.innerHTML = slides.length;
const index = [].indexOf.call(slides, document.querySelector(".current")) + 1;
curNum.innerHTML = index;
line.style.width = `${(index / slides.length) * 100}px`;

const nextSlide = () => {
  // Get current class
  const current = document.querySelector(".current");
  // Remove current class
  current.classList.remove("current");
  // Check for next slide
  if (current.nextElementSibling) {
    // Add current to next sibling
    current.nextElementSibling.classList.add("current");
    if (
      current.nextElementSibling.getAttribute("data-logo-color") === "black"
    ) {
      document
        .getElementById("logo-img")
        .setAttribute("src", "images/venus-icon.svg");

      document.documentElement.style.setProperty("--white-color", "#000");
      document.documentElement.style.setProperty("--black-color", "#fff");
    } else {
      document
        .getElementById("logo-img")
        .setAttribute("src", "images/venus.svg");

      document.documentElement.style.setProperty("--white-color", "#fff");
      document.documentElement.style.setProperty("--black-color", "#000");
    }
  } else {
    // Add current to start
    slides[0].classList.add("current");
  }
  const index = [].indexOf.call(slides, document.querySelector(".current")) + 1;
  curNum.innerHTML = index;
  lengthDom.innerHTML = slides.length;
  line.style.width = `${(index / slides.length) * 100}px`;

  setTimeout(() => current.classList.remove("current"));
};

const prevSlide = () => {
  // Get current class
  const current = document.querySelector(".current");
  // Remove current class
  current.classList.remove("current");
  // Check for prev slide
  if (current.previousElementSibling) {
    // Add current to prev sibling
    current.previousElementSibling.classList.add("current");
    if (
      current.previousElementSibling.getAttribute("data-logo-color") === "black"
    ) {
      document
        .getElementById("logo-img")
        .setAttribute("src", "images/venus-icon.svg");

      document.documentElement.style.setProperty("--white-color", "#333");
      document.documentElement.style.setProperty("--black-color", "#fff");
    } else {
      document
        .getElementById("logo-img")
        .setAttribute("src", "images/venus.svg");

      document.documentElement.style.setProperty("--white-color", "#fff");
      document.documentElement.style.setProperty("--black-color", "#333");
    }
  } else {
    // Add current to last
    slides[slides.length - 1].classList.add("current");
  }
  const index = [].indexOf.call(slides, document.querySelector(".current")) + 1;

  curNum.innerHTML = index;
  lengthDom.innerHTML = slides.length;
  line.style.width = `${(index / slides.length) * 100}px`;

  setTimeout(() => current.classList.remove("current"));
};
document.addEventListener("keydown", function (e) {
  if (e.keyCode === 39) {
    nextSlide();
    if (auto) {
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, intervalTime);
    }
  }
  if (e.keyCode === 37) {
    prevSlide();
    if (auto) {
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, intervalTime);
    }
  }
});
// Button events
next.addEventListener("click", (e) => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener("click", (e) => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

// Auto slide
if (auto) {
  // Run next slide at interval time
  slideInterval = setInterval(nextSlide, intervalTime);
}

//slide animation

const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue(
  "--marquee-elements-displayed"
);
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for (let i = 0; i < marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}

// new Splide( '.splide',{
//   type        : 'loop',
// 	perPage     : 3,
//   autoplay    : true,
//   perMove: 1,
//   autoHeight   : true,
// 	autoWidth: true,
// } ).mount();
