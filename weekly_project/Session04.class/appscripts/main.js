// main.js

console.log("yo");
//it useful to use console.log anywhere and everywhere in your code to
//make sure variable assignments and calculations are working as expected

//function declaration
function myFunction(p1, p2) {
	// this function takes in two ARGUMENTS, but any number of arguments are possible
	var prod = p1*p2; // this variable is declared inside the function so it does not exist once the function call ends
 	return prod;   // The function returns the product of p1 and p2
};

var prodValue = 18;
var alsoValue = 26;

// myFunction();

// //function call
var ans = myFunction(5,6);

console.log(ans)
// var a = 5;
// var b = 6;
// myFunction(a,b);

// Part 2 Objects
function calculator(num1, num2) {
    // Calculate sum, difference, and product
    var sum = num1 + num2;
    var diff = num1 - num2;
    var prod = num1 * num2;

    // Create the result object
    var result = {
        sum: sum,
        diff: diff,
        prod: prod
    };

    // Return the result object
    return result;
}

// Call the calculator function with two numbers as arguments
var result = calculator(10, 5);

// Print the properties of the result object to the console
console.log("Sum: " + result.sum);
console.log("Difference: " + result.diff);
console.log("Product: " + result.prod);

// Print the properties of the result object to a webpage element
document.getElementById("part2").innerHTML = "Output of Step 2.7 is:<br><br>Sum: " + result.sum + "<br>Difference: " + result.diff + "<br>Product: " + result.prod;


// Part 4 Initializing objects
function pointsum(point1, point2) {
	var sum = {};
	sum.x = point1.x + point2.x;
	sum.y = point1.y + point2.y;
	return sum;
}

var point1 = { x: 3, y: 4 };
var point2 = { x: 5, y: 6 };
var sum = pointsum(point1, point2);

// display the result on the console
console.log("Output of Step 4.3 is: " + JSON.stringify(sum));

// display the result on the webpage
document.getElementById("part4").innerHTML = "Output of Step 4.3 is: " + JSON.stringify(sum);
