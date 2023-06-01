    
    //Add data from resources/part1.txt here
    
   const labelCountry = ["China", "Indonesia", "Malaysia", "Phillippines", "Singapore", "Thailand", "United States", "Vietnam"]
   const labelYear = ["2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021"]//years in quotes
    
    // Source of data: World Happiness Reports
    // It is good to add the source of the data at the bottom of the chart. Explore to find out how you could do this.
    
    const dataObj = {
        labels: labelYear,//uncomment this and set this to labelCountry
        datasets: [
            {
                label: "China", //country name in quotes
                data: [50.4,51,52.4,52,53,53.3,51,51.3,51.4,57.7,55.9],// data of the country as an array, no quotes
                borderWidth: 2,
                fill: false,
                backgroundColor: "rgb(0,0,255)",//put a color here as rgb(0,0,255) or hsla(20,100%,80%,0.8) format, from https://imagecolorpicker.com/en or https://color.adobe.com/ (explore the Triad radio button on the left)
                borderColor: "rgb(0,0,0)"//put black rgb(0,0,0) or the same color as above
            },
            {
                label: "Indonesia", //country name in quotes
                data: [51.7,53.7,52.9,56,50.4,51.4,51,53.4,53.5,52.4],// data of the country as an array, no quotes
                borderWidth: 2,
                fill: false,
                backgroundColor: "rgb(0,0,255)",//put a color here as rgb(0,0,255) or hsla(20,100%,80%,0.8) format, from https://imagecolorpicker.com/en or https://color.adobe.com/ (explore the Triad radio button on the left)
                borderColor: "rgb(0,0,0)"//put black rgb(0,0,0) or the same color as above
            },
            {
                label: "Malaysia", //country name in quotes
                data: [57.9, 59.1, 57.7, 59.6, 63.2, 0, 0, 53.4, 54.3, 0, 57.1],// data of the country as an array, no quotes
                borderWidth: 2,
                fill: false,
                backgroundColor: "rgb(0,0,255)",//put a color here as rgb(0,0,255) or hsla(20,100%,80%,0.8) format, from https://imagecolorpicker.com/en or https://color.adobe.com/ (explore the Triad radio button on the left)
                borderColor: "rgb(0,0,0)"//put black rgb(0,0,0) or the same color as above
            },
            {
                label: "Phillippines", //country name in quotes
                data: [49.9, 50, 49.8, 53.1, 55.5, 54.3, 55.9, 58.7, 62.7, 50.8, 59],// data of the country as an array, no quotes
                borderWidth: 2,
                fill: false,
                backgroundColor: "rgb(0,0,255)",//put a color here as rgb(0,0,255) or hsla(20,100%,80%,0.8) format, from https://imagecolorpicker.com/en or https://color.adobe.com/ (explore the Triad radio button on the left)
                borderColor: "rgb(0,0,0)"//put black rgb(0,0,0) or the same color as above
            },
            {
                label: "Singapore", //country name in quotes
                data: [65.6,0,65.3,70.6,66.2,60.3,63.8,63.8,63.8,0,64.8],// data of the country as an array, no quotes
                borderWidth: 2,
                fill: false,
                backgroundColor: "rgb(0,0,255)",//put a color here as rgb(0,0,255) or hsla(20,100%,80%,0.8) format, from https://imagecolorpicker.com/en or https://color.adobe.com/ (explore the Triad radio button on the left)
                borderColor: "rgb(0,0,0)"//put black rgb(0,0,0) or the same color as above
            },
            {
                label: "Thailand", //country name in quotes
                data: [66.6,63,62.3,69.8,62,60.7,59.4,60.1,60.2,58.9,58.9],// data of the country as an array, no quotes
                borderWidth: 2,
                fill: false,
                backgroundColor: "rgb(0,0,255)",//put a color here as rgb(0,0,255) or hsla(20,100%,80%,0.8) format, from https://imagecolorpicker.com/en or https://color.adobe.com/ (explore the Triad radio button on the left)
                borderColor: "rgb(0,0,0)"//put black rgb(0,0,0) or the same color as above
            },
            {
                label: "United States", //country name in quotes
                data: [71.2,70.3,72.5,71.5,68.6,68,69.9,68.8,69.4,70.3,69.8],// data of the country as an array, no quotes
                borderWidth: 2,
                fill: false,
                backgroundColor: "rgb(0,0,255)",//put a color here as rgb(0,0,255) or hsla(20,100%,80%,0.8) format, from https://imagecolorpicker.com/en or https://color.adobe.com/ (explore the Triad radio button on the left)
                borderColor: "rgb(0,0,0)"//put black rgb(0,0,0) or the same color as above
            },
            {
                label: "Vietnam", //country name in quotes
                data: [57.7,55.4,50.2,50.9,50.8,50.6,51.8,53,54.7,54.9],// data of the country as an array, no quotes
                borderWidth: 2,
                fill: false,
                backgroundColor: "rgb(0,0,255)",//put a color here as rgb(0,0,255) or hsla(20,100%,80%,0.8) format, from https://imagecolorpicker.com/en or https://color.adobe.com/ (explore the Triad radio button on the left)
                borderColor: "rgb(0,0,0)"//put black rgb(0,0,0) or the same color as above
            },
        ]
    }

    new Chart("happy-chart",
            {
                type: "line",
                data: dataObj,
                options: { 
                    maintainAspectRatio: false,
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: ['% happiness per year'],//set this to 'Something'
                        fontFamily: "TrebuchetMS",
                        fontSize: 24,
                        fontColor: 'rgb(0,120,0)',
                    }
                }
            });
