function getActiveSlide() {
  return document.querySelector(".slides .slide.active");
}

function nextSlide() {
  const activeSlide = getActiveSlide();
  const nextSlide = activeSlide.nextElementSibling;
  if (nextSlide) {
    activeSlide.classList.remove("active");
    nextSlide.classList.add("active");
  }
}

function prevSlide() {
  const activeSlide = getActiveSlide();
  const prevSlide = activeSlide.previousElementSibling;
  if (prevSlide) {
    activeSlide.classList.remove("active");
    prevSlide.classList.add("active");
  }
}

document.querySelector(".controls .next").addEventListener("click", nextSlide);

document.querySelector(".controls .prev").addEventListener("click", prevSlide);
