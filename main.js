let btn = document.getElementById("btn");
let container = document.querySelector(".container");
let h1 = document.querySelector(".container-h1");
let p = document.querySelector(".container-p");
let imgDiv = document.querySelector(".img-div");
let nav = document.querySelectorAll(".nav a");
let navEl = document.querySelector(".nav");
let feedback = document.querySelector(".feedback");
let selectedRatings;
let img = document.querySelector(".img");

nav.forEach((nav) => {
  nav.addEventListener("click", function (e) {
    e.preventDefault;
    selectedRatings = this.getAttribute("id");
  });
});

btn.addEventListener("click", function (e) {
  e.preventDefault;
  h1.classList.add("hidden");
  p.classList.add("hidden");
  btn.classList.add("hidden");
  navEl.classList.add("hidden");
  feedback.classList.remove("hidden");

  if (img.src.endsWith("star.svg")) {
    img.src = "images/illustration-thank-you.svg";
    img.classList.add("img-thanks");
  }

  let div = document.createElement("div");
  div.classList.add("thanks-div");
  if (selectedRatings === undefined) {
    div.innerHTML = `Please go back and select a rating.`;
    document.querySelector(".feedback-p").classList.add("hidden");
  } else {
    div.innerHTML = `You Selected ${selectedRatings} out of 5`;
  }
  imgDiv.insertAdjacentElement("beforeend", div);
});
