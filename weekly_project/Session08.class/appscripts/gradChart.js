


	const labelYear= [2005, 2006, 2007, 2008, 2009, 2010];//fill the years here from the top row, but within quotes eg "2009","2010"...


    const dataObj = {
        labels: labelYear,           //we want the x axis to be the years
        datasets: [
            {
                label: "Accountancy",// uncomment this line and set this to "Accountancy" for example
                data: [495, 468, 575, 536, 596, 554],// uncomment this line and set this to an array [] with commas that are the bold numbers next to Accountancy for example
                borderWidth: 2,
                backgroundColor: "rgb(0,0,255)",//put a color here as rgb(0,0,255) or hsla(20,100%,80%,0.8) format, from https://imagecolorpicker.com/en or https://color.adobe.com/ (explore the Triad radio button on the left)
                borderColor: "rgb(0,0,255)"//put black rgb(0,0,0) or the same color as above
            },
            {
                label: "Business & Administration",// uncomment this line and set this to "Accountancy" for example
                data: [799, 819, 894, 960, 857, 859],// uncomment this line and set this to an array [] with commas that are the bold numbers next to Accountancy for example
                borderWidth: 2,
                backgroundColor: "rgb(0,255,0)",//put a color here as rgb(0,0,255) or hsla(20,100%,80%,0.8) format, from https://imagecolorpicker.com/en or https://color.adobe.com/ (explore the Triad radio button on the left)
                borderColor: "rgb(0,255,0)"//put black rgb(0,0,0) or the same color as above
            },
            {
                label: "Dentistry",// uncomment this line and set this to "Accountancy" for example
                data: [12, 14, 15, 17, 19, 25],// uncomment this line and set this to an array [] with commas that are the bold numbers next to Accountancy for example
                borderWidth: 2,
                backgroundColor: "rgb(255,0,0)",//put a color here as rgb(0,0,255) or hsla(20,100%,80%,0.8) format, from https://imagecolorpicker.com/en or https://color.adobe.com/ (explore the Triad radio button on the left)
                borderColor: "rgb(255,0,0)"//put black rgb(0,0,0) or the same color as above
            }
        ],
    }
    new Chart("grad-bar-chart",
            {
                type: "bar",
                data: dataObj,
                options: {
                    maintainAspectRatio: false,
                    legend: {
                        display: true
                    },
                    title: {
                        display: true,
                        text: ['Number of female graduates','per Course'],//set this to 'Number of female graduates','per Course'
                        fontFamily: "TrebuchetMS",
                        fontSize: 24,
                        fontColor: 'rgb(0,120,0)',
                    }
                }
            });
