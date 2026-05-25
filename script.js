const menuButton = document.querySelector(".menu-button");
const closeMenuButton = document.querySelector(".close-menu-button");
const mobileMenu = document.querySelector(".mobile-menu");

menuButton.addEventListener("click", () => {
    mobileMenu.classList.add("active");
});

closeMenuButton.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
});