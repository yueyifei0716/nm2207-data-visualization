// Function to create an array of linearly spaced values between 'a' and 'b' with 'n' elements
function linspace(a, b, n) {
    return d3.range(n).map(function (i) { return a + i * (b - a) / (n - 1); });
  }

  var boxNumber = 30;
  var boxColor = [];
  var allColors = linspace(0, 360, boxNumber);
  var data = [];
  var yValues = [];

  // Generate box colors as HSL values based on the linspace array
  for (var i = 0; i < boxNumber; i++) {
    var result = 'hsl(' + allColors[i] + ',50%,50%)';
    boxColor.push(result);
  }

  // Function to generate a random number between 'min' and 'max'
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  // Create y values for each box
  for (var i = 0; i < boxNumber; i++) {
    var ySingleArray = [];
    for (var j = 0; j < 10; j++) {
      var randomNum = getRandomArbitrary(0, 1);
      var yIndValue = 3.5 * Math.sin(Math.PI * i / boxNumber) + i / boxNumber + (1.5 + 0.5 * Math.cos(Math.PI * i / boxNumber)) * randomNum;
      ySingleArray.push(yIndValue);
    }
    yValues.push(ySingleArray);
  }


// Calculate the overall mean
const allYValues = yValues.flat();
const overallMean = allYValues.reduce((sum, value) => sum + value, 0) / allYValues.length;

// Create a trace for the horizontal line representing the overall mean
const meanLineTrace = {
  x: [0, 59],
  y: [overallMean, overallMean],
  mode: 'lines',
  name: 'Overall Mean',
  line: {
    color: 'red',
    width: 2,
    dash: 'dash'
  }
};
data.push(meanLineTrace);

// Create box plot traces for each set of y values with the corresponding colors
for (var i = 0; i < boxNumber; i++) {
    var result = {
      y: yValues[i],
      type: 'box',
      marker: {
        color: boxColor[i]
      }
    };
    data.push(result);
  }
// Create box plot traces a second box plot, for each set of y values with the corresponding colors, with selected tooltip info
  for (var i = 0; i < boxNumber; i++) {
    var result = {
      y: yValues[i],
      type: 'box',
      marker: {
        color: boxColor[i]
      },
      hoverinfo: 'y' // Display only the y value in the tooltip
    };
    data.push(result);
  }


// Define the layout for the box plot with axis labels, chart title, and subtitle
var layout = {
    title: {
      text: 'Box Plot with Additional Information',
      font: { size: 24 }
    },
    xaxis: {
      showgrid: false,
      zeroline: false,
      tickangle: 60,
      showticklabels: true,
      title: 'X Axis Label'
    },
    yaxis: {
      zeroline: false,
      gridcolor: 'white',
      title: 'Y Axis Label'
    },
    paper_bgcolor: 'rgb(233,233,233)',
    plot_bgcolor: 'rgb(233,233,233)',
    showlegend: true,
    annotations: [
      {
        text: 'Subtitle',
        xref: 'paper',
        yref: 'paper',
        x: 0.5,
        y: 1.0,
        showarrow: false,
        font: {
          size: 16
        }
      }
    ]
  };

// Create the box plot in the 'myDiv' element
Plotly.newPlot('myDiv', data, layout);