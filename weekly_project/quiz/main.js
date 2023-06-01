const iceCream = {
    flavor: "chocolate",
    brand: "magnum",
};

document.getElementById("para").innerHTML = "My favorite ice cream is: " + iceCream.brand + ", with " + iceCream.flavor + " flavor.";


const person = {
    firstName: "Tony",
    lastName: "Stark",
};

function square(num) {
    return num * num;
}

clickButton = document.getElementById("click")

clickButton.addEventListener("click", function(ev) {
    console.log(square(5));
});