import React, {useState,useEffect} from 'react';
import PieChart from '../Component/Piechart'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
  } from 'recharts';
const WebSocketClient = () => {
    const [_current_running_time,setCurrent_running_time]=useState(0);
    const [_current_breaking_time,setCurrent_breaking_time]=useState(0);
    const [_todayTotalBreake,setTodaybreaktime]=useState(0);
    const [_todayTotalRun,setTodayruntime]=useState(0);
    const [_run_value,setRunvalue]=useState(0);
    const[_breake_value,setBreakvalue]=useState(0);
    const[_thismontTotalBreake,setThismontTotalBreake]=useState(0)
    const [_thismontTotalRun,setThismonthTotalRun]=useState(0)
    const [ws, setWs] = useState(null);
    const [message, setMessage] = useState('');
    const [clientId, setClientId] = useState('');
    const[machinestate,setMachinestate]=useState(0);
     const incommingdata=[100,200,300]
    useEffect(() => {
        const websocket = new WebSocket('ws://localhost:5000');

        websocket.onopen = () => {
            console.log('WebSocket is connected');
            // Generate a unique client ID
            const id = Math.floor(Math.random() * 1000);
            setClientId(id);
        };

        websocket.onmessage = (evt) => {
            const message = (evt.data);
            try{

    
                const data=JSON.parse(message)
                const {
                    run_value,
                    breake_value,
                    current_running_time,
                    current_breaking_time,
                    todatTotalBreake,
                    todayTotalRun,
                    thismontTotalBreake,
                    thismontTotalRun 
                       
                    }=data;
                if(current_breaking_time!==undefined){
                    setCurrent_breaking_time(current_breaking_time);
                    setMachinestate(0);
                }
                if(current_running_time!==undefined){
                    setCurrent_running_time(current_running_time);
                    setMachinestate(1);
                }
               
                if(run_value!==undefined){
                setRunvalue(run_value);
                }
                if(breake_value!==undefined){
                setBreakvalue(breake_value);
                }
                if(todatTotalBreake!==undefined){
                setTodaybreaktime(todatTotalBreake)
                }
                if(todayTotalRun!==undefined){
                setTodayruntime(todayTotalRun);
                }
                if(thismontTotalBreake!==undefined){
                setThismontTotalBreake(thismontTotalBreake);
                }
                if(thismontTotalRun!==undefined){
                setThismonthTotalRun(thismontTotalRun);
                }
                
               
            
            }catch{

            }
           
        };

        websocket.onclose = () => {
            console.log('WebSocket is closed');
        };

        setWs(websocket);

        return () => {
            websocket.close();
        };
    }, []);

    

    

    return (
    <>
          
 <div class=" bg-slate-700 flex justify-center items-center">
  {/* <!-- Centered Container --> */}
  <div class="w-full max-w-7xl p-8">
    <div className='p-5'>
    <h1 class="text-center text-white text-4xl p-2 ">Realtime Data Monitoring System</h1>
    </div>
  
  
    {/* <!-- 3-Column Grid Layout --> */}
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      
      {/* <!-- Column 1 --> */}
      <div class="bg-gray-800 p-6 rounded-lg shadow-lg text-white flex flex-col justify-between">
        <h2 class="text-2xl font-semibold mb-4 text-center">Current Runnign Time</h2>
        <p class="flex-grow text-center">{_current_running_time} Seconds</p>
      </div>

      {/* <!-- Column 2 --> */}
      <div class="bg-gray-800 p-6 rounded-lg shadow-lg text-white flex flex-col justify-between">
        <h2 class="text-2xl font-semibold mb-4 text-center">Machine State</h2>
        <p className={`flex-grow text-center text-4xl ${machinestate==1?"text-green-500":"text-red-700"}`}>{machinestate==1?"Running..":"STOP"}</p>
      </div>

      {/* <!-- Column 3 --> */}
      <div class="bg-gray-800 p-6 rounded-lg shadow-lg text-white flex flex-col justify-between">
        <h2 class="text-2xl font-semibold mb-4 text-center">Current Breakdown Time</h2>
        <p class="flex-grow text-center">{_current_breaking_time}</p>
      </div>

      {/* Pie Chart */}
      <div class="bg-gray-800 p-6 rounded-lg shadow-lg text-white flex flex-col justify-between">
        <h2 class="text-2xl font-semibold mb-4 text-center">Today Preduction</h2>
        <PieChart incommingdata={incommingdata}/>
      </div>
      {/* line Chart */}
      <div class="bg-gray-800 p-6 rounded-lg shadow-lg text-white flex flex-col justify-between">
        <h2 class="text-2xl font-semibold mb-4 text-center">Production Rate</h2>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-8">
      <h2 className="text-2xl mb-4">Real-Time Sensor Value</h2>
      <div className="w-full h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={_current_breaking_time}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time"/>
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="sensorValue"
              stroke="#8884d8"
              activeDot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
     {/* **************************************    */}
      </div>
      {/* This Month Production */}
      <div class="bg-gray-800 p-6 rounded-lg shadow-lg text-white flex flex-col justify-between">
        <h2 class="text-2xl font-semibold mb-4 text-center">This Month Production</h2>
        <PieChart incommingdata={incommingdata}/>
      </div>
      
    </div>
  </div>
</div>

     </>
    );
};

export default WebSocketClient;
