const features = document.querySelector(".features");
const about = document.querySelector(".about");
const contact = document.querySelector(".contact");
const getstarted = document.querySelector(".getstarted");

features.addEventListener("click", () => {
  window.location.href = "./index.html";
});

about.addEventListener("click", () => {
  window.location.href = "./about.html";
});

contact.addEventListener("click", () => {
  window.location.href = "./contact.html";
});

getstarted.addEventListener("click", () => {
  window.location.href = "./signup.html";
});