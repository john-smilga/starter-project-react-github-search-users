// STEP 1 - Include Dependencies
// Include react
import React from "react";
// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";
// Include the fusioncharts library
import FusionCharts from "fusioncharts";
// Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";
// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

// STEP 2 - Chart Data


// STEP 3 - Creating the JSON object to store the chart configurations


const ChartComponent = ({data}) =>{

  const chartConfigs = {
    type: "column2d", // The chart type
    width: "700", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        //Set the chart caption
        caption: "Offices with Most Candidates Onboarded [2020-21]",
        //Set the chart subcaption
        subCaption: "All Contracts",
        //Set the x-axis name
        xAxisName: "General Offices",
        //Set the y-axis name
        yAxisName: "New Agents",
        numberSuffix: "K",
        //Set the theme for your chart
        theme: "fusion"
      },
      // Chart Data
      data,
    },
  };

  return <ReactFC {...chartConfigs} />
}


export default ChartComponent;