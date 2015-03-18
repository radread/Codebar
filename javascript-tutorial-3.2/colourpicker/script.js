/* Exercise 2: Color picker */

//Create an array of colors and a random selection from the array
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
		//Remove the last favorite if more than 16
		//are added
		if($("#colors .item").length > 16) {
			$("#colors .item:last-child").replaceWith("");
		}
		//set focus back to text field
		$('#color').val("");
		$('#color').focus();
	});

	//Iterate through colors array and add them to the favorites
	$.each(colors, function(index, element) {
		addBox(element);
	});

	//Add a random color from 'colors' to preview
	setPreviewColor(colors[randomColor]);

	//show a favorite in the preview box when the mouse
	//hovers over it
	$(document).on('mouseenter', '#colors .item', function() {
		setPreviewColor($(this).css('background-color'));
	});
});