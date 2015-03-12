/* Exercise 2: Color picker */

function setPreviewColor(color) {
	$('.preview').css('background-color', color);
	$('.color-code').text($('.preview').css('background-color'));
}

function addBox(color) {
	$('#colors').prepend("<div class='item' style='background-color: " + color + ";'></div>");
}

$(document).ready(function() {
	$(document).on('keyup keydown keypress', '#color', function() {
		setPreviewColor($('#color').val());
	});
	//$(document).on('click', '#add-to-favorite', function() {
	//	$('#colors').append("<div class='item' style 'background-color: " + color + ";'></div>")
	//});
});