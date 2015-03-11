/* Exercise 1: Wish list */


//create a function to add things to the wishlist with a pending label
function addToList(item) {
	$("ol#items").append("<li>" + item + "<span class='label pending'>Pending</span></li>");
}

//Show the total task count
function updateTotal() {
	var pending = $('.pending').length;
	var completed = $('.success').length;
	$("span.total").text("Pending: " + pending + " Completed: " + completed);
}

$(document).ready(function() {
  // here go all the listeners
  // e.g. on click, mouseover, change etc
  //create an event listener that adds the text from the input field on click to the wish list
  $(document).on('click', '#add-to-list', function() {
  	addToList($('#item').val());
  	$('#item').val("");
  	$('#item').focus();
  	updateTotal();
  });

  //replace Pending with Done and add css class .completed on click
  $(document).on('click', '.label.pending', function() {
  	$(this).parent().addClass('completed');
  	$(this).parent().append('<span class="label success">Done!</span>');
  	$(this).remove('.label.pending');
  	updateTotal();
  });
});

