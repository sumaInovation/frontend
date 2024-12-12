import React, { useState, useEffect } from 'react';
import ApexCharts from 'react-apexcharts';

const RealTimeLineChart = () => {
  // Initial data and categories
  const initialData = [30, 40, 35, 50, 49, 60, 70, 91, 125];
  const initialCategories = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];

  // State to manage chart data and options
  const [chartData, setChartData] = useState({
    series: [{
      name: "Sales",
      data: initialData,
    }],
    options: {
      chart: {
        height: 350,
        type: 'line',
        id: 'real-time-line-chart',
        animations: {
          enabled: true,
          easing: 'linear',
          speed: 1000,
        },
      },
      title: {
        text: 'Real-time Sales Data',
        align: 'left',
      },
      xaxis: {
        categories: initialCategories,
      },
      yaxis: {
        title: {
          text: 'Sales'
        },
        min: 0, // Optional: set min value for Y-axis
      },
      stroke: {
        curve: 'smooth',
      },
      grid: {
        show: true,
      },
    },
  });

  // Simulate real-time data updates every 2 seconds
 

  return (
    <div>
      <ApexCharts
        options={chartData.options}
        series={chartData.series}
        type="line"
        height={350}
      />
    </div>
  );
}

export default RealTimeLineChart;















