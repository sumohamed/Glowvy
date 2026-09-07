const menuToggle = document.getElementById("menuToggle");
const navbarMenu = document.getElementById("navbarMenu");
const navLinks = document.querySelectorAll(".navbar__item--link");

const mediaQuery = window.matchMedia("(min-width: 56.25em)");

function toggleMenu() {
	const isOpen = navbarMenu.classList.toggle("is-open");
}

if (menuToggle) {
	menuToggle.addEventListener("click", toggleMenu);
}

// 2. Close navigation menu
function closeMenu() {
	navbarMenu.classList.remove("is-open");
	document.body.style.overflow = "";
}

// 2.1 close navigation automatically when large screens
mediaQuery.addEventListener("change", (e) => {
	if (e.matches) {
		closeMenu();
	}
});

// 2.2 close navigation automatically when user clicks outside nav
document.addEventListener("click", (e) => {
	if (
		navbarMenu?.classList.contains("is-open") &&
		!navbarMenu.contains(e.target) &&
		!menuToggle?.contains(e.target)
	) {
		closeMenu();
	}
});

// 3. Active state
navLinks.forEach((link) => {
	link.addEventListener("click", () => {
		navLinks.forEach((item) => item.classList.remove("active"));
		link.classList.add("active");
		closeMenu();
	});
});
