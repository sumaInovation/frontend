import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const RealTimeChart = (data1) => {

const data=[
  {
    time:0,
    value:100
  },
  {
    time:1,
    value:80
  },
  {
    time:2,
    value:30
  },
  {
    time:3,
    value:100
  }
     
]
  
  
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
