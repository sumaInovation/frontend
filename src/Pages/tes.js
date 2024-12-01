import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend,Title } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend,Title);

const DynamicPieChart = (prop) => {
  const {ruunigvalue,breakingvalue}=prop;
   const dataValues=[ruunigvalue,breakingvalue,100]
  

  const data = {
    
    labels: ['BROKEN', 'RUN', 'OTHERS'],
    datasets: [
      {
        label: 'Daily Production',
        data: dataValues,  // Use dynamic data from state
        backgroundColor: ['red', 'green', 'pink'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  
  const options = {
    responsive:true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: true, // Make sure the title is displayed
        text: 'Daily Production', // The title text
        font: {
          size: 20, // Customize the title font size
          family: 'Arial', // Customize the title font family
          weight: 'bold', // Customize the font weight
        },
        padding: {
          top: 10, // Space from the top of the chart
          bottom: 30, // Space from the bottom of the title
        },
      },
    },
    // Set radius to reduce the outer radius of the pie chart
    radius: '100%', // Adjust this value to reduce the outer radius
    cutout:'50%',
    // Adjust offset to reduce the space between chart slices and the labels
    offset: 5, // Adjust this value to change the label's distance from the chart
  }

  return (
   <>
   {/* Pie Chart */}

          <Pie data={data} options={options}/>
    
   
   </>
      

        

        
  );
};

export default DynamicPieChart;
