const progress = document.querySelector("#progress");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const circles = document.querySelectorAll(".circle");

let curActive = 0;

next.addEventListener("click", () => {
  curActive++;
  if (curActive > circles.length) {
    curActive = circles.length;
  }
  update();
});

prev.addEventListener("click", () => {
  curActive--;
  if (curActive < 0) {
    curActive = 0;
  }
  update();
});

const update = () => {
  // 更新circles
  circles.forEach((circle, idx) => {
    if (idx < curActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (curActive === 1) {
    prev.disabled = true;
  } else if (curActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
};
