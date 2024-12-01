import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DynamicPieChart = (prop) => {
  const {ruunigvalue,breakingvalue}=prop;
   const dataValues=[ruunigvalue,breakingvalue,100]
  

  const data = {
    labels: ['BROKEN', 'RUN', 'OTHERS'],
    datasets: [
      {
        data: dataValues,  // Use dynamic data from state
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          padding: 30,  // Adjust this to reduce the space between the legend and chart
        },
      },
    },
    // Set radius to reduce the outer radius of the pie chart
    radius: '70%', // Adjust this value to reduce the outer radius
    cutout:'50%',
    // Adjust offset to reduce the space between chart slices and the labels
    offset: 1, // Adjust this value to change the label's distance from the chart
  }

  return (
   <>
   {/* Pie Chart */}

          <Pie data={data} options={options} className='bg-white'/>
    
   
   </>
      

        

        
  );
};

export default DynamicPieChart;
