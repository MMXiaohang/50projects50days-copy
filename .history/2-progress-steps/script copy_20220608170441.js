const progress = document.querySelector("#progress");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const circles = document.querySelectorAll(".circle");

let curActive = 1;

next.addEventListener("click", () => {
  curActive++;
  if (curActive > circles.length) {
    curActive = circles.length;
  }
  update();
});

prev.addEventListener("click", () => {
  curActive--;
  if (curActive < 1) {
    curActive = 1;
  }
  update();
});

const update = () => {
  circles.forEach((circle, idx) => {
    if (idx < curActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
};
