const burgerIcon = document.querySelector(".nav__burger");
const navMenu = document.querySelector(".nav__menu");

burgerIcon.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    burgerIcon.classList.toggle("active");
});