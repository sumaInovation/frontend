import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register the components needed for the line chart (Chart.js v3+)
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChartExample = () => {
  // Data for the chart
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'], // X-axis labels
    datasets: [
      {
        label: 'Sales', // Dataset label
        data: [65, 59, 80, 81, 56, 55], // Data points for each label
        fill: false, // No fill beneath the line
        borderColor: 'rgba(75,192,192,1)', // Line color
        tension: 0.1, // Smoothness of the line (0 for sharp corners, closer to 1 for smooth curves)
        pointBackgroundColor: 'rgba(75,192,192,1)', // Point color
        pointBorderColor: '#fff', // Point border color
        pointBorderWidth: 2, // Point border width
      },
    ],
  };

  // Options for the chart
  const options = {
    responsive: true, // Makes the chart responsive to container size
    plugins: {
      legend: {
        position: 'top', // Position of the legend (top, left, right, bottom)
      },
      tooltip: {
        mode: 'index', // Display tooltip on hover for the entire dataset
        intersect: false, // Allow tooltips to show even if the pointer isn't on the exact line
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Months', // Title for the x-axis
        },
      },
      y: {
        title: {
          display: true,
          text: 'Sales', // Title for the y-axis
        },
        beginAtZero: true, // Ensures the y-axis starts from 0
      },
    },
  };

  return (
    <div>
      <h2>Sales Data Over Time</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChartExample;
