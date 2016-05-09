
// EXO 1

var testArray = [4, 13, 87];

function getFirst() {
console.log(testArray[0])
// var result = getFirst(testArray);
}

getFirst ()


// EXO2

var testArray = [4, 13, 87];

function getLast(myArray) {
var last = testArray[2];
return last;
}

var result = getLast(testArray);
console.log(result); // Should print 87


// // EX03


// function getLargest(myArray) {

// return max;
// }

// var result2 = getLargest(testArray);
// console.log(result2);


// EX04

function decrementArray(myArray) {
var a = myArray[0] - 1;
var b = myArray[1] - 1;
var c = myArray[2] - 1;
var result = [a,b,c];
console.log(result)
}

decrementArray(testArray);



// EX05

// Write a function called addHello that adds the string 'hello ' to each item in an array.

// ['sweet', 'sphere', 'stream'] -> ['hello sweet', 'hello sphere', 'hello stream']

var testArray5 = ['sweet', 'sphere', 'stream'];

function addHello() {

	// var hello = "hello";
	var d = "hello" + testArray5[0];
	var e = "hello" + testArray5[1];
	var f = "hello" + testArray5[2];
	var result5 = [d,e,f];
	console.log(result5); 

	 }

addHello(testArray5);



// EX06

// Write a function called appendSomething that adds the string something as the last element in an array.

// [4, 13, 87] -> [4, 13, 87, 'something']

var testArray6 = [4, 13, 87];
function appendSomething(testArray6) {
 
  for (var i = 0; i < argArray.length; ++i) {
    argArray[i] = 'hello ' + argArray[i];
  }
  
  testArray.length ; 


// var lastIndex = testArray6[testArray6.length - 1]; 
// var last = "something";

// testArray6.splice(lenghth -1, 1, "something");

// console.log(testArray6) 



appendSomething(testArray6);









