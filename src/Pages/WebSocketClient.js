import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import DynamicPieChart from './tes'

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
  const [isDaily, setIsaDaily] = useState(0);

  // Set up initial chart data state

  const [chartData, setChartData] = useState({
    labels: ['00:00', '00:10', '00:20', '00:30', '00:40', '00:50'],
    datasets: [
      {
        label: '',
        data: [0, 20, 45, 5, 0, 60],
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
      } catch {

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
          text: "Feed Rate(M per Minute)"
        },
        beginAtZero: true,
        ticks: {
          padding: 5,  // Adjust the space between ticks and chart
        },
      },
    }
  }





  return (
    <>

      <div class="flex h-screen bg-gray-900">

        {/* <!-- sidebar --> */}
        <div class="hidden lg:flex flex-col w-64 bg-gray-800">
          <div class="flex items-center justify-center h-16 bg-gray-900">
            <span class="text-white font-bold uppercase">Sidebar</span>
          </div>
          <div class="flex flex-col flex-1 overflow-y-auto">
            <nav class="flex-1 px-2 py-4 bg-gray-800">

              <a href="#" class="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700">
                <svg width="40px" height="40px" viewBox="0 0 24 24">
                  <g
                    fill="none"
                    fillRule="evenodd"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6.5 10.5l4 4.232 4-4.191M10.5 3.5v11M4.5 17.5h12" />
                  </g>
                </svg>
                Report Download
              </a>
              <a href="#" class="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700">
                <svg width="40px" height="40px" viewBox="0 0 24 24">
                  <g
                    fill="none"
                    fillRule="evenodd"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7.5 4.5c-.441 0-1.039-.004-1.998-.005a1 1 0 00-.995.881l-.007.12v10.997c0 .552.448 1 1 1l10 .006a1 1 0 00.994-.882l.006-.117v-11a1 1 0 00-1-1h-2" />
                    <path d="M8.5 3.5h4a1 1 0 110 2h-4a1 1 0 110-2zM6.5 8.5h5M6.5 10.5h7M6.5 12.5h3M6.5 14.5h6" />
                  </g>
                </svg>
                <h1 className="p-2">Daily Production</h1>
              </a>
              <a href="#" class="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700">
                <svg width="40px" height="40px" viewBox="0 0 24 24">
                  <g
                    fill="none"
                    fillRule="evenodd"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7.5 4.5h-2a1 1 0 00-1 1v11a1 1 0 001 1h10a1 1 0 001-1v-11a1 1 0 00-1-1h-2" />
                    <path d="M8.5 3.5h4a1 1 0 110 2h-4a1 1 0 110-2zM9.5 8.5h5M9.5 11.5h5M9.5 14.5h5M6.5 8.5h1M6.5 11.5h1M6.5 14.5h1" />
                  </g>
                </svg>
                <h1 className="p-2">Monthly Production</h1>
              </a>
            </nav>
          </div>
        </div>

        {/* <!-- Main content --> */}
        <div class="flex flex-col flex-1 overflow-y-auto">
          <div class="flex items-center justify-between h-16  border-b border-gray-200 bg-gray-900">
            <div class="flex items-center px-4 ">
              <button class="text-gray-500 focus:outline-none focus:text-gray-700 lg:hidden " >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <input class="mx-4 w-full border rounded-md px-4 py-2 bg-slate-900" type="text" placeholder="Search" />
              <svg width="40px" height="40px" viewBox="0 0 24 24">
                <g
                  fill="none"
                  fillRule="evenodd"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M13.5 8.5 A5 5 0 0 1 8.5 13.5 A5 5 0 0 1 3.5 8.5 A5 5 0 0 1 13.5 8.5 z" />
                  <path d="M17.571 17.5L12 12" />
                </g>
              </svg>

            </div>
            <div class="flex items-center pr-4">

              <button
                class="flex items-center text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 19l-7-7 7-7m5 14l7-7-7-7" />
                </svg>
              </button>
            </div>
          </div>
          <div class="p-4">
            <h1 class=" text-2xl lg:text-5xl font-bold text-white text-center">Realtime Data Monitoring System</h1>
            <div className='grid lg:grid-cols-12'>
              <div className="m-4 bg-stone-300 text-white p-4 col-span-4 row-span-3 rounded-lg shadow">
                <h2 className="text-xl font-semibold text-gray-800">{machinestate == 1 ? "Running Time" : "Breakdown Time"}</h2>
                <p className={`text-4xl font-bold ${machinestate === 1 ? "text-green-600" : "text-red-600"}`}>{machinestate == 1 ? _current_running_time : _current_breaking_time} min</p>
                <p className="text-sm text-gray-600">{machinestate == 1 ? "Time Since Last Restart" : "Time since Last Breakdown"}</p>

              </div>
              <div className="m-4 bg-stone-300 text-white p-4 col-span-4 row-span-3 rounded-lg shadow">
                <h2 className=' text-xl font-semibold text-gray-800'>MACHINE STATE</h2>
                <p className={`text-4xl font-bold ${machinestate === 1 ? "text-green-600" : "text-red-600"}`}>{machinestate == 1 ? "Machine is Runnign" : "Machine Stop"}</p>
                <p className="text-sm text-gray-600">Current machine status</p>

              </div>
              <div className="m-4 bg-stone-300 text-white p-4 col-span-4 row-span-3 rounded-lg shadow">
                <h2 className="text-xl font-semibold text-gray-800">Production Quantity</h2>
                <p className={`text-4xl font-bold text-green-600`}>
                  {_current_running_time} M
                </p>

              </div>
            </div>

          </div>
        </div>

      </div>







    </>
  );
};

export default RealTimeLineChart;




