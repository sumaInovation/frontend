import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DynamicPieChart = (prop) => {
  const {ruunigvalue,breakingvalue}=prop;
   const dataValues=[ruunigvalue,breakingvalue,100]
  

  const data = {
    labels: ['Red', 'Blue', 'Yellow'],
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
    plugins: {
      tooltip: {
        enabled: true,
      },
      legend: {
        position: 'top',
      },
    },
  };

  return (
   <>
   {/* Pie Chart */}

          <Pie data={data} options={options}/>
    
   
   </>
      

        

        
  );
};

export default DynamicPieChart;
