// Load CSV data
d3.csv("https://raw.githubusercontent.com/plotly/datasets/master/gapminder_with_codes.csv", function (err, rows) {

  // Helper function to filter data by year
  function getDataByYear(year) {
   //filter rows here and return them
   return rows.filter(row => row.year === year.toString());
  }

  // Define the years for which we want to create frames
  const years = d3.range(1952, 2007, 5);


// Create frames for each year using the filtered data
const frames = [];

for (let i = 0; i < years.length; i++) {
  const year = years[i];
  const data = getDataByYear(year);

  const frame = {
    name: year.toString(),
    data: [
      {
        z: data.map((row) => row. lifeExp),
        locations: data.map ((row) => row. iso_alpha),
        text: data.map((row) => row. country),
      },
    ],
  };
  // populate frames here
  frames.push(frame);
}


  // Define the initial data for the choropleth map
  var data = [
    {
      type: "choropleth",
      locationnode: "world",
      locations: frames[0].data[0].locations,
      z: frames[0].data[0].z,
      text: frames[0].data[0].text,
      zauto: false,
      zmin: 30,
      zmax: 90,
    },
  ];

  // Define the layout for the plot, including the geo settings, updatemenus, and sliders
  const layout = {
    title: 'World Life Expectancy<br>1952 - 2007',
    geo: {
      scope: 'world',
      showland: true,
      landcolor: 'rgb(217, 217, 217)',
      countrycolor: 'rgb(255, 255, 255)',
      showlakes: true,
      lakecolor: 'rgb(255, 255, 255)',
      subunitcolor: 'rgb(255, 255, 255)'
    },
    updatemenus: [{
      x: 0.1,
      y: 0.5,
      showactive: false,
      direction: "left",
      type: "buttons",
      buttons: [{
        method: "animate",
        args: [null, {
          fromcurrent: true,
          transition: {
            duration: 200,
          },
          frame: {
            duration: 500
          }
        }],
        label: "Play"
      }]
    }],
    sliders: [{
      steps: years.map(year => ({
        label: year.toString(),
        method: "animate",
        args: [[year.toString()], { mode: "immediate" }]
      })),
      currentvalue: { prefix: "Year:", font: { size: 20, color: "#666" } },
    }]
  };
  // Create the plot with the initial data and layout, then add the frames
  Plotly.newPlot('myDiv', data, layout).then(function () {
    Plotly.addFrames('myDiv', frames);
  });
});