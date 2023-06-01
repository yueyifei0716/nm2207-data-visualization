

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


    const negLabels = [];
    const negData = []
    const posLabels = [];
    const posData = [];

    //add your for loop here
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
    console.log(negData)


    const dataObj = {
        labels: negLabels,//uncomment this and set this to negLabels
        datasets: [
            {
                label: "Words",// uncomment this line and set this to "Words"
                data: negData,// uncomment this line and set this to negData
                borderWidth: 2,
                backgroundColor: "hsla(20,100%,80%,0.8)",
                borderColor: "hsla(0,100%,50%,1)"
            }
        ]
    }
    new Chart("negwords-bar-chart",
    {
        type: "horizontalBar",
        data: dataObj,
        options: {
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            title: {
                display: true,
                text: ['The most negative phrases in the Singlish vocabulary','According to research'],//set this to ['The most negative phrases in the Singlish vocabulary','According to research']
                fontFamily: "TrebuchetMS",
                fontSize: 24,
                fontColor: 'rgb(0,120,0)',
            }
        }
    });

    const posDataObj = {
        labels: negLabels,//uncomment this and set this to negLabels
        datasets: [
            {
                label: "Words",// uncomment this line and set this to "Words"
                data: negData,// uncomment this line and set this to negData
                borderWidth: 2,
                backgroundColor: "hsla(20,100%,80%,0.8)",
                borderColor: "hsla(0,100%,50%,1)"
            }
        ]
    }
    new Chart("negwords-bar-chart",
    {
        type: "horizontalBar",
        data: posDataObj,
        options: {
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            title: {
                display: true,
                text: ['The most negative phrases in the Singlish vocabulary','According to research'],//set this to ['The most negative phrases in the Singlish vocabulary','According to research']
                fontFamily: "TrebuchetMS",
                fontSize: 24,
                fontColor: 'rgb(0,120,0)',
            }
        }
    });
});





