import { servicesData } from "../assets/data/services";
import { createIcons, icons } from "lucide";

const servicesGrid = document.getElementById("servicesGrid");
const prevBtn = document.getElementById("servicesPrevBtn");
const nextBtn = document.getElementById("servicesNextBtn");
const dots = document.querySelectorAll(".services__indicators .dot");

let currentPage = 0;
const cardsPerPage = 4;
const totalPages = Math.ceil(servicesData.length / cardsPerPage);

function renderServices() {
	if (!servicesGrid) return;

	const startIndex = currentPage * cardsPerPage;
	const currentCards = servicesData.slice(
		startIndex,
		startIndex + cardsPerPage,
	);

	// إفراغ وإعادة حقن الـ 4 كروت مع أنيميشن ظهور ناعم
	servicesGrid.innerHTML = currentCards
		.map(
			(item) => `
        <article class="services__card">
          <div class="services__visual">
            <!-- البادج الدائري الصغير ع الشمال من فوق -->
            <div class="services__badge">
              <i data-lucide="${item.icon}"></i>
            </div>
            <!-- فريم القوس للصورة (Arch Shape) -->
            <div class="services__arch">
              <img src="${item.image}" alt="${item.title}" class="services__img" loading="lazy" />
            </div>
          </div>

          <div class="services__content">
            <h3 class="services__card-title">${item.title}</h3>
            <p class="services__card-desc">${item.description}</p>
          </div>
        </article>
      `,
		)
		.join("");

	// تفعيل أيقونات Lucide للكروت الجديدة
	createIcons({ icons });

	// تحديث نقاط الترقيم (Dots)
	dots.forEach((dot, index) => {
		dot.classList.toggle("is-active", index === currentPage);
	});
}

// التنقل لليمين واليسار بنظام اللوب الدائري
nextBtn?.addEventListener("click", () => {
	currentPage = (currentPage + 1) % totalPages;
	renderServices();
});

prevBtn?.addEventListener("click", () => {
	currentPage = (currentPage - 1 + totalPages) % totalPages;
	renderServices();
});

// تشغيل العرض الأولي
renderServices();
