/* Exercise 2: Color picker */

//Create an array of colors
var colors = [ "22ac5e", "d68236", "9180e0", "0d4060", "e4eef7", "44300b", "ec118e", "20ebb6", "9f2f17", "081f03"];
var randomColor = Math.floor( Math.random() * colors.length);
//Show a preview of a given color
function setPreviewColor(color) {
	$('.preview').css('background-color', color);
	$('.color-code').text($('.preview').css('background-color'));
}

//Show the saved favorite in the favorites grid
function addBox(color) {
	$('#colors').prepend("<div class='item' style='background-color: " + color + ";'></div>");
}

//Get ready!
$(document).ready(function() {
	//Show a preview of any color entered into the text field
	$(document).on('keyup keydown keypress', '#color', function() {
		setPreviewColor($('#color').val());
	});
	//Add color in text field to favorites grid when user clicks
	//on add favorite button
	$(document).on('click', '#add-to-favorite', function() {
		addBox($('#color').val());
	});
	//Iterate through colors array and add them to the favorites
	$.each(colors, function(index, element) {
		addBox(element);
	});
	addBox(colors[randomColor]);
});