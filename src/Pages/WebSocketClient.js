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

 

//   return (
//     <>
//     <div  className='flex justify-center items-center w-full border-l-indigo-700 bg-teal-500'>
//     <div>
//     <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-4">
    
//     {/* Running Time Card */}
//     <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-between">
//       <h2 className="text-xl font-semibold text-gray-800">{machinestate==1?"Running Time":"Breakdown Time"}</h2>
//       <p className={`text-4xl font-bold ${machinestate ===1 ? "text-green-600" : "text-red-600"}`}>{machinestate==1?_current_running_time:_current_breaking_time} min</p>
//       <p className="text-sm text-gray-600">{machinestate==1?"Time Since Last Restart":"Time since Last Breakdown"}</p>
//     </div>

//     {/* Machine State Card */}
//     <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-between">
//       
//       <p className="text-sm text-gray-600">Current machine status</p>
//     </div>

//     {/* Breakdown Status Card */}
//     <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-between">
//       <h2 className="text-xl font-semibold text-gray-800">Production Quantity</h2>
//       <p className={`text-4xl font-bold text-green-600`}>
//         {_current_running_time} M
//       </p>
//       <p className="text-sm text-gray-600">Today Cable Production</p>
//     </div>

//   </div>

 

// <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4">
// <div className="bg-gray-200 p-6 rounded-lg shadow-md  flex justify-center items-center w-full h-96">
  
//    <DynamicPieChart ruunigvalue={_todayTotalRun}
//    breakingvalue={_todayTotalBreake}
//    />
//    </div>
//    <div className="bg-gray-200 p-6 rounded-lg shadow-md  flex justify-center items-center w-full h-96">
//    <Line data={chartData} options={options}/>
//    </div>
//    </div>
   

 
 
//    </div>
//    </div>
    
//   </>
//   );

 return(
<>
<div className="lg:grid grid-cols-12 grid-rows-12 gap-1 bg-gray-900">
  {/* Sidebar */}
  <div className="m-4 bg-orange-200 text-white p-4 lg:col-span-2 lg:row-span-12 lg:block hi">
    <h1 className="text-center">First Column</h1>
  </div>

  {/* Running time or breakdown time */}
  <div className="m-4 bg-green-500 text-white p-4 col-span-3 row-span-3 rounded-lg shadow">
       <h2 className="text-xl font-semibold text-gray-800">{machinestate==1?"Running Time":"Breakdown Time"}</h2>
      <p className={`text-4xl font-bold ${machinestate ===1 ? "text-green-600" : "text-red-600"}`}>{machinestate==1?_current_running_time:_current_breaking_time} min</p>
      <p className="text-sm text-gray-600">{machinestate==1?"Time Since Last Restart":"Time since Last Breakdown"}</p>
  </div>

  {/*Machinestste*/}
  <div className="m-4 bg-yellow-500 text-white p-4 col-span-3 row-span-3 rounded-lg shadow">
    <h2 className=' text-xl font-semibold text-gray-800'>MACHINE STATE</h2>
    <p className={`text-4xl font-bold ${machinestate ===1 ? "text-green-600" : "text-red-600"}`}>{machinestate==1?"Machine is Runnign":"Machine Stop"}</p>
  <p className="text-sm text-gray-600">Current machine status</p>
  </div>

  {/* production quntirt */}
  <div className="m-4 bg-purple-500 text-white p-4 col-span-3 row-span-3 rounded-lg shadow">
  <h2 className="text-xl font-semibold text-gray-800">Production Quantity</h2>
     <p className={`text-4xl font-bold text-green-600`}>
       {_current_running_time} M
      </p>
  </div>
     {/* 1st card */}
  <div className="m-4 bg-gray-800  text-white p-4 col-span-5 row-span-9 rounded-lg shadow min-h-[100px]">
  <DynamicPieChart ruunigvalue={_todayTotalRun}breakingvalue={_todayTotalBreake}/>
  </div>
  <div className="m-4 bg-gray-800  text-white p-4 col-span-4 row-span-9 rounded-lg shadow min-h-[100px]
  flex justify-center items-center
  ">
  <Line data={chartData} options={options}/>
  </div>

 
</div>

</>
);
};

export default RealTimeLineChart;
