/* Exercise 1: Wish list */


//create a function to add things to the wishlist with a pending label
function addToList(item) {
	$("ol#items").append("<li>" + item + "<span class='label pending'>Pending</span></li>");
}

$(document).ready(function() {
  // here go all the listeners
  // e.g. on click, mouseover, change etc
  //create an event listener that adds the text from the input field on click to the wish list
  $(document).on('click', '#add-to-list', function() {
  	addToList($('#item').val());
  	$('#item').val("");
  	$('#item').focus();
  });
  $(document).on('click', '.label.pending', function() {
  	$(this).parent().addClass('completed');
  	$(this).parent().append('<span class="label success">Done!</span>');
  	$(this).remove('.label.pending');
  });
});