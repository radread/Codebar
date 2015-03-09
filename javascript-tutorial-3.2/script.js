/* Exercise 1: Wish list */


//create a function to add things to the wishlist
function addToList(item) {
	$("ol#items").append("<li>" + item + "</li>");
}

$(document).ready(function() {
  // here go all the listeners
  // e.g. on click, mouseover, change etc
  //create an event listener that adds the text to the list
  $(document).on('click', '#add-to-list', function() {
  	addToList($('#item').val());
  });
});