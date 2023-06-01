const numbers = [1, 2, 3, 4, 5];

// Using forEach to loop through the array
numbers.forEach(function(number) {
  console.log(number);
});

// Output: 1 2 3 4 5

// Using forEach to loop through the array and perform some operation
const doubledNumbers = [];
numbers.forEach(function(number) {
  doubledNumbers.push(number * 2);
});

console.log(doubledNumbers);