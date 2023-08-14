const prevBtn = document.querySelector(".prev-btn"),
  nextBtn = document.querySelector(".next-btn"),
  sliderList = document.querySelector(".slider-list"),
  sliderImg = document.querySelectorAll(".slider-item img");

let sliderIndexCount = 2;
let count = 0;
nextBtn.addEventListener("click", () => {
  sliderIndexCount++;
  if (sliderIndexCount <= sliderImg.length - 1) {
    count++;
    sliderImg[sliderIndexCount - 1].classList.remove("active");
    sliderImg[sliderIndexCount].classList.add("active");
    sliderList.style.transform = `translate(${count * -320}px)`;
  }
  if (sliderIndexCount > sliderImg.length - 1) {
    sliderIndexCount = sliderImg.length - 1;
  }
});

prevBtn.addEventListener("click", () => {
  sliderIndexCount--;
  if (sliderIndexCount >= 0) {
    count--;
    sliderImg[sliderIndexCount + 1].classList.remove("active");
    sliderImg[sliderIndexCount].classList.add("active");
    sliderList.style.transform = `translate(${count * -320}px)`;
  }

  if (sliderIndexCount < 0) {
    sliderIndexCount = 0;
  }
});
