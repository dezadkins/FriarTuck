import React from "react";
import { Line } from "react-chartjs-2";

function LineGraph() {
  const data = [
    {
      x: 13,
      y: 20,
    },
    {
      x: 15,
      y: 10,
    },
    {
      x: 12,
      y: 4,
    },
    {
      x: 16,
      y: 7,
    },
  ];
  return (
    <div className="lineGraph">
      <Line
        data={{
          datasets: [
            {
              type: "line",
              data: data,
              backgroundColor: "black",
              borderColor: "#5AC53B",
              borderWidth: 2,
              pointBorderColor: "rgba(0, 0, 0, 0)",
              pointBackgroundColor: "rgba(0, 0, 0, 0)",
              pointHoverBackgroundColor: "#5AC53B",
              pointHoverBorderColor: "#000000",
              pointHoverBorderWidth: 4,
              pointHoverRadius: 6,
            },
          ],
        }}
        options={{
          legend: { display: false },
          tooltips: { mode: "index", intersect: false },
          scales: {
            yAxes: [
              {
                ticks: {
                  display: false,
                },
              },
            ],
          },
        }}
      />
      <h1>Line</h1>
    </div>
  );
}

export default LineGraph;
