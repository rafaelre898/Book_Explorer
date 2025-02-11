"use client";

import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale
);

interface LineChartProps {
  years: string[];
  ratings: number[];
}

const LineChart: React.FC<LineChartProps> = ({ years, ratings }) => {
  const data = {
    labels: years, // Years as labels
    datasets: [
      {
        label: "Book Ratings Over Time",
        data: ratings, // Ratings for each book
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top" as const,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Year",
        },
      },
      y: {
        title: {
          display: true,
          text: "Rating",
        },
        min: 0,
        max: 5, // Ratings are out of 5
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
