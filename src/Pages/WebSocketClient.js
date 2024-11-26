import React, { useState, useEffect } from 'react';
import RealTimeChart from '../Component/rechart'
import useWebSocket from 'react-use-websocket';
import Barchart from '../Component/Barchart'
import LineChartExample from '../Component/Linechart'
import PieChart from '../Component/Piechart'
import Card from '../Component/NewCard'
 const WebSocketClient = () => {
  // URL of your WebSocket server
  const socketUrl = 'ws://localhost:5000'; // Replace with your WebSocket server URL

  // Using the `useWebSocket` hook
  const data1=[10, 19, 3, 5, 45, 10,20];
  const[length,setLenght]=useState(0);
  const[todayruntime,setTodayruntime]=useState(0);
  const[todaybreakingtime,setTodaybreakingtime]=useState(0);
  const [displayruntime,setDisplayruntime]=useState(0);
  const[displaybreakingtime,setDisplaybreakingtime]=useState(0);
  const[currentstate,setCurrentstate]=useState(0);
  const currentDate = new Date();

  // Get the full month name using toLocaleString
  const monthName = currentDate.toLocaleString('default', { month: 'long' });

  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl, {
    onOpen: () => console.log('WebSocket connection opened'),
    onClose: () => console.log('WebSocket connection closed'),
    onError: (error) => console.error('WebSocket error: ', error),
    onMessage: (message) => {
      // Parse the incoming JSON data and update state
      try{
        const data = JSON.parse(message.data);
        const {current_breaking_time,current_running_time,run_time,stop_time}=data;
        if(run_time!==undefined){
          setTodayruntime(run_time);
        
        }
        if(stop_time!==undefined){
          setTodaybreakingtime(stop_time);
        }
        if(current_running_time!==undefined){
           setDisplayruntime(parseInt(current_running_time,10)+parseInt(todayruntime,10));
           setCurrentstate(1);
        }
        if(current_breaking_time!==undefined){
          setDisplaybreakingtime(parseInt(current_breaking_time,10)+parseInt(todaybreakingtime,10));
          setCurrentstate(0);

        }
        
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
        <PieChart Title={` ${currentDate.toLocaleDateString()}  Cable Production`}/>
        </Card>
        </div>
        <div className="col-span-1">
          <Card  title={"FEEDING LENGHT"}>
            <RealTimeChart incommingdata={displaybreakingtime}/>
          </Card>
        </div>
        <div className="col-span-1">
            <Card   discription={"This month Production hours"}>
            <PieChart Title={`${monthName} Cable Production`}/></Card>
        </div>
      </div>
    </div>
     
     </>
  );
};

export default WebSocketClient;



//<Barchart value={data1} />