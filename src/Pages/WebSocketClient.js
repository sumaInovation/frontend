import React, { useState, useEffect } from 'react';
import ApexCharts from 'react-apexcharts';

import "react-datepicker/dist/react-datepicker.css";  // Import the default styles for DatePicker
import DatePicker from 'react-datepicker';  // Import DatePicker
import Scrolltop from './Scrolltop'

const RealTimeLineChart = () => {

  //Line Chart Initialization
  const [chartData, setChartData] = useState({
    series: [
      {
        name: 'Sales',
        data: [],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'line',
        id: 'real-time-line-chart',
        animations: {
          enabled: true,
          easing: 'easeinout',
          speed: 1000,
          dynamicAnimation: {
            enabled: true,
            speed: 350,
          },
        },
        toolbar: {
          show: true,
          tools: {
            zoom: false, // Disable zoom-in/zoom-out buttons
            zoomin: false, // Disable zoom-in button
            zoomout: false, // Disable zoom-out button
            pan: false, // Disable pan (drag to move the chart)
            reset: false, // Disable reset button
          },
        },
      },
      title: {
        text: 'Cable Production Rate (Meter/Minute)',
        align: 'left',
      },
      xaxis: {
        type: 'datetime', // Use datetime for the X-axis
        labels: {
          format: 'HH:mm:ss', // Display time in HH:mm:ss format
        },
      },
      yaxis: {
        title: {
          text: 'Meters',
        },
        min: undefined, // Auto scale, let ApexCharts determine the min
        max: undefined, // Auto scale, let ApexCharts determine the max
        forceNiceScale: true, // Optional, makes the scale more "round"
      },
      stroke: {
        curve: 'smooth',
      },



    },
  });





  //Updates Every 2 Seconds
  useEffect(() => {
    const interval = setInterval(() => {

    }, 3000); // Update every second

    return () => clearInterval(interval); // Cleanup interval when component unmounts
  }, []);

  /////////////////////////////////

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const [_current_running_time, setCurrent_running_time] = useState(0);
  const [_current_breaking_time, setCurrent_breaking_time] = useState(0);
  const [_todayTotalBreake, setTodaybreaktime] = useState(0);
  const [_todayTotalRun, setTodayruntime] = useState(0);
  const [_run_value, setRunvalue] = useState(0);
  const [_breake_value, setBreakvalue] = useState(0);
  const [_thismontTotalBreake, setThismontTotalBreake] = useState(0)
  const [_thismontTotalRun, setThismonthTotalRun] = useState(0)
  const [ws, setWs] = useState(null);
  const [message, setMessage] = useState('');
  const [clientId, setClientId] = useState('');
  const [machinestate, setMachinestate] = useState(0);
  const [isDaily, setIsaDaily] = useState(0);
  const [Isconnnected, setIsconnect] = useState(0);
  //Report download function
  const [formData, setFormData] = useState({
    fromDate: null,  // Initialize with null for date picker
    toDate: null,    // Initialize with null for date picker
    option: '',
    username: '',
    password: '',
  });

  // Handle input changes for other inputs (select, username, password)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle date change
  const handleDateChange = (date, field) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: date,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple form validation
    if (!formData.fromDate || !formData.toDate || !formData.option || !formData.username || !formData.password) {
      alert('Please fill out all fields.');
      return;
    }

    // Handle form data submission logic here
    console.log('Form Submitted:', formData);
    alert('Form submitted successfully!');
  };


  //Inizialize Piechart for daily
  const daily = {
    series: [parseInt(_todayTotalBreake, 10) + parseInt(_current_breaking_time, 10),
      100, parseInt(_todayTotalRun, 10) + parseInt(_current_running_time, 10)],
    options: {
      chart: {
        type: 'pie',
        width: '100%',
      },
      labels: ['Broken', 'Others', 'Run'],
      legend: {
        position: 'top',
        horizontalAlign: 'center',
      },
      title: {
        text: 'Daily Cable Production',
        align: 'center',
      },
      colors: ['#FF0000', '#0000FF', '#00FF00'],
    },
  };

  //Inizialize Piechart for Monthly
  const Monthly = {
    series: [_thismontTotalBreake, 100, _thismontTotalRun],
    options: {
      chart: {
        type: 'pie',
        width: '100%',
      },
      labels: ['Broken', 'Others', 'Run'],
      legend: {
        position: 'top',
        horizontalAlign: 'center',
      },
      title: {
        text: 'Monthly Cable Production',
        align: 'center',
      },
      colors: ['#FF0000', '#0000FF', '#00FF00'],
    },
  };





  useEffect(() => {
    // WebSocket URL - replace with your WebSocket server URL
    const websocket = new WebSocket('https://googlesheet-yuetcisb.b4a.run/');
    websocket.onopen = () => {
      console.log('WebSocket is connected');
      setIsconnect(1);
      // Generate a unique client ID
      const id = Math.floor(Math.random() * 1000);
      setClientId(id);
    };
    websocket.onclose = () => {
      setIsconnect(0);
    }

    // WebSocket message handler
    websocket.onmessage = (event) => {
      try {

        const newData = JSON.parse(event.data); // Assume the WebSocket message contains the data as JSON
        console.log(newData)
        const {
          run_value,
          breake_value,
          current_running_time,
          current_breaking_time,
          todatTotalBreake,
          todayTotalRun,
          thismontTotalBreake,
          thismontTotalRun

        } = newData;
        if (current_breaking_time !== undefined) {
          setCurrent_breaking_time(current_breaking_time);
          setMachinestate(0);
        }
        if (current_running_time !== undefined) {
          setCurrent_running_time(current_running_time);
          setMachinestate(1);
        }

        if (run_value !== undefined) {
          setRunvalue(run_value);
        }
        if (breake_value !== undefined) {
          setBreakvalue(breake_value);
        }
        if (todatTotalBreake !== undefined) {
          setTodaybreaktime(todatTotalBreake)
        }
        if (todayTotalRun !== undefined) {
          setTodayruntime(todayTotalRun);
        }
        if (thismontTotalBreake !== undefined) {
          setThismontTotalBreake(thismontTotalBreake);
        }
        if (thismontTotalRun !== undefined) {
          setThismonthTotalRun(thismontTotalRun);
        }
        //Line Chart Updte when socket data is comming
        if (current_breaking_time != undefined) {
          const timestamp = new Date().getTime() + 19800000; // Get current timestamp (milliseconds)
          setChartData((prevState) => {
            const updatedSeries = [...prevState.series[0].data, { x: timestamp, y: current_breaking_time }];
            // Keep the data within a manageable size (let's say last 10 data points)
            if (updatedSeries.length > 10) {
              updatedSeries.shift(); // Remove the oldest data point
            }

            return {
              ...prevState,
              series: [
                {
                  name: 'Sales',
                  data: updatedSeries,
                },
              ],
            };
          });
        }
        ////////////////////////////////////////////////////


      } catch {

      }
    };

    // Clean up WebSocket connection when the component is unmounted
    return () => {
      websocket.close();
    };
  }, []); // Empty dependency array means this effect runs once when the component mounts








  return (
    <>


      <div class="lg:grid lg:grid-cols-12 lg:grid-rows-12 pt-[76px] ">
        {/* Mobile second navbar */}
        <div className='  z-50 fixed bg-black  w-full  lg:hidden  grid grid-cols-3 justify-items-center '>

          <div className={` p-2  ml-2 mb-2 text-white  text-[12px] font-bold rounded-lg transition duration-300 ${isDaily === 1 ? 'bg-green-500' : 'bg-black'
            }`}>
            <button onClick={() => {
              setIsaDaily(1)
              // Scroll to top

              window.scrollTo({
                top: 0,
                behavior: 'smooth', // smooth scroll animation
              });



            }}>Monthly  Production</button>
          </div>
          <div className={` p-2  mb-2  text-white text-[12px]  font-bold rounded-lg transition duration-300 ${isDaily === 2 ? 'bg-green-500' : 'bg-black'
            }`}>
            <button onClick={() => { setIsaDaily(2) 
              window.scrollTo({
                top: 0,
                behavior: 'smooth', // smooth scroll animation
              });
            }}>Download</button>
          </div>
          <div className={`p-2  mb-2  text-white text-[12px] font-bold rounded-lg transition duration-300 ${isDaily === 0 ? 'bg-green-500' : 'bg-black'
            }`}>
            <button onClick={() => { setIsaDaily(0) 
              window.scrollTo({
                top: 0,
                behavior: 'smooth', // smooth scroll animation
              });
            }}>Daily Production</button>
          </div>


        </div>
        {/* Large screen second navbar */}
        <div class="bg-gray-800 p-4 row-span-10 col-span-2   hidden lg:block ">
          <ul className='m-4 text-white'>
            <li className='  text-center'>MENUE</li>
            <li className='p-2'>
              <span class="material-icons text-white">
                description
              </span>
              <button onClick={() => setIsaDaily(0)}>Daily Production</button></li>
            <li className='p-2'>
              <span class="material-icons ">
                description
              </span>
              <button onClick={() => setIsaDaily(1)}> Monthly Production</button></li>
            <li className='p-2'>
              <span class="material-icons">
                download
              </span>
              <button onClick={() => setIsaDaily(2)}>Report Download</button></li>
          </ul>

        </div>

        {isDaily != 2 && (<div class="bg-gray-800 p-4 row-span-10 col-span-10 min-h-screen">
          <div className="container mx-auto p-4">
            {/* 3-Column Grid for large screen and 1 Colum for small screen */}
            <div className="grid grid-cols-1  lg:grid-cols-3 gap-6">
              {/* Column 1 */}
              <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">Machine Status</h2>

                  {/* Displaying machine data */}
                  <div className="space-y-4">
                    <div className="flex justify-between text-gray-600">
                      <span className="font-medium">Runnign Time:</span>
                      <span className="text-gray-800 text-lg">{parseInt(_current_running_time) +
                        parseInt(_todayTotalRun)}Hrs</span>
                    </div>

                    <div className="flex justify-between text-gray-600">
                      <span className="font-medium">Broken Time:</span>
                      <span className="text-gray-800 text-lg">{parseInt(_current_breaking_time) +
                        parseInt(_todayTotalBreake)} Hrs</span>
                    </div>

                    <div className="flex justify-between text-gray-600">
                      <span className="font-medium">Status</span>
                      <span
                        className={`text-lg font-semibold ${machinestate === "Running" ? "text-green-600" : "text-red-600"
                          }`}
                      >
                        {machinestate ? "Running" : "Stop"}
                      </span>
                    </div>

                    <div className="flex justify-between text-gray-600">
                      <span className="font-medium">No of Taype detect  :</span>
                      <span className="text-gray-800 text-sm">{'0'}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span className="font-medium">No of String Brkoen :</span>
                      <span className="text-gray-800 text-sm">{'0'}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span className="font-medium">Others :</span>
                      <span className="text-gray-800 text-sm">{'0'}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span className="font-medium">Last Update</span>
                      <span className="text-gray-800 text-sm">{'0'}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* colum2 Piechar Part*/}
              <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
                {isDaily == 1 ? <ApexCharts
                  key="pie-chart-2"
                  options={Monthly.options}
                  series={Monthly.series}
                  type="pie"
                  height={350}
                /> : <ApexCharts
                  key="pie-chart-1"
                  options={daily.options}
                  series={daily.series}
                  type="pie"
                  height={350}
                />}

              </div>

              {/* colum3 Linechart Part */}
              <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
                <ApexCharts
                  options={chartData.options}
                  series={chartData.series}
                  type="line"
                  height={350}
                />
              </div>
              {/* row2 colum1 */}
              <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
                <h1 className='text-3xl'>This {monthNames[new Date().getMonth()]}</h1>
                <h1>Maximum Production hours/Day  : {'0'}</h1>
                <h1>Minimum Production hours/Day  : {'0'}</h1>

              </div>
              {/* Row 2 colum2 */}
              <div className="bg-gray-200 p-6 rounded-lg shadow-lg text-center text-4xl">

              </div>
              {/* row 2 colum3 */}
              <div className="bg-gray-200 p-6 rounded-lg shadow-lg">

              </div>


            </div>
          </div>

        </div>)}
        {isDaily == 2 && (<>


          <div className='lg:gap-10 p-4 bg-gray-900 lg:m-28 lg:col-span-10 top-96 mt-24'>
            <h2 className="text-2xl font-semibold text-center mb-6 text-white">Report Download</h2>
            <form onSubmit={handleSubmit}>
              {/* Date Range Selectors */}
              <div className="mb-4">
                <label htmlFor="fromDate" className="block text-sm font-medium text-gray-300">From Date</label>
                <DatePicker
                  selected={formData.fromDate}
                  onChange={(date) => handleDateChange(date, 'fromDate')} // Update state with selected date
                  dateFormat="yyyy-MM-dd"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholderText="Select Start Date"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="toDate" className="block text-sm font-medium text-gray-300">To Date</label>
                <DatePicker
                  selected={formData.toDate}
                  onChange={(date) => handleDateChange(date, 'toDate')} // Update state with selected date
                  dateFormat="yyyy-MM-dd"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholderText="Select End Date"
                />
              </div>

              {/* Select Dropdown */}
              <div className="mb-4">
                <label htmlFor="option" className="block text-sm font-medium text-gray-300">Select Option</label>
                <select
                  name="option"
                  id="option"
                  value={formData.option}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">Select an Option</option>
                  <option value="option1">Running Time</option>
                  <option value="option2">Breking Time</option>
                  <option value="option3">Full Report</option>
                </select>
              </div>

              {/* Username Input */}
              <div className="mb-4">
                <label htmlFor="username" className="block text-sm font-medium text-gray-300">Username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  placeholder="Enter your username"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              {/* Password Input */}
              <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium text-gray-300">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Download
                </button>
              </div>
            </form>
          </div>
        </>
        )}
      </div>

    </>
  );
};

export default RealTimeLineChart;




