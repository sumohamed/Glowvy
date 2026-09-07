import { featuresData } from "../assets/data/features";
import imgPattern from "../assets/img-pattern.svg";

const featuresGrid = document.getElementById("featuresGrid");

function renderFeaturesCards() {
	if (!featuresGrid) return;

	featuresGrid.innerHTML = featuresData
		.map(
			(item) => `
        <article class="features__card">
          <div class="features__banner hover-shine">
          <img aria-hidden="true" src=${imgPattern} alt="" class="card-pattern card-pattern--top" />
          <img src="${item.image}" alt="${item.title}" class="features__img" loading="lazy" />
          <img aria-hidden="true" src=${imgPattern} alt="" class="card-pattern card-pattern--bottom" />
          
          <div class="features__content">
              <h3 class="features__card-title">${item.title}</h3>
              <p class="features__card-text">${item.description}</p>
            </div>
          </div>
        </article>
      `,
		)
		.join("");
}

renderFeaturesCards();
