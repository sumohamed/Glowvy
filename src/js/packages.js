import { packagesData } from "../assets/data/packages";
import { createIcons, icons } from "lucide";

const packagesGrid = document.getElementById("packagesGrid");

function renderPackages() {
	if (!packagesGrid) return;

	packagesGrid.innerHTML = packagesData
		.map(
			(pkg) => `
      <article class="package-card ${pkg.isPopular ? "package-card--popular" : ""}">
        ${pkg.isPopular ? `<span class="package-card__badge">Most Popular</span>` : ""}
        
        <div class="package-card__header">
          <h3 class="package-card__title">${pkg.title}</h3>
          <p class="package-card__subtitle">${pkg.subtitle}</p>
          <div class="package-card__price">
            <span class="currency">$</span>
            <span class="amount">${pkg.price}</span>
          </div>
        </div>

        <ul class="package-card__list">
          ${pkg.items
					.map(
						(item) => `
            <li class="package-card__item ${item.isChoice ? "package-card__item--choice" : ""}">
              <i data-lucide="${item.icon || "sparkles"}" class="package-card__icon"></i>
              <span>${item.text}</span>
            </li>
          `,
					)
					.join("")}
        </ul>

        <div class="package-card__action">
          <a href="#booking" class="btn btn--secondary">
            <span class="text">${pkg.ctaText || "Book Now"}</span>
          </a>
        </div>
      </article>
    `,
		)
		.join("");

	createIcons({ icons });
}

renderPackages();
