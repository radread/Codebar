/* Exercise 1: Wish list */
$(document).ready(function() {
	function addToList(item) {
		$("ol#items").append("<li>" + item + "</li>");
	}

	$(document).on('click', '#add-to-list', function() {
		addToList($('#item').val());

	})
});
