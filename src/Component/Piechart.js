import React from 'react';
import { Pie } from 'react-chartjs-2'; // Import the Pie chart from react-chartjs-2
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
} from 'chart.js'; // Import necessary chart.js elements

// Register Chart.js components
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale);

const PieChart = (prop) => {
  
  // Data for the Pie Chart
  const data = {
    labels: ['RUN', 'STRING BREAKE', 'TAYPE DETECT', 'OTHERS'], // Labels for each section
    datasets: [
      {
        data: prop.incommingdata,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'], // Colors for each section
        hoverBackgroundColor: ['#FF3B2D', '#2C8ECF', '#FFB71B', '#36A88E'], // Hover color
      },
    ],
  };

  // Options for customizing the chart
  const options = {
    responsive: true, // Makes the chart responsive to screen size
    plugins: {
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            return `Value: ${tooltipItem.raw}`; // Custom tooltip label
          },
        },
      },
    },
  };

  return (
    <div className='w-60 h-auto '>
      <h2 text-xl font-bold mb-4 text-center >{prop.Title}</h2>
      <Pie data={data} options={options} />
    </div> 
  );
};

export default PieChart;
