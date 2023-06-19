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

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: "bottom",
    },
    title: {
      display: false,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const data = {
  labels,
  datasets: [
    {
      data: labels.map(() => Math.floor(Math.random() * 1000)),
      backgroundColor: "#AA8453",
      barThickness: 10,
    },
    {
      data: labels.map(() => Math.floor(Math.random() * 1000)),
      backgroundColor: "#E23428",
      barThickness: 10,
    },
  ],
};

export function Graph() {
  return <Bar options={options} data={data} className="w-full object-cover" />;
}
