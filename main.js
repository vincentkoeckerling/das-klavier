const $historyList = document.getElementById("history-list");

window.addEventListener("scroll", () => {
	const rect = $historyList.getBoundingClientRect();
	const top = rect.top;

	let progress = 0;

	if (top <= 0) {
		const percentage = (Math.abs(top) / rect.height) * 100;
		progress = percentage;
	}

	$historyList.style.setProperty("--progress", `${progress}%`);
});

const $sections = document.querySelectorAll("section[id]");
const rem = parseInt(getComputedStyle(document.documentElement).fontSize);
const paddingTop = 6 * rem;
window.addEventListener("scroll", () => {
	for (const $section of $sections) {
		const top = $section.getBoundingClientRect().top;
		if (top < paddingTop) {
			const id = $section.id;
			updateNavLinks(id);
		}
	}
});

const $links = Array.from(document.querySelectorAll(".nav__link"));
function updateNavLinks(activeSection) {
	$links.forEach(($el) => $el.classList.remove("nav__link--active"));

	const $activeLink = document.querySelector(
		`.nav__link[href="#${activeSection}"]`
	);
	if ($activeLink) {
		$activeLink.classList.add("nav__link--active");
	}
}
