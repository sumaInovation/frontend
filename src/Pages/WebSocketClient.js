import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import DynamicPieChart from './DynamicPiechart'
import RealTimeLineChart1 from '../Component/Linechart'

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
        borderColor: 'green',
        tension: 0.5,
        pointRadius: 0,
        pointBackgroundColor: 'gray',
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
      <div class="lg:grid lg:grid-cols-12 lg:grid-rows-12 pt-24 ">


        <div class="bg-gray-800 p-4 row-span-10 col-span-2   hidden lg:block ">

          <ul className='m-4 text-white'>
            <li className='  text-center'>MENUE</li>
            <li className='p-2'>
              <span class="material-icons text-white">
                description
              </span>
              Daily Production</li>
            <li className='p-2'>
            <span class="material-icons text-white">
                description
              </span>
              Monthly Production</li>
            <li className='p-2'>
            <span class=" text-3xl material-icons">
             download
             </span>
              
              Report Download</li>
          </ul>

        </div>
        <div class="bg-gray-700 p-4 row-span-10 col-span-10 min-h-screen">
          <div className="container mx-auto p-4">
            {/* 3-Column Grid */}
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
                      <span className="font-medium">Last Update</span>
                      <span className="text-gray-800 text-sm">{''}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 2 */}
              <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">Column 2</h3>
                <p className="text-gray-600">This is some content for the second column.</p>
              </div>

              {/* Column 3 */}
              <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">Column 3</h3>
                <p className="text-gray-600">This is some content for the third column.</p>
              </div>
              {/* Row2 Column1  */}
              <div className="bg-gray-200 p-6  rounded-lg shadow-lg ">
                <DynamicPieChart title={"Daily Prodcution"}
                  ruunigvalue={parseInt(_todayTotalRun, 10) + parseInt(_current_running_time)}
                  breakingvalue={parseInt(_todayTotalBreake, 10) + parseInt(_current_breaking_time, 10)} />
              </div>
              {/*Row2  Column 2 */}
              <div className="bg-gray-200 p-6  rounded-lg shadow-lg ">
                <Line data={chartData} options={options} className='mt-36 ' />
              </div>

              {/*Row2  Column 3 */}
              <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">Column 3</h3>
                <p className="text-gray-600">This is some content for the third column.</p>
              </div>
            </div>
          </div>

        </div>




      </div>
    </>
  );
};

export default RealTimeLineChart;




