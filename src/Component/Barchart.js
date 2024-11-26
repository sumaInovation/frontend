import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register chart components (necessary for Chart.js v3+)
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Barchart = (prop) => {
    const {value,month}=prop;
  // Define data for the bar chart
  const data = {
    labels: ['Monday','Tuesday','Wendsday','Thursday','Friday','Saturday','Sunday'], // Labels for the x-axis
    datasets: [
      {
        label: 'Cable Quntity(M) ', // Label for the dataset
        data: value, // Data values
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ], // Colors of the bars
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ], // Border colors for the bars
        borderWidth: 1, // Border width of the bars
      },
    ],
  };

  // Define options for the chart
  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true, // Ensure the y-axis starts from 0
      },
    },
  };

  return (
    <div >
      <h2 className='  text-center   text-pretty'>Last week Cable Quntity</h2>
      <Bar data={data} options={options} className=' w-full sm:w-80 lg:w-96 rounded overflow-hidden shadow-lg p-4 bg-white'/> {/* Render the Bar chart */}
    </div>
  );
};

export default Barchart
