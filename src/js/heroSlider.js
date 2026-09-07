import { heroSlides } from "../assets/data/heroSlides";

const heroSlidesContainer = document.getElementById("heroSlides");
const heroContent = document.querySelector(".hero__content");
const heroTitle = document.getElementById("heroTitle");
const heroText = document.getElementById("heroText");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentSlide = 0;

function initHeroSlider() {
	if (!heroSlidesContainer) return;

	// 1. Render all slides and set the active class on the first slide (index 0)
	heroSlidesContainer.innerHTML = heroSlides
		.map(
			(slide, index) => `
        <div 
          class="hero__slide ${index === 0 ? "is-active" : ""}" 
          style="background-image: url('${slide.image}');"
        ></div>
      `,
		)
		.join("");

	updateSlideContent();
}

// 2. Updating slides content according to the active slide
function updateSlideContent() {
	const slides = document.querySelectorAll(".hero__slide");
	slides.forEach((slide, index) => {
		slide.classList.toggle("is-active", index === currentSlide);
	});

	if (heroTitle) heroTitle.textContent = heroSlides[currentSlide].title;
	if (heroText) heroText.textContent = heroSlides[currentSlide].description;

	if (heroContent) {
		heroContent.classList.remove("is-animating");
		void heroContent.offsetWidth;
		heroContent.classList.add("is-animating");
	}
}

// 3. % creates something like infinte loop to returns to index 0 when no more slides
function nextSlide() {
	currentSlide = (currentSlide + 1) % heroSlides.length;
	updateSlideContent();
}

function prevSlide() {
	currentSlide = (currentSlide - 1 + heroSlides.length) % heroSlides.length;
	updateSlideContent();
}

nextBtn?.addEventListener("click", nextSlide);
prevBtn?.addEventListener("click", prevSlide);

initHeroSlider();
