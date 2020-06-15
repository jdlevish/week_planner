// function that handles the color coding of the hour rows
function colorChange() {
	var rows = $(".row");
	var dateDisplay = $("#currentDay");
	dateDisplay.text(moment().format("dddd, MMMM Do YYYY, h:mm a"));

	for (i = 0; i < rows.length; i++) {
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
// this function saves the text entered into the textarea inputs to local storage when the save button for that block is clicked
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
// this function checks local storage to see if an object has been previously stored for each hour block
// if it finds an object associated with that block it displays the value in the text area
function checkStorage() {
	var inputs = $(".input");
	for (i = 0; i < inputs.length; i++) {
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
