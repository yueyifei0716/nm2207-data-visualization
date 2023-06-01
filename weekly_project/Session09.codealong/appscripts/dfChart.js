
    //Add data from resources/part1.txt here


	const labelCountry = ["Vietnam","Finland","Yugoslavia","Singapore","Japan","Thailand","Philippines","Greece"]
	const beingOld= [0.05, 0.184, 0.136, 0.074, 0.18, 0.078, 0.162, 0.106];
	const beingMale= [-0.13,0.096, 0.015, 0.04, -0.088, 0.009,-0.035, -0.059];


    // Source of Deepfake data: Asst.Prof. Saifuddin Ahmed, NTU Singapore. A study of deepfake sharing behavior in Eight Countries.
    // It is good to add the source of the data at the bottom of the chart. Explore to find out how you could do this.

    const dataObj = {
        labels: labelCountry,//uncomment this and set this to labelCountry
        datasets: [
            {
                label: "Age",// uncomment this line and set this to "Age"
                data: beingOld ,// uncomment this line and set this to beingOld
                borderWidth: 2,
                backgroundColor: "hsla(20,100%,80%,0.8)",
                borderColor: "hsla(0,100%,50%,1)"
            }
        ]
    }
    new Chart("dfsharing-age-bar-chart",
            {
                type: "bar",
                data: dataObj,
                options: {
                    maintainAspectRatio: false,
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: ['Predicting likelihood of deepfake sharing','for Older People'],//set this to 'Predicting likelihood of deepfake sharing','for Older People'
                        fontFamily: "TrebuchetMS",
                        fontSize: 24,
                        fontColor: 'rgb(0,120,0)',
                    }
                }
            });
