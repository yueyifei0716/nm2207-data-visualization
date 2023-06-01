d3.csv("https://raw.githubusercontent.com/plotly/datasets/master/gapminder_with_codes.csv", function (err, data) {
  if (err) {
    console.error(err);
    return;
  }

  // Filter data for Singapore, China, and the USA
  const singaporeData = data.filter(row => row.country === "Singapore");
  const chinaData = data.filter(row => row.country === "China");
  const usaData = data.filter(row => row.country === "United States");

  // Extract lifeExp values for each country
  const singaporeLifeExp = singaporeData.map(row => parseFloat(row.lifeExp));
  const chinaLifeExp = chinaData.map(row => parseFloat(row.lifeExp));
  const usaLifeExp = usaData.map(row => parseFloat(row.lifeExp));

  // Create a trace for each country
  // const singaporeTrace = {
  //   y: singaporeLifeExp,
  //   name: "Singapore",
  //   type: "box",
  //   marker: { color: "#3D9970" }
  // };

  // const chinaTrace = {
  //   y: chinaLifeExp,
  //   name: "China",
  //   type: "box",
  //   marker: { color: "#FF4136" }
  // };

  // const usaTrace = {
  //   y: usaLifeExp,
  //   name: "USA",
  //   type: "box",
  //   marker: { color: "#FF851B" }
  // };

  const singaporeTrace = {
    x: singaporeData.map(row => parseInt(row.year)),
    y: singaporeLifeExp,
    name: "Singapore",
    type: "scatter",
    mode: "lines",
    marker: { color: "#3D9970" }
  };

  const chinaTrace = {
    x: chinaData.map(row => parseInt(row.year)),
    y: chinaLifeExp,
    name: "China",
    type: "scatter",
    mode: "lines",
    marker: { color: "#FF4136" }
  };

  const usaTrace = {
    x: usaData.map(row => parseInt(row.year)),
    y: usaLifeExp,
    name: "USA",
    type: "scatter",
    mode: "lines",
    marker: { color: "#FF851B" }
  };


  // Combine traces into a single data array
  const plotData = [singaporeTrace, chinaTrace, usaTrace];

  // Define the layout for the box plot with axis labels, chart title, and subtitle
  // const layout = {
  //   title: {
  //     text: "Life Expectancy Comparison: Singapore, China, and USA",
  //     font: { size: 24 }
  //   },
  //   xaxis: {
  //     title: "Country"
  //   },
  //   yaxis: {
  //     title: "Life Expectancy"
  //   },
  //   showlegend: false
  // };

  const layout = {
    title: {
      text: "Life Expectancy Comparison: Singapore, China, and USA",
      font: { size: 24 }
    },
    subtitle: {
      text: "1952 - 2007",
      font: { size: 18 }
    },
    xaxis: {
      title: "Country"
    },
    yaxis: {
      title: "Life Expectancy"
    },
    showlegend: true,
    legend: {
      x: 1,
      y: 1
    }
  };


  // Create the box plot in the 'myDiv' element
  Plotly.newPlot("boxplot", plotData, layout);
});
