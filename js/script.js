const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

const tanya = document.querySelectorAll(".tanya");
const john = document.querySelectorAll(".john");

next.addEventListener("click", function () {
  john.forEach((john) => john.classList.add("show"));
  tanya.forEach((tanya) => tanya.classList.remove("show"));
});

prev.addEventListener("click", function () {
  john.forEach((john) => john.classList.remove("show"));
  tanya.forEach((tanya) => tanya.classList.add("show"));
});
