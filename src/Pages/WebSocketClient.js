import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import DynamicPieChart from './tes'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import HouseIcon from '@mui/icons-material/House';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ArticleIcon from '@mui/icons-material/Article';
import { Menu } from '@headlessui/react';

import Navbar from '../Component/Sidebar'


// Register necessary Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const RealTimeLineChart = () => {
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
    const [isDaily,setIsaDaily]=useState(0);

  // Set up initial chart data state
  
  const [chartData, setChartData] = useState({
    labels: ['00:00', '00:10', '00:20', '00:30', '00:40', '00:50'],
    datasets: [
      {
        label: '',
        data: [0,20,45,5,0,60],
        fill: true,
        borderColor: 'blue',
        tension: 0.1,
        pointRadius: 0,
        pointBackgroundColor: 'white',
      },
    ],
  });

  

  useEffect(() => {
    // WebSocket URL - replace with your WebSocket server URL
    const websocket = new WebSocket('https://googlesheet-yuetcisb.b4a.run/');
    websocket.onopen = () => {
        console.log('WebSocket is connected');
        // Generate a unique client ID
        const id = Math.floor(Math.random() * 1000);
        setClientId(id);
      };
  
    // WebSocket message handler
    websocket.onmessage = (event) => {
        try{
        
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

      } = newData ;
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


      
      
      
      const newFeedLength = newData.current_breaking_time; // Example: Extract feedLength from the incoming message
      // Get current time to use as label
      const currentTime = new Date().toLocaleTimeString().slice(0, 8); // Format time as HH:mm
     // Update chart data with the new incoming data
      setChartData((prevData) => {
        const updatedLabels = [...prevData.labels, currentTime];
        const updatedData = [...prevData.datasets[0].data, newFeedLength];
     // Keep only the latest 6 data points (optional)
        if (updatedLabels.length > 6) {
          updatedLabels.shift();
          updatedData.shift();
        }
          return {
          labels: updatedLabels,
          datasets: [
            {
              ...prevData.datasets[0],
              data: updatedData,
            },
          ],
        };
      });
    }catch{

    }
    };

    // Clean up WebSocket connection when the component is unmounted
    return () => {
        websocket.close();
    };
  }, []); // Empty dependency array means this effect runs once when the component mounts

   // Line Chart Options with Auto-Scale Y-Axis
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Cable Production',  // Title of the chart
        
      },
      legend: {
        position: 'top',  // Position of the legend
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'TIME',
        },
        ticks: {
          padding: 5,
        },
      },
      y: {
        title: {
          display: true,  // Disable Y-axis title if not necessary
          text:"Feed Rate(M per Minute)"
        },
        beginAtZero: true,
        ticks: {
          padding: 5,  // Adjust the space between ticks and chart
        },
      },
    }
  }

 



 return(
<>
<Navbar/>

</>
);
};

export default RealTimeLineChart;




