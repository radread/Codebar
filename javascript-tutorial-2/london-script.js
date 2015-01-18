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

//What you did above:
//Now add a link to trigger the function

//An easier way to interact with the DOM is to
//Retrieve them using their tag

//But this gets time consuming as you will
//have all kinds of tags

//Retrieve elements by id instead

//Moving on:
//Creating new elements
//create an element:
//	js document.createElement("<tagName>");
//create text node:
//	js document.createTextNode("<text>");
//add children to element:
//	js document.appendChild("<node>");

//Try this with the London object

var london = {
	name: "London",
	population: 8308369,
	tallestBuilding: {
		name: "Shard",
		height: "310m"
	},
	numberOfUniversities: 43,
	averageRent: 1106,
	dailytTubePassengerJourney:3500000,
	olympics: [ 1908, 1948, 2012],
	updatePopulation: function(newPopulation) {
		this.population = newPopulation;
	}
};

function displayPopulation() {
	//Make a new <p></p> for population
	var population = document.createElement("p");

	//Make some text content for <p></p>
	var content = document.createTextNode("Population: " + london.population);

	//Put the text content into the <p></p>
	population.appendChild(content);

	//Append the population to the body, and make it
	//visible in the browser

	document.body.appendChild(population);
}

//Create a function to display the tallest building name and height
function displayTallestBuilding() {
	var tallestBuilding = document.createElement("p");
	//Create 2 text nodes and 1 "br" element so name and height can appear on different lines
	var content1 = document.createTextNode("Name of tallest building: " + london.tallestBuilding.name)
	var content2 = document.createElement("br") 
	var content3 = document.createTextNode("Height: " + london.tallestBuilding.height);
	tallestBuilding.appendChild(content1);
	tallestBuilding.appendChild(content2);
	tallestBuilding.appendChild(content3);
	document.body.appendChild(tallestBuilding);
}

function displayUniversities() {
	var universities = document.createElement("p");
	var content = document.createTextNode("Number of universities: " + london.numberOfUniversities);

	universities.appendChild(content);
	document.body.appendChild(universities);
}

function displayAverageRent() {
	var rent = document.createElement("p");
	var content = document.createTextNode("Average monthly rent: £" + london.averageRent);
	rent.appendChild(content);
	document.body.appendChild(rent);
}