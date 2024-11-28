import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const RealTimeChart = (data) => {

  
  const [counter, setCounter] = useState(0);

  // Simulate real-time data
  // const fetchData = () => {
    // Simulating dynamic data from an API or WebSocket
    
  //   const newDataPoint = {
  //     time: new Date().toLocaleTimeString(),
  //     value:(incommingdata!=undefined?parseInt(incommingdata,10):0)
  //   };
  //   setData((prevData) => {
  //     // Keep only the last 10 data points
  //     const newData = [...prevData, newDataPoint];
  //     return newData.length > 10 ? newData.slice(1) : newData;
  //   });
  // };

  // useEffect(() => {
  //   // Fetch data every second
  //   const intervalId = setInterval(() => {
  //     fetchData();
  //     setCounter((prevCounter) => prevCounter + 1); // To trigger the component to re-render
  //   }, 1000);
   
  //   // Clear interval on component unmount
  //   return () => clearInterval(intervalId);
  // }, []);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default RealTimeChart;
