
// e. Declare and initialize a counter variable
var counter;

counter = 0;

//source = https://codepen.io/etpinard/pen/XKOOeo
//source = https://codepen.io/plotly/pen/EVrRxR
Plotly.plot('graph', [{
    type: 'choropleth',
    locations: ['SGP', 'MYS','THA', 'IDN'],
    z: [10,20, 30,  40]
  }], {
    geo: {
      resolution: 50,
      lataxis: {
        range: [-50, 50]
      },
      lonaxis: {
        range: [70, 140]
      }
    },width:700, height:500
  })


//source = https://codepen.io/mmoskorz/pen/maPExb
var ctx = document.getElementById("mybarChart").getContext("2d");

var mybarChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Population'],
    datasets: [{
      label: 'Singapore',
      backgroundColor: "#dcdcdc",
      data: [10]
    }, {
      label: 'Thailand',
      backgroundColor: "#d75d47",
      data: [30]
    }, {
      label: 'Malaysia',
      backgroundColor: "#f5ac7a",
      data: [20]
    }, {
      label: 'Indonesia',
      backgroundColor: "#b20a1c",
      data: [40]
    }]
  },

  options: {
    legend: {
      display: true,
      position: 'top',
      labels: {
        fontColor: "#000080",
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});


// b. Edit the function to print "Hello" to the console.log
// function printHello() {
//   console.log("Hello");
// }

// c. Add a function call
// printHello();

// d. Edit the function to print "Hello" to the header element
// function printHello() {
//   document.getElementById("header").innerHTML = "Hello";
// }



// f. Edit the function to print the value of the counter variable to the header element
// function update() {
//   document.getElementById("headerID").innerHTML = counter;
// }

// 3. Update the function to track the number of clicks
function update() {
  // a. Increase the value of the counter variable by 1
  counter++;

  // b. Change the text in the header element to show the click count
  document.getElementById("headerID").innerHTML = `OK, I have now received ${counter} clicks`;

  // c. Make the function lie by printing 100 times the actual number of clicks
  document.getElementById("headerID").innerHTML = `OK, I have now received ${counter * 100} clicks`;
}

// Define the changeSlider function
function changeSlider() {
  let sliderValue = document.getElementById("slider").value;
  let header = document.getElementById("headerID");
  let r = Math.floor(sliderValue * 255);
  let g = Math.floor(sliderValue * 255);
  let b = Math.floor(sliderValue * 255);
  header.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
}

// Add event listener for the slider
document.getElementById("slider").addEventListener("input", changeSlider);

var option1 = document.getElementById("Option1");
var option2 = document.getElementById("Option2");

option1.addEventListener("change", function() {
  document.body.style.backgroundImage = "url('resources/water.jpg')";
});

option2.addEventListener("change", function() {
  document.body.style.backgroundImage = "url('resources/water1.jpg')";
});

