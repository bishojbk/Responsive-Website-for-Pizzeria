const header = document.querySelector("header");
const year = document.querySelector(".year");

const yearNow = new Date();

year.innerHTML = yearNow.getFullYear();

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("open");
};

const sr = ScrollReveal({
  distance: "30px",
  duration: 2500,
  reset: true,
});
sr.reveal(".home-text", { delay: 150, origin: "left" });
sr.reveal(".home-img", { delay: 150, origin: "right" });
sr.reveal(".container, .about, .menu, .contact", {
  delay: 150,
  origin: "bottom",
});
