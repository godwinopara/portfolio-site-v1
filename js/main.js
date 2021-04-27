const hamburgerMenu = document.querySelector(".hamburger-menu");
const navLink = document.querySelector("nav");

hamburgerMenu.addEventListener("click", toggleHamburgerMenu);

function toggleHamburgerMenu() {
	hamburgerMenu.classList.toggle("show");
	navLink.classList.toggle("show-nav");
}
