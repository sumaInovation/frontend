import React, { useState, useEffect } from 'react';
import ApexCharts from 'react-apexcharts';

const RealTimeProductionChart = () => {
  const [options, setOptions] = useState({
    chart: {
      id: 'real-time-production',
      type: 'line',
      height: 350,
      animations: {
      enabled: false, // Disable animations for real-time updates
      },
      toolbar: {
        show: false, // Disable the chart toolbar (including zoom and reset buttons)
      },
    },
    title: {
      text: 'Machine Production Rate',
      align: 'center',
    },
    xaxis: {
      title: {
        text: 'TIME',
      },
      type: 'datetime',  // Use datetime for x-axis
      labels: {
        format: 'HH:mm:ss', // Format the x-axis as HH:mm:ss (local time)
      },
    },
    yaxis: {
      title: {
        text: 'Production Rate (units/hour)',
      },
    },
  });

  const [series, setSeries] = useState([
    {
      name: 'Production Rate',
      data: [],
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Get the current local time (milliseconds)
      const currentTime = new Date();
      const localMillis = currentTime.getTime();  // Get time in milliseconds (local time)

      // Adjust for the time zone offset (in milliseconds)
      const timezoneOffsetMillis = currentTime.getTimezoneOffset() * 60 * 1000;  // Convert minutes to milliseconds
      const adjustedTimeMillis = localMillis - timezoneOffsetMillis;  // Adjust the time by the time zone offset

      // Simulate production rate
      const productionRate = Math.floor(Math.random() * 100); 

      // Add new data point with adjusted time
      setSeries((prevSeries) => {
        const newData = [...prevSeries[0].data, [adjustedTimeMillis, productionRate]];

        // Limit to the last 10 data points
        if (newData.length > 10) {
          newData.shift(); // Remove the oldest data point
        }

        return [{ ...prevSeries[0], data: newData }];
      });
    }, 1000); // Update every second

    // Clean up the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      
      <ApexCharts options={options} series={series} type="line" height={350} />
    </div>
  );
};

export default RealTimeProductionChart;
