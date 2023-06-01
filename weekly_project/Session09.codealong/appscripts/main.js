const data = fetch(
  "https://2207-resources.s3.ap-southeast-1.amazonaws.com/sharing_deepfakes.csv" //replace this with the appropriate URL
)
  .then(function (response) {
    return response.text();
  })
  .then(function (data) {
    const table = [];
    const rows = data.split("\r\n"); //replace this with the appropriate values

    rows.forEach((r, indez) => { //insert your forEach loop here
      const item = r.split (",");
      table.push(item);
    });
    console.log(table);

    const labelCountry = table[0].slice(1); //replace this with the appropriate values
    const beingOld = table[1].slice(1); //replace this with the appropriate values
    const dataObj = {
      labels: labelCountry,
      datasets: [
        {
          label: "Age",
          data: beingOld,
          borderWidth: 2,
          backgroundColor: "hsla(20,100%,80%,0.8)",
          borderColor: "hsla(0,100%,50%,1)",
        },
      ],
    };

    new Chart("dfsharing-age-bar-chart", {
      type: "bar",
      data: dataObj,
      options: {
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: [
            "Predicting likelihood of deepfake sharing",
            "for Older People",
          ], //set this to 'Predicting likelihood of deepfake sharing','for Older People'
          fontFamily: "TrebuchetMS",
          fontSize: 24,
          fontColor: "rgb(0,120,0)",
        },
      },
    });
  });