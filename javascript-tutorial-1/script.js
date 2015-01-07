//Check the console is working
console.log("Hello! This is my first line of Javascript!");

//Set a variable and write an expression
var name = "Shehryar";

console.log(name + " is amazing!"); // this is an expression

//Set a numerical variable and write another expression
var pi = 3.14;

console.log("The value of pi: " + pi);

//Set a variable then use addition and the first variable to create another.
//Write an expression about it
var year = 2014
var nextYear = year + 1;

console.log("We are in " + year + ", but " + nextYear + " is just around the corner!");

//Write booleans
var codebarIsAwesome = true;
var weatherIsAmazing = false;

console.log("Is Codebar AWESOME? " + codebarIsAwesome);
console.log("Is the weather in London amazing? " + weatherIsAmazing);

//create an undefined variable

var iDontHaveAValue;

console.log("What kind of variable am I? " + iDontHaveAValue);

//section the next output

console.log("Operations");

//Try addition

var x = 6;
var y = 3;
var addition = x + y;

console.log("Addition: x + y = " + addition);

//Try subtraction

var subtraction = x - y;

console.log("Subtraction: x - y = " + subtraction);

//Try multiplication

var multiplication = x * y;

console.log("Multiplication: x * y = " + multiplication);

//Try division

var division = 6 / 3;

console.log("Division: x / y = " + division);

//Learn the if statement

if (codebarIsAwesome) {
	console.log("Codebar is AWESOME!");
}

if (!codebarIsAwesome) {
	console.log("Codebar is not awesome at all :(!");
}

//Learn about strict equality

var apples = "apples";
var oranges = "oranges";

if(apples === oranges) {
	console.log("Apples and Oranges are the same thing!");
}

if(apples !== oranges) {
	console.log("Apples are not oranges!");
}

//Set some variables and try more than and less than
var coaches = 20;
var students = 24;
var pizzas = 50;

var people = coaches + students;

if (people > pizzas) {
	console.log("We have more people than pizzas");
}

if (students > pizzas) {
	console.log("But we have more students than pizzas");
}

if (coaches < students) {
	console.log("We have less coaches than students");
}

if (people > pizzas) {
	console.log("We have more people than pizzas. That's not very good");
}

else {
	console.log("We have waaay too much pizza. That can never be bad!");
}

//Practice functions
function hello(name) {
	console.log("Hello " + name + "!");
}

hello("Codebar");

function popupHello(name) {
	alert("Hello " + name);
}

//Create a function with multiple arguments
function whatIAmDoingToday(coach,place) {
	console.log("Today, I am at " + place + " and I am learning a bit of JavaScript with the help of " + coach);
}


