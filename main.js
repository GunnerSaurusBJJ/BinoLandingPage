const burger = document.querySelector(".burger"),
  menu = document.querySelector(".mobile-menu");

burger.addEventListener("click", () => {
  burger.classList.toggle("cross");
  menu.classList.toggle("mobile__active");
});
