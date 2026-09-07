const backToTopBtn = document.getElementById("backToTop");

export function initBackToTop() {
	if (!backToTopBtn) return;

	window.addEventListener("scroll", () => {
		if (window.scrollY > 400) {
			backToTopBtn.classList.add("is-visible");
		} else {
			backToTopBtn.classList.remove("is-visible");
		}
	});

	backToTopBtn.addEventListener("click", () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	});
}

initBackToTop();
