// Dashboard.jsx
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PieChart, Pie, Cell, Tooltip as PieTooltip, ResponsiveContainer as PieResponsiveContainer } from 'recharts';
import { BarChart, Bar, CartesianGrid as BarGrid, XAxis as BarXAxis, YAxis as BarYAxis, Tooltip as BarTooltip, Legend as BarLegend, ResponsiveContainer as BarResponsiveContainer } from 'recharts';
import { useTable } from 'react-table';

// Sample data for charts
const lineData = [
  { date: '2024-01-01', units: 50 },
  { date: '2024-01-02', units: 70 },
  { date: '2024-01-03', units: 90 },
  { date: '2024-01-04', units: 120 },
  { date: '2024-01-05', units: 50 },
  { date: '2024-01-06', units: 70 },
  { date: '2024-01-07', units: 90 },
  
];

const pieData = [
  { name: 'Production', value: 40 },
  { name: 'Defective', value: 20 },
  { name: 'Downtime', value: 15 },
  { name: 'Idle', value: 25 },
];

const barData = [
  { name: 'Day 1', production: 100, downtime: 20 },
  { name: 'Day 2', production: 120, downtime: 15 },
  { name: 'Day 3', production: 90, downtime: 30 },
  { name: 'Day 4', production: 100, downtime: 20 },
  { name: 'Day 5', production: 120, downtime: 15 },
  { name: 'Day 6', production: 90, downtime: 30 },
  { name: 'Day 7', production: 90, downtime: 30 },
];

const tableData = [
  { date: '2024-01-01', produced: 50,  downtime: 10 },
  { date: '2024-01-02', produced: 70,  downtime: 8 },
  { date: '2024-01-03', produced: 90, downtime: 7 },
  { date: '2024-01-04', produced: 50, downtime: 10 },
  { date: '2024-01-05', produced: 70, downtime: 8 },
  { date: '2024-01-06', produced: 90, downtime: 7 },
  { date: '2024-01-07', produced: 90, downtime: 7 },
];

const columns = [
  { Header: 'Date', accessor: 'date' },
  { Header: 'Units Produced', accessor: 'produced' },

  { Header: 'Downtime (hrs)', accessor: 'downtime' },
];

const Dashboard = () => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data: tableData });

  return (
    <div className="p-6 bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Card 1 - Line Chart */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Production Over Time</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="units" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Card 2 - Pie Chart */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Production Breakdown</h2>
          <PieResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={pieData} dataKey="value" nameKey="name" outerRadius={120} fill="#8884d8">
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={['#0088FE', '#00C49F', '#FFBB28', '#FF8042'][index]} />
                ))}
              </Pie>
              <PieTooltip />
            </PieChart>
          </PieResponsiveContainer>
        </div>

        {/* Card 3 - Bar Chart */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Production vs Downtime</h2>
          <BarResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <BarGrid strokeDasharray="3 3" />
              <BarXAxis dataKey="name" />
              <BarYAxis />
              <BarTooltip />
              <BarLegend />
              <Bar dataKey="production" fill="#8884d8" />
              <Bar dataKey="downtime" fill="#82ca9d" />
            </BarChart>
          </BarResponsiveContainer>
        </div>

        {/* Card 4 - Summary Table */}
        <div className="bg-white p-4 rounded-lg shadow-md col-span-1 lg:col-span-3">
          <h2 className="text-xl font-semibold mb-4">Daily Production Summary</h2>
          <div className="">
            <table {...getTableProps()} className="min-w-full table-auto">
              <thead>
                {headerGroups.map(headerGroup => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                      <th {...column.getHeaderProps()} className="py-3 px-4 text-left bg-gray-100">
                        {column.render('Header')}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map(cell => (
                        <td {...cell.getCellProps()} className="py-3 px-4 border-b">
                          {cell.render('Cell')}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
