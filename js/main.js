const hamburgerMenu = document.querySelector(".hamburger-menu");
const navLink = document.querySelector("nav");
const workTogetherContactBtn = document.querySelector("#work-together-contact-btn");
const contact = document.querySelector(".contact");

hamburgerMenu.addEventListener("click", toggleHamburgerMenu);

function toggleHamburgerMenu() {
	hamburgerMenu.classList.toggle("show");
	navLink.classList.toggle("show-nav");
	if (navLink.classList.contains("show-nav")) {
		document.documentElement.style.overflow = "hidden";
	} else {
		document.documentElement.style.overflowY = "scroll";
	}
}

workTogetherContactBtn.addEventListener("click", () => {
	contact.classList.add("active");
});
