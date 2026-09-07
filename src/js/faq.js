import { faqData } from "../assets/data/faq";
import { createIcons, icons } from "lucide";

const faqAccordion = document.getElementById("faqAccordion");

function initFaq() {
	if (!faqAccordion) return;

	faqAccordion.innerHTML = faqData
		.map(
			(item, index) => `
      <div class="faq-item ${index === 0 ? "is-open" : ""}">
        <button class="faq-item__trigger" type="button" aria-expanded="${index === 0}">
          <span class="faq-item__question">${item.question}</span>
          <span class="faq-item__icon"></span>
        </button>
        <div class="faq-item__content">
          <div class="faq-item__inner">
            <p class="faq-item__answer">${item.answer}</p>
          </div>
        </div>
      </div>
    `,
		)
		.join("");

	createIcons({ icons });

	// لوجيك الفتح والقفل السلس
	const triggers = faqAccordion.querySelectorAll(".faq-item__trigger");
	triggers.forEach((trigger) => {
		trigger.addEventListener("click", () => {
			const parent = trigger.closest(".faq-item");
			const isOpen = parent.classList.contains("is-open");

			// قفل باقي العناصر
			faqAccordion.querySelectorAll(".faq-item").forEach((item) => {
				item.classList.remove("is-open");
				item
					.querySelector(".faq-item__trigger")
					.setAttribute("aria-expanded", "false");
			});

			// فتح العنصر المضغوط
			if (!isOpen) {
				parent.classList.add("is-open");
				trigger.setAttribute("aria-expanded", "true");
			}
		});
	});
}

initFaq();
