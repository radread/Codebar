// used in lesson2.html

//Learn while loops
var i = 1;
var total = 0;

while (i <= 10) {
	total = total + i;
	i = i + 1;
}

console.log("Total: " + total);


var total = 0;
var i;

for (i = 1; i <= 10; i = i + 1) {
	total = total + i;
}

console.log("Total: " + total);

//Try out an array
var animals = [ "dog", "cat", "rabbit", "horse", "elephant", "monkey" ];
//0,1,2,3,4,5 NOT 1,2,3,4,5,6

//Look at the length property

console.log(animals.length);

//This will return "6", although in the array it is numbered up to 5
//This way the last index is always one less than the length

var i;

for (i = 0; i < animals.length; i = i + 1) {
	var animal = animals[i];

	console.log(animal);
}

//Add object to the end of the array - array.push(object)
//Add object to the beginning of the array - array.unshift(object)

animals.push("zebra");
animals.unshift("cow");

//Remove and return last object from array - array.pop()
//Remove and return first element of array - array.shift()

animals.pop();

console.log(animals);

//Use sort() to order the array

animals.sort()
console.log(animals);

//Try sorting on a new array

var names = [ "Jane", "Barry", "Helen", "David", "Sam" ];

names.sort();

console.log(names);

//NOTE: be aware that special characters and uppercase can mess 
//with sorting. Sort can also be customised to sort things in
//other ways

function sortNumbersAscending(a, b) {
	return a - b;
}

var nums = [ 1, 5, 3, 19, 2, 10 ];

nums.sort(sortNumbersAscending);

console.log(nums);

animals.sort().reverse();

// Sort numbers descending.

console.log(animals);
console.log(nums);

function sortNumbersDescending(a,b) {
	return b - a;
}

nums.sort(sortNumbersDescending);

console.log(nums);
