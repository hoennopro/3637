let slides = document.querySelectorAll(".slides .slide");
let clicked = [];

function flip() {
  let slide = slides[clicked[0]];
  slide.classList.toggle("flipped");
}

function check() {
  for (let i = 0; i < clicked.length - 1; i++) {
    if (clicked[i] === clicked[i + 1]) {
      return true;
    }
  }
  return false;
}

function handleClick(event) {
  let slide = event.target;
  if (slide.classList.contains("flipped")) {
    return;
  }

  clicked.push(slide.id);

  if (check()) {
    alert("Chúc mừng bạn");
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove("flipped");
    }
  } else {
    flip();
  }
}

for (let i = 0; i < slides.length; i++) {
  slides[i].addEventListener("click", handleClick);
}
