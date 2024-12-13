// src/ProductionReport.js
import React, { useState } from 'react';
import { Line, Pie } from 'react-chartjs-2';


// Helper function to generate random data
const generateRandomData = (days) => {
  const producedData = [];
  const rejectedData = [];
  for (let i = 0; i < days; i++) {
    producedData.push(Math.floor(Math.random() * 1000) + 500); // Random production between 500 and 1500
    rejectedData.push(Math.floor(Math.random() * 100) + 20);  // Random rejection between 20 and 100
  }
  return { producedData, rejectedData };
};

const ProductionReport = () => {
  const daysInMonth = 30; // You can change this to 31 or dynamically detect the number of days in a month
  const { producedData, rejectedData } = generateRandomData(daysInMonth);

  // Data for Line Chart: Daily Production
  const dailyProductionData = {
    labels: Array.from({ length: daysInMonth }, (_, i) => `Day ${i + 1}`),
    datasets: [
      {
        label: 'Cables Produced',
        data: producedData,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  // Data for Pie Chart: Production Status (Produced vs Rejected)
  const totalProduced = producedData.reduce((a, b) => a + b, 0);
  const totalRejected = rejectedData.reduce((a, b) => a + b, 0);

  const productionStatusData = {
    labels: ['Produced', 'Rejected'],
    datasets: [
      {
        data: [totalProduced, totalRejected],
        backgroundColor: ['#4CAF50', '#FF5733'],
        hoverOffset: 4,
      },
    ],
  };

  // Table Data: Production and Rejection for the Entire Month
  const productionTableData = producedData.map((produced, index) => ({
    date: new Date().toLocaleDateString(), // Format as "2024-12-01"
    produced,
    rejected: rejectedData[index],
    efficiency: ((produced - rejectedData[index]) / produced * 100).toFixed(2) + '%',
  }));

  // State to manage form inputs
  const [companyName, setCompanyName] = useState('');
  const [userName, setUserName] = useState('');
  const [reportDate, setReportDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Report generated for ${companyName} on ${reportDate} by ${userName}`);
  };

  return (
    
       
       <div className='bg-white mt-20'>
        <h1 className='text-3xl text-center'>Monthly  Production Report-{new Date().toLocaleDateString()}</h1>
        <h1 className='text-2xl text-black text-center'>Braiding Machine NO:2</h1>
      {/* Pie Chart for Production Status */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-center mb-4">Production Status</h2>
        <div className="max-w-md mx-auto">
          <Pie data={productionStatusData} />
        </div>
      </div>

      {/* Line Chart for Daily Production */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-center mb-4">Cables Produced Over the Month</h2>
        <div className="max-w-md mx-auto">
          <Line data={dailyProductionData} />
        </div>
      </div>

      {/* Production Table */}
      <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200 mb-8">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4">Date</th>
              <th className="py-2 px-4">Produced</th>
              <th className="py-2 px-4">Rejected</th>
              <th className="py-2 px-4">Efficiency</th>
            </tr>
          </thead>
          <tbody>
            {productionTableData.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="py-2 px-4">{item.date}</td>
                <td className="py-2 px-4">{item.produced}</td>
                <td className="py-2 px-4">{item.rejected}</td>
                <td className="py-2 px-4">{item.efficiency}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h1 className='text-center text-2xl m-4'>Losse Time due to maching stoping</h1>
        <table className="min-w-full text-left text-sm">
        <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4">Date</th>
              <th className="py-2 px-4">Copper Broken</th>
              <th className="py-2 px-4">Spool Changing</th>
              <th className="py-2 px-4">Taype Detect</th>
              <th className="py-2 px-4">Others</th>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default ProductionReport;
