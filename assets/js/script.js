// global variables
var dateDisplay = $("#currentDay");
var rows = $(".row");
var inputs = $(".input");
// function that handles the color coding of the hour rows
function colorChange() {
	dateDisplay.text(moment().format("dddd, MMMM Do YYYY, h:mm a"));

	for (i = 0; i < rows.length; i++) {
		console.log(
			parseInt(rows[i].dataset.value) < parseInt(moment().format("HH"))
		);
		console.log();
		if (parseInt(rows[i].dataset.value) > parseInt(moment().format("HH"))) {
			$(rows[i]).addClass("future");
		} else if (
			parseInt(rows[i].dataset.value) < parseInt(moment().format("HH"))
		) {
			$(rows[i]).addClass("past");
		} else if (
			parseInt(rows[i].dataset.value) === parseInt(moment().format("HH"))
		) {
			$(rows[i]).addClass("present");
		}
	}
}
// function to save textarea to localStorage
function saveInput() {
	$("button").on("click", function () {
		event.preventDefault(event);
		var button = $(this);

		localStorage.setItem(
			button[0].form.nextElementSibling.dataset.value,
			button[0].form[0].value
		);
	});
}

function checkStorage() {
	for (i = 0; i < inputs.length; i++) {
		console.log(inputs[i]);
		if (localStorage.getItem(inputs[i].dataset.value) != null) {
			inputs[i].value = localStorage.getItem(inputs[i].dataset.value);
		}
	}
}
$(document).ready(function () {
	colorChange();
	saveInput();

	checkStorage();
});
