const navLink = document.querySelector("nav");
const navContact = document.querySelector("#contact");
const workTogetherContactBtn = document.querySelector("#work-together-contact-btn");
const contact = document.querySelector(".contact-description");
const hamburgerContainer = document.querySelector(".hamburger-menu");
const closeIcon = document.querySelector(".close-icon");
const hamburgerClose = document.querySelector(".hamburger-close");
const hamburgerOpen = document.querySelector(".hamburger");

hamburgerOpen.addEventListener("click", toggleHamburgerMenu);

hamburgerClose.addEventListener("click", () => {
	hamburgerContainer.classList.remove("show");
	navLink.classList.remove("show-nav");
	lockScroll(navLink, "show-nav");
});
function toggleHamburgerMenu() {
	hamburgerContainer.classList.add("show");
	navLink.classList.add("show-nav");
	lockScroll(navLink, "show-nav");
}

closeIcon.addEventListener("click", () => {
	contact.classList.remove("show-contact");
	navLink.classList.remove("show-nav");
	lockScroll(contact, "show-contact");
});

navContact.addEventListener("click", showContact);

workTogetherContactBtn.addEventListener("click", showContact);

function lockScroll(itemDisplayed, classname) {
	if (itemDisplayed.classList.contains(classname)) {
		document.documentElement.style.overflow = "hidden";
	} else {
		document.documentElement.style.overflowY = "scroll";
	}
}

function showContact() {
	contact.classList.add("show-contact");
	lockScroll(contact, "show-contact");
	if (navLink.classList.contains("show-nav")) {
		navLink.classList.remove("show-nav");
		hamburgerContainer.classList.remove("show");
	}
}
