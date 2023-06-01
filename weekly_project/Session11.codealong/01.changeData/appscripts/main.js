// Get the button element
const button = document.getElementById("toggle");

// Add a click event listener to the button
button.addEventListener("click", updateData);

// Define the updateData function
function updateData() {
    console.log("Button clicked!");

    const chartType = myChart.config.options.scales.yAxes[0].type;

    if (chartType === 'linear') {
      square(myChart);
      myChart.config.options.scales.yAxes[0].type = 'logarithmic';
    } else if (chartType === 'logarithmic') {
      originalValue(myChart);
      myChart.config.options.scales.yAxes[0].type = 'linear';
    }

    myChart.update();
  }



//Square function, takes in the whole chart as argument
function square(chart) {
    const datasets = chart.config.data.datasets;
    for (let i = 0; i < datasets.length; i++) {
      const data = datasets[i].data;
      for (let j = 0; j < data.length; j++) {
        data[j] = Math.pow(data[j], 2);
      }
      datasets[i].data = data;
    }
    chart.update();
  }

//Returns it to the original value, takes in the whole chart as argument
function originalValue(chart) {
    const origData = [[-12, -19, -3, 5, 2, 3],[6, 5, -33, -2, 7, 11],[2, 3, -5, 16, 0, -1]];
    const datasets = chart.config.data.datasets;
    for (let i = 0; i < datasets.length; i++) {
      const data = origData[i];
      datasets[i].data = data;
    }
    chart.update();
  }

//Data initialization block:
const data = [[-12, -19, -3, 5, 2, 3],[6, 5, -33, -2, 7, 11],[2, 3, -5, 16, 0, -1]];
const strokes = ['rgba(54, 162, 235, 1)', 'rgba(255,99,132,1)', 'rgba(132,200,99,1)'];
const fills   = ['rgba(54, 162, 235, 0.2)', 'rgba(255, 99, 132, 0.2)', 'rgba(132, 200, 99, 0.2)'];
const grayFill = 'rgb(0,0,0,.2)';
const grayStroke = 'rgb(0,0,0,.8)';

const datasets = [];
for(let i = 0; i < data.length; i++) {
    datasets.push({
        label: 'Dataset ' + (i+1),
        data: data[i],
        backgroundColor: fills[i],
        borderColor: strokes[i],
    });
}

const myChart = new Chart("myChart", {
    type: 'line',
    data: {
        labels: ['Day 1','Day 2','Day 3','Day 4','Day 5','Day 6'],
        datasets: datasets,
    },
    options: {
        scales: {
            yAxes: [{
                type: 'linear',
            }]
        },
        responsive: false
    }
})
