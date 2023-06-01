

    // Source of data: ?? Add it here
    // It is good to add the source of the data at the bottom of the chart. Explore to find out how you could do this.


    // Make a request for the CSV file
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
                  //  label:,// uncomment this line and set this to "Words"
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

