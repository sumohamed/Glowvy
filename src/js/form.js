export function initForms() {
	const aboutForm = document.getElementById("aboutBookingForm");
	const mainBookingForm = document.getElementById("bookingForm");

	// ================= 1. إعداد قيود حقل التاريخ =================
	const dateInput = mainBookingForm?.querySelector('input[type="date"]');
	if (dateInput) {
		// منع حجز تواريخ سابقة لتاريخ اليوم
		const today = new Date().toISOString().split("T")[0];
		dateInput.min = today;
	}

	// ================= 2. لوجيك فورم قسم About =================
	aboutForm?.addEventListener("submit", (e) => {
		e.preventDefault();

		const serviceSelect = document.getElementById("serviceSelect");
		const nameInput = document.getElementById("userName");
		const phoneInput = document.getElementById("userPhone");

		const serviceName =
			serviceSelect?.options[serviceSelect.selectedIndex]?.text;
		const name = nameInput?.value.trim();
		const phone = phoneInput?.value.trim();

		// التحقق من رقم الهاتف (أرقام فقط وألا يقل عن 8 أرقام)
		const phoneRegex = /^[0-9+\s-]{8,15}$/;
		if (!phoneRegex.test(phone)) {
			alert("Please enter a valid phone number.");
			phoneInput?.focus();
			return;
		}

		// رسالة التأكيد
		alert(
			`Thank you, ${name}! Your request for (${serviceName}) has been received. We will contact you at ${phone} shortly.`,
		);

		aboutForm.reset();
	});

	// ================= 3. لوجيك فورم الحجز الرئيسية (Booking & FAQ) =================
	mainBookingForm?.addEventListener("submit", (e) => {
		e.preventDefault();

		const nameInput = mainBookingForm.querySelector('input[type="text"]');
		const phoneInput = mainBookingForm.querySelector('input[type="tel"]');
		const serviceSelect = mainBookingForm.querySelector("select");
		const dateVal = dateInput?.value;
		const notesInput = mainBookingForm.querySelector("textarea");

		const name = nameInput?.value.trim();
		const phone = phoneInput?.value.trim();
		const serviceText =
			serviceSelect?.options[serviceSelect.selectedIndex]?.text;
		const notes = notesInput?.value.trim();

		// التحقق من صحة الهاتف
		const phoneRegex = /^[0-9+\s-]{8,15}$/;
		if (!phoneRegex.test(phone)) {
			alert("Please enter a valid phone number.");
			phoneInput?.focus();
			return;
		}

		// بناء رسالة التأكيد
		let confirmationMsg = `Appointment Confirmed!\n\nDear ${name},\nWe booked your slot for: ${serviceText}\nDate: ${dateVal}\nConfirmation sent to: ${phone}`;
		if (notes) {
			confirmationMsg += `\nSpecial Notes: "${notes}"`;
		}

		alert(confirmationMsg);

		mainBookingForm.reset();

		// إعادة تعيين الحد الأدنى للتاريخ بعد الـ reset
		if (dateInput) {
			dateInput.min = new Date().toISOString().split("T")[0];
		}
	});
}

initForms();
