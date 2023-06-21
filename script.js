//Event for hamburger open & close
const burger = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (burger) {
	burger.addEventListener("click", () => {
		nav.classList.add("active");
	});
}

if (close) {
	close.addEventListener("click", () => {
		nav.classList.remove("active");
	});
}

const carousel = new bootstrap.Carousel("#carousel-home");

$(carousel).carousel({
	interval: 5000,
	cycle,
	wrap: true,
	pause: false,
});

// listen for load event in the window
document.addEventListener("DOMContentLoaded", function (event) {
	// do things after the DOM loads fully
	console.log("Everything is loaded");
});
