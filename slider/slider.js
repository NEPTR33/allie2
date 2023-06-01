////////////////////////
//SLIDER
////////////////////////
const slideContainer = document.getElementById("slides-container");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("btn-left");
const nextBtn = document.getElementById("btn-right");
const dots = document.querySelectorAll(".dot");
let slidePosition = 0;
const updateDots = function () {
  dots.forEach(function (dot, i) {
    if (slidePosition === i) {
      dot.classList.add("dot-fill");
    }
    if (slidePosition != i) {
      dot.classList.remove("dot-fill");
    }
  });
};

dots.forEach(function (dot, i) {
  dot.addEventListener("click", function (e) {
    slidePosition = i;
    goToSlide(i);
    updateDots();
  });
});

const goToSlide = function (slide) {
  slideContainer.style.transform = `translateX(${-150 * slide}%)`;
};

const nextSlide = function () {
  {
    if (slidePosition === slides.length - 1) {
      slidePosition = 0;
    } else {
      slidePosition++;
    }
    slideContainer.style.transform = `translateX(${slidePosition * -150}%)`;
  }
  updateDots();
};

const prevSlide = function () {
  {
    if (slidePosition < 1) {
      slidePosition = 3;
    } else {
      slidePosition--;
    }
    slideContainer.style.transform = `translateX(${slidePosition * -150}%)`;
  }
  updateDots();
};

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") prevSlide();
  if (e.key === "ArrowRight") nextSlide();
});
