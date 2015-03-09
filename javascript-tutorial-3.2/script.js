/* Exercise 1: Wish list */
$(document).ready(function() {
  // here go all the listeners
  // e.g. on click, mouseover, change etc
});

//create a function to add things to the wishlist
function addToList(item) {
	$("ol#items").append("<li>" + item + "</li>");
}