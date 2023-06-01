// Add the data source here
// Add the source of the data at the bottom of the chart, if needed

// Request the CSV file
var maxDisplayWords = 5;
let positiveChart;
let negativeChart;
const dataTable = [];
const positiveThreshold = 0.66;
const negativeThreshold = -0.66;
let lastNegativeIndex = 0;
let lastPositiveIndex = 0;

const processData = function(data) {
    const rows = data.split("\r\n");
    rows.forEach((row, index) => {
        const item = row.split(",");
        dataTable.push(item);
    });
}

const createCharts = function() {
    const negativeLabels = [];
    const negativeData = [];
    const positiveLabels = [];
    const positiveData = [];



    for (let i = 0; i < dataTable.length; i++) {
        if (dataTable[i][3] <= negativeThreshold && negativeData.length < maxDisplayWords) {
            negativeLabels.push(dataTable[i][1]);
            negativeData.push(dataTable[i][3]);
        }
        if (dataTable[i][3] >= positiveThreshold && positiveData.length < maxDisplayWords) {
            positiveLabels.push(dataTable[i][1]);
            positiveData.push(dataTable[i][3]);
        }
    }

    const negativeDataObj = {
        labels: negativeLabels,
        datasets: [{
            label: "Words",
            data: negativeData,
            borderWidth: 2,
        }]
    };
    negativeChart = new Chart("negwords-bar-chart", {
        type: "horizontalBar",
        data: negativeDataObj,
        options: {
            scales: {
                xAxes: [{
                    display: true,
                    ticks: {
                        max: -0.659,
                        min: -0.670,
                    }
                }]
            },
            responsive: false,
            legend: { display: false },
            title: {
                display: true,
                text: ['The most negative phrases in the Singlish vocabulary', 'According to research'],
                fontFamily: "TrebuchetMS",
                fontSize: 24,
                fontColor: 'rgb(0,120,0)',
            }
        }
    });

    const positiveDataObj = {
        labels: positiveLabels,
        datasets: [{
            label: "Words",
            data: positiveData,
            borderWidth: 2,
        }]
    };
    positiveChart = new Chart("positive-bar-chart", {
        type: "horizontalBar",
        data: positiveDataObj,
        options: {
            scales: {
                xAxes: [{
                    display: true,
                    ticks: {
                        min: 0.659,
                        max: 0.670
                    }
                }]
            },
            responsive: false,
            legend: { display: false },
            title: {
                display: true,
                text: ['The most positive phrases in the Singlish vocabulary', 'According to research'],
                fontFamily: "TrebuchetMS",
                fontSize: 24,
                fontColor: 'rgb(0,120,0)',
            }
        }
    });
}

const loadData = function() {
    // your fetch api call and all the subsequent data processing calls go here.
    const data = fetch("https://2207-resources.s3.ap-southeast-1.amazonaws.com/senticnet_sg.csv")
    .then(function (response){
        return response.text();
    })
    .then(function(data){
        const table = [];
        const rows = data.split("\r\n");

        rows.forEach((r,index) => {
            const item = r.split(",");
            table.push(item);
        });
        console.log(table);

        const negLabels = [];
        const negData = []
        const posLabels = [];
        const posData = [];

        for(j=0;j<table.length;j++)
        {
            //console.log(table[j][3]);
            //check if it meets your thresholds

            if(table[j][3]<=-0.66)
            {
                negLabels.push(table[j][1]);
                negData.push(table[j][3]);

            }
            if(table[j][3]>=0.66)
            {
                posLabels.push(table[j][1]);
                posData.push(table[j][3]);

            }


        }

        const dataObj1 = {
           // labels: ,//uncomment this and set this to negLabels
            labels: negLabels,
            datasets: [
                {
                //    label:,// uncomment this line and set this to "Words"
                    label: "Words",
                  //  data: ,// uncomment this line and set this to negData
                    data: negData,
                    borderWidth: 2,

                }
            ]
        };
        new Chart("negwords-bar-chart", {
            type: "horizontalBar",
            data: dataObj1,
            options: {
                scales: {
                    xAxes: [{
                        display: true,
                        ticks: {
                            max: -0.659,
                            min: -0.670,
                        }
                    }],

                },
                responsive: false,
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: ['The most negative phrases in the Singlish vocabulary','According to research'],
                    fontFamily: "TrebuchetMS",
                    fontSize: 24,
                    fontColor: 'rgb(0,120,0)',
                }
            }
        });
        const dataObj2 = {
            // labels: ,//uncomment this and set this to negLabels
             labels: posLabels,
             datasets: [
                {
                //  label:,// uncomment this line and set this to "Words"
                    label: "Words",
                //  data: ,// uncomment this line and set this to negData
                    data: posData,
                    borderWidth: 2,

                }
            ]
        };
        new Chart("poswords-bar-chart", {
            type: "horizontalBar",
            data: dataObj2,
            options: {
                scales: {
                    xAxes: [{
                        display: true,
                        ticks: {
                            min: 0.659,
                            max: 0.670
                        }
                    }],

                },
                responsive: false,
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: ['The most positive phrases in the Singlish vocabulary','According to research'],
                    fontFamily: "TrebuchetMS",
                    fontSize: 24,
                    fontColor: 'rgb(0,120,0)',
                }
            }
        });

    });
}


const updateData = function() {
    document.getElementById("moreButton").value = "More Words please!";
    if (negativeChart !== null && positiveChart !== null) {
        // Increase the number of words to display
        maxDisplayWords++;
        // Update charts without destroying then
        updateChartData(negativeChart, "neg");
        updateChartData(positiveChart, "pos");
    } else {
        loadData();
    }
};

function updateChartData(chart, type) {

// first check if it's been called for a positive or a negative chart, and set the appropriate sentiment value threshold. This is a ternary operator.
  const threshold = type === "neg" ? negativeThreshold : positiveThreshold;

// first check if it's been called for a positive or a negative chart, and set the appropriate dataTable starting index
// so that you don't recheck words you've already checked. This is a ternary operator.
  const startingIndex = type === "neg" ? lastNegativeIndex : lastPositiveIndex;

  for (let i = startingIndex; i < dataTable.length && chart.data.labels.length < maxDisplayWords; i++) {
    if ((type === "neg" && dataTable[i][3] <= threshold) || (type === "pos" && dataTable[i][3] >= threshold)) {
     // do something here

     //keep track of where you left off examining the data in dataTable. What happens if you comment out 141-146?
       if (type === "neg") {
        lastNegativeIndex = i + 1;
      } else {
        lastPositiveIndex = i + 1;
      }
    }
  }

  //do something here. at this point, you should have pushed all the new data from dataTable into your chart things, within the for loop and be ready to update the chart.

}


loadData();

const moreButton = document.getElementById("moreButton");
moreButton.addEventListener("click", updateData);