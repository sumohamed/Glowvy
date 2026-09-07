import { reviewsData } from "../assets/data/reviews";
import { createIcons, icons } from "lucide";

const track = document.getElementById("reviewsTrack");
const dotsContainer = document.getElementById("reviewsDots");
const wrapper = document.getElementById("reviewsWrapper");

let currentIndex = 0;
let autoPlayTimer = null;
const SLIDE_INTERVAL = 4000; // مدة التبديل 4 ثوانٍ

export function initReviews() {
	if (!track) return;

	// حقن الكروت بالداتا المحددة
	track.innerHTML = reviewsData
		.map(
			(item) => `
        <article class="reviews__card fb-post">
          <!-- الهيدر: الأفاتار، الاسم، وتوصية السنتر -->
          <header class="fb-post__header">
            <img src="${item.avatar}" alt="${item.name}" class="fb-post__avatar" loading="lazy" />
            <div class="fb-post__meta">
              <h4 class="fb-post__author">
                ${item.name} 
              </h4>
              <span class="fb-post__time">
                ${item.time} · <i data-lucide="globe" class="fb-post__globe"></i>
              </span>
            </div>
          </header>

          <!-- نص التقييم -->
          <div class="fb-post__body">
            <p class="fb-post__text">${item.text}</p>
          </div>

          <!-- شريط التفاعل والكومنتات -->
          <footer class="fb-post__footer">
            <div class="fb-post__reactions">
              <span class="fb-post__badges">
                <span class="fb-badge fb-badge--like"><i data-lucide="thumbs-up"></i></span>
                <span class="fb-badge fb-badge--love"><i data-lucide="heart"></i></span>
              </span>
              <span class="fb-post__count">${item.likes}</span>
            </div>
            <span class="fb-post__comments">${item.comments} comments</span>
          </footer>
        </article>
      `,
		)
		.join("");

	// توليد نقاط المؤشر
	if (dotsContainer) {
		dotsContainer.innerHTML = reviewsData
			.map(
				(_, i) =>
					`<button class="dot ${i === 0 ? "is-active" : ""}" data-index="${i}"></button>`,
			)
			.join("");

		dotsContainer.addEventListener("click", (e) => {
			const dot = e.target.closest(".dot");
			if (!dot) return;
			currentIndex = parseInt(dot.dataset.index, 10);
			updateSlider();
			resetAutoplay();
		});
	}

	createIcons({ icons });

	startAutoplay();
}

function updateSlider() {
	if (!track) return;
	track.style.transform = `translateX(-${currentIndex * 100}%)`;

	const dots = dotsContainer?.querySelectorAll(".dot");
	dots?.forEach((dot, idx) => {
		dot.classList.toggle("is-active", idx === currentIndex);
	});
}

function nextReview() {
	currentIndex = (currentIndex + 1) % reviewsData.length;
	updateSlider();
}

function startAutoplay() {
	if (autoPlayTimer) clearInterval(autoPlayTimer);
	autoPlayTimer = setInterval(nextReview, SLIDE_INTERVAL);
}

function stopAutoplay() {
	clearInterval(autoPlayTimer);
}

function resetAutoplay() {
	stopAutoplay();
	startAutoplay();
}

wrapper?.addEventListener("mouseenter", stopAutoplay);
wrapper?.addEventListener("mouseleave", startAutoplay);

initReviews();
