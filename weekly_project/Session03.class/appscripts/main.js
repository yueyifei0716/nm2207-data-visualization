// main.js

// 2.1
function calculateSum() {
    let num1 = 4443423434;
    let num2 = 439439439;
    let sum = num1 + num2;
    document.getElementById("answer2-1").innerHTML = sum;
}
calculateSum();

// 2.2
function convertTemperature() {
    let fahrenheit = document.getElementById("fahrenheit").value;
    let celsius = (fahrenheit - 32) * (5/9);
    document.getElementById("celsius").value = celsius.toFixed(2);
}

// 2.3

// Pseudocode

// get m and c
// let E = m * c * c
// let the element id e  = E
// print E

// Real code
function calculateE() {
    let m = document.getElementById("m").innerHTML;
    let c = document.getElementById("c").innerHTML;
    let E = m * c * c;
    document.getElementById("e").innerHTML = E;
}
calculateE();
