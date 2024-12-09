
import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from 'chart.js';

// Registering chart components
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale);

const PieChartCard = (prop) => {


    
  
    const {title,ruunigvalue,breakingvalue}=prop;
  const dataValues=[ruunigvalue,breakingvalue,100]
  // Data for the Pie Chart
  const data = {
    labels: ['Broken', 'Others', 'Loading', 'Run'], // Pie chart segments
    datasets: [
      {
        data: dataValues, // The values for each segment
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50'], // Colors for each segment
        hoverBackgroundColor: ['#FF2A60', '#1D72BB', '#FFB74D', '#388E3C'],
      },
    ],
  };

  // Options for the Pie Chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw}`,
        },
      },
    },
  };

  return (
    <div className=" mx-auto bg-gray-200 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
      <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{title}</h3>
      
      {/* Pie Chart */}
      <div className="flex justify-center items-center mb-4">
        <Pie data={data} options={options} />
      </div>
      
      {/* Card Content */}
      <div className="text-center">
        <p className="text-sm text-gray-600">This is a pie chart showing the sales distribution a</p>
      </div>
    </div>
  );
};

export default PieChartCard;

