import React from "react";
//React Google Charts
import Chart from "react-google-charts";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const HeartRate = props => {
  return (
    <>
      <Chart
        width="auto"
        chartType="ColumnChart"
        loader={<div>Loading Chart</div>}
        data={[
          ["Age", "Low", "Moderate", "High"],
          ["20", 130, 30, 35],
          ["25", 125, 30, 35],
          ["30", 122, 30, 35],
          ["35", 120, 30, 35],
          ["40", 118, 30, 35],
          ["45", 115, 30, 35],
          ["50", 113, 30, 35],
          ["55", 110, 30, 35],
          ["60", 108, 30, 35],
          ["65", 105, 30, 35],
          ["70", 95, 30, 35]
        ]}
        options={{
          title: "Target Heart Rate Zone",
          chartArea: { width: "65%" },
          legend: {
            textStyle: { color: "white" }
          },
          titleTextStyle: {
            color: "white"
          },
          isStacked: true,
          series: {
            0: { color: "#F9A000" },
            1: { color: "#04BF45" },
            2: { color: "#F20505" }
          },
          backgroundColor: "#313131",
          hAxis: {
            title: "Age",
            textStyle: { color: "white" },
            titleTextStyle: {
              color: "white"
            }
          },
          vAxis: {
            title: "HR Beats Per Minute",
            minValue: 80,
            textStyle: { color: "white" },
            titleTextStyle: {
              color: "white"
            },
            viewWindow: {
              min: 100
            }
          }
        }}
        // For tests
        rootProps={{ "data-testid": "3" }}
      />
    </>
  );
};

export default HeartRate;
