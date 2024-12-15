import React, { useState, useEffect } from 'react';
import ApexCharts from 'react-apexcharts';

import "react-datepicker/dist/react-datepicker.css";  // Import the default styles for DatePicker
import DatePicker from 'react-datepicker';  // Import DatePicker

import Weeklyreport from './Weeklyreport';


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
    <div className='text-white mt-20 fixed'>
      <ul className='flex m-3'>
      <li className='p-3'><button onClick={()=>{setIsaDaily(2)}}>Today</button></li>
      <li className='p-3'><button onClick={()=>{setIsaDaily(3)}}>This Week</button></li>
      <li className='p-3'><button onClick={()=>{setIsaDaily(4)}}>This Month</button></li>
      <li className='p-3'><button onClick={()=>{setIsaDaily(5)}}>Download</button></li>
      </ul>
    </div>
       {isDaily==3 &&<Weeklyreport/>}
     
    </>
  );
};

export default RealTimeLineChart;




