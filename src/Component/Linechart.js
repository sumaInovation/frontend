import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

// Registering chart components
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
);

const RealTimeLineChart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "Real-Time Data",
        data: [],
        borderColor: "#42a5f5", // Line color
        backgroundColor: "rgba(66, 165, 245, 0.2)", // Area fill color
        borderWidth: 2,
        pointRadius: 3,
        pointBackgroundColor: "#42a5f5",
        fill: true,
      },
    ],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulating real-time data (random numbers for this example)
      const newData = Math.random() * 100;

      // Get the current time for x-axis labels
      const currentTime = new Date().toLocaleTimeString();

      setChartData((prevData) => {
        const updatedLabels = [...prevData.labels, currentTime];
        const updatedData = [...prevData.datasets[0].data, newData];

        // Limit the number of data points (e.g., last 20 data points)
        if (updatedLabels.length > 20) {
          updatedLabels.shift();
          updatedData.shift();
        }

        return {
          ...prevData,
          labels: updatedLabels,
          datasets: [
            {
              ...prevData.datasets[0],
              data: updatedData,
            },
          ],
        };
      });
    }, 1000); // Update every 1 second

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `Value: ${tooltipItem.raw.toFixed(2)}`,
        },
      },
    },
    scales: {
      x: {
        type: "category",
        ticks: {
          maxRotation: 0,
          minRotation: 0,
        },
      },
      y: {
        beginAtZero: true,
        max: 120,
      },
    },
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
        Real-Time Line Graph
      </h3>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default RealTimeLineChart;
