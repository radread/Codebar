// used in london.html

//The DOM
//DOM means "Document Object Model"
//It allows the Javascript to interact with the page
//The html document is divided into nodes for the DOM.
//

//Try getting the parent node
//Remember, the layout is like the "London" object we
//defined in the last exercise. So the "body" is effectively
//a nested object within the document, and the <h1>, <strong>
//are further nested objects within that
//So, Document > Body > Parent Node

function listDomElements() {
	var children = document.body.childNodes;
	var i;

	for (i = 0; i < children.length; i = i + 1) {
		console.log(children[i]);
	}

	document.getElementsByTagName("h1");

	var description = document.getElementById("description");
	console.log(description.innerHTML);
}

//Now add a link to trigger the function

//An easier way to interact with the DOM
//Retrieve them using their tag

//But this gets time consuming as you will
//have all kinds of tags

//Retrieve elements by id instead

