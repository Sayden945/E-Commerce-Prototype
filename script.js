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

/*
$(window).load(function () {
	document.getElementById("extraControls").style.visibility = "hidden";

	$("#loading").fadeOut(500, function () {
		document.getElementById("extraControls").style.visibility = "visible";
	});
});
 */
