// global variables
var dateDisplay = $("#currentDay");
var rows = $(".row");
// function that handles the color coding of the hour rows
function colorChange() {
	console.log("hello");
	for (i = 0; i < rows.length; i++) {
		console.log(rows[i].dataset.value);
		if (rows[i].dataset.value < moment().format("k")) {
			$(rows[i]).addClass("past");
		} else if (rows[i].dataset.value > moment().format("k")) {
			$(rows[i]).addClass("future");
		} else {
			$(rows[i]).addClass("present");
		}
	}
}
// function to save textarea to localStorage
function saveInput() {
	$("button").on("click", function () {
		event.preventDefault(event);
		var button = $(this);
		console.log(button[0].form.nextElementSibling.dataset.value);
		console.log(button[0].form[0].value);
		localStorage.setItem(
			button[0].form.nextElementSibling.dataset.value,
			button[0].form[0].value
		);
		// localStorage.setItem(button[0].form[0].value);
	});
}
$(document).ready(function () {
	colorChange();
	saveInput();
});
