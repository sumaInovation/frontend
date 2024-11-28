import React, { useState, useEffect } from 'react';
import MachineSpeedChart from '../Component/rechart'
import useWebSocket from 'react-use-websocket';
import Barchart from '../Component/Barchart'
import LineChartExample from '../Component/Linechart'
import PieChart from '../Component/Piechart'
import Card from '../Component/NewCard'
 const WebSocketClient = () => {
  // URL of your WebSocket server
  const socketUrl = 'ws://localhost:5000'; // Replace with your WebSocket server URL

  // Using the `useWebSocket` hook
  const [data, setData] = useState([]); // Store graph data
  const[length,setLenght]=useState(0);
  const[todayruntime,setTodayruntime]=useState(0);
  const[todaybreakingtime,setTodaybreakingtime]=useState(0);
  const[currentstate,setCurrentstate]=useState(0);
  const currentDate = new Date();
  const [MonthRunTime,SetThisMonthRunTime]=useState(0);
  const [MonthBreakeTime,SetThisMonthBreakeTime]=useState(0);
  const[current_run,setCurrent_run]=useState(0);
  const[current_broken,setCurrent_broken]=useState(0);

  // Get the full month name using toLocaleString
  const displayruntime=parseInt(current_run,10)+parseInt(todayruntime,10);
  const displaybreakingtime=parseInt(current_broken,10)+parseInt(todaybreakingtime,10);

  const monthName = currentDate.toLocaleString('default', { month: 'long' });
  const Thismonthupdates=[MonthRunTime,MonthBreakeTime,50,50];
  const TodayUpdates=[displayruntime,displaybreakingtime,50,50];

  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl, {
    onOpen: () => console.log('WebSocket connection opened'),
    onClose: () => console.log('WebSocket connection closed'),
    onError: (error) => console.error('WebSocket error: ', error),
    onMessage: (message) => {
      
      
      // Parse the incoming JSON String data and update state
      try{
        const data = JSON.parse(message.data);//Convert to json string to json object to access any daya
        //using key values
        const {current_breaking_time,current_running_time,run_time,stop_time,
          thisMonthBreakeTime,thisMonthRunTime}=data;//Set data to keyvalues
        if(run_time!==undefined){
          setTodayruntime(run_time);//update runtime
      
          //We want to also update both piechar becouse we have to read current month data from
          //data base
          }
        if(thisMonthBreakeTime!=undefined){
           SetThisMonthBreakeTime(thisMonthBreakeTime)
          
        }
          if(thisMonthRunTime!=undefined){
           SetThisMonthRunTime(thisMonthRunTime);
         
          }
        if(stop_time!==undefined){
          setTodaybreakingtime(stop_time);
          
          
        }
        if(current_running_time!==undefined){
          
           setCurrentstate(1);
           setCurrent_run(current_running_time);
         
          
        }
        if(current_breaking_time!==undefined){
          
          setCurrentstate(0);
          setCurrent_broken(current_breaking_time);
          

        }

        //********************* */
        setData((prevData) => {
          const updatedData = [...prevData, { timestamp: new Date().toLocaleDateString(), speed:displayruntime}];
          if (updatedData.length > 10) {
            updatedData.shift(); // Keep the last 10 data points
          }
          return updatedData;
        });

        //********************** */
        
      }catch{

      }
      
    }
  });
  


  return (
    <>
  
     <div className="min-h-screen bg-gray-100 p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {/* Repeat the Card component */}
        <div className="col-span-1">
          <Card  title={"RUNNING HOURS"} time={displayruntime}/>
        </div>
        <div className="col-span-1">
          <Card title={"MACHINE STATE"}  currentstate={currentstate}/>
        </div>
        <div className="col-span-1">
          <Card title={"BREKDOWN HOURS"} time={displaybreakingtime}/>
        </div>
        <div className="col-span-1">
        <Card   discription={"Today Production hours"}>
        <PieChart Title={` ${currentDate.toLocaleDateString()}  Cable Production`} incommingdata={TodayUpdates}/>
        </Card>
        </div>
        <div className="col-span-1">
          <Card  title={"FEEDING LENGHT"}>
            {displayruntime}
            <MachineSpeedChart data={data}/>
          </Card>
        </div>
        <div className="col-span-1">
            <Card   discription={"This month Production hours"}>
            <PieChart Title={`${monthName} Cable Production`} incommingdata={Thismonthupdates}/></Card>
        </div>
      </div>
    </div>
     
     </>
  );
};

export default WebSocketClient;



//<Barchart value={data1} />