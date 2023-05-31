import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  indexAxis: "y",
  plugins: {
    legend: { display: false },
  },

  scales: {
    yAxes: {
      ticks: {
        color: "#FFFFFF",
      },
    },
    xAxes: {
      ticks: {
        color: "#FFFFFF",
      },
    },
  },
};

const labels = ["#SaveAralSea", "Bright Future", "Education for All "];

export const data = {
  labels,
  datasets: [
    {
      label: "Votes",
      data: [36, 15, 25],
      backgroundColor: ["#59B48E", "#DF84FF", "#9DBFFF"],
      barThickness: 80,
      borderWidth: 1,
    },
  ],
};

function Chart() {
  return (
    <Bar style={{ backgroundColor: "#0D2E6E" }} options={options} data={data} />
  );
}
export default Chart;
