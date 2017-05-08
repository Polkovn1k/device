/* ----------MAP-POPUP */
var mapLink = document.querySelector(".info__map-link");
var map =  document.querySelector(".map");
var mapClose = document.querySelector(".map__close");

mapLink.addEventListener("click", function(event) {
	event.preventDefault();
	map.classList.add("map--show");
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		map.classList.remove("map--show");
	}
});

mapClose.addEventListener("click", function(event) {
	event.preventDefault();
	map.classList.remove("map--show");
});

/* ----------WRITE-US-POPUP */
var contactsSpecialLink = document.querySelector(".info__block--contacts .special-link");
var writeUs =  document.querySelector(".write-us");
var writeUsClose = document.querySelector(".write-us__close");

contactsSpecialLink.addEventListener("click", function(event) {
	event.preventDefault();
	writeUs.classList.add("write-us--show");
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode === 27) {
		writeUs.classList.remove("write-us--show");
	}
});

writeUsClose.addEventListener("click", function(event) {
	event.preventDefault();
	writeUs.classList.remove("write-us--show");
});